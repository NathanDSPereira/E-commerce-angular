
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7854, hash: '6dae590a1a966395186d174ae66efaff9b8e01e4ed81a7c78b6d2bef902e9dab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '2f7b3d4137ca760a01b6e5374a14718030081c26797a2c7721ca32c3a2a011eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RWJLOLRM.css': {size: 29893, hash: 'GfOOrI57HYo', text: () => import('./assets-chunks/styles-RWJLOLRM_css.mjs').then(m => m.default)}
  },
};
