const fs = require('fs');
const path = require('path');

// 极简 front matter 解析：只处理 `key: value` 形式的单行字段（站点文章格式固定，够用）
function parseFrontMatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  if (!match) {
    return {};
  }
  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const m = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!m) {
      return;
    }
    let value = m[2].trim();
    value = value.replace(/\s+#.*$/, ''); // 去掉行内注释
    value = value.replace(/^["']|["']$/g, ''); // 去掉引号
    data[m[1]] = value;
  });
  return data;
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) {
    return out;
  }
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (/\.mdx?$/.test(entry.name)) {
      out.push(full);
    }
  });
  return out;
}

function formatDate(dateStr) {
  // 直接按 YYYY-MM-DD 解析，避免时区把日期往前挪一天
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateStr);
  if (!m) {
    return dateStr;
  }
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}

module.exports = function blogSectionsPlugin(context) {
  const blogDir = path.join(context.siteDir, 'blog');

  return {
    name: 'blog-sections',

    async loadContent() {
      const posts = walk(blogDir).map((file) => {
        const raw = fs.readFileSync(file, 'utf8');
        const fm = parseFrontMatter(raw);
        const dirName = path.basename(path.dirname(file));
        const fileBase = path.basename(file, path.extname(file));
        const name = fileBase === 'index' ? dirName : fileBase;
        const slug = (fm.slug || name.replace(/^\d{4}-\d{2}-\d{2}-/, '')).trim();
        const dateFromName = /^(\d{4}-\d{2}-\d{2})/.exec(name);
        const date = fm.date || (dateFromName ? dateFromName[1] : '');
        const body = raw.slice(raw.indexOf('---', 3) + 3);
        const readingMinutes = Math.max(
          1,
          Math.round(body.replace(/\s/g, '').length / 400)
        );

        return {
          slug,
          permalink: `/blog/${slug}`,
          title: fm.title || slug,
          description: fm.description || '',
          section: (fm.section || '').trim(),
          date,
          formattedDate: formatDate(date),
          readingMinutes,
          source: path.relative(context.siteDir, file),
        };
      });

      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      return posts;
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ posts: content });
    },
  };
};
