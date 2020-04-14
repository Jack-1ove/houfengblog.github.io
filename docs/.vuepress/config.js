const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: '侯丰的个人博客',
  description: '侯丰的个人博客的文档, vuepress 文档',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'https://github.com/Jack-1ove/houfeng.github.io',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf,
    algolia: {
      appId: 'M698VCXCJN',
      apiKey: '8b552055fb68ffc808bfbd3f98a1dbe2',
      indexName: 'shanyuhai_documents',
      algoliaOptions: {
        hitsPerPage: 10,
        facetFilters: ""
      }
    }
  },
}