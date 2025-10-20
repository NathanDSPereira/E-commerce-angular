
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7854, hash: '3da17a9dac0f40711f6909e55ea9044fb08f85e8b08090da5a2d6484fc28fce2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '7a41eb0ddb250326c6e12f222bc304c18d0cd30518f6590f8de201e33ba6a07c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RWJLOLRM.css': {size: 29893, hash: 'GfOOrI57HYo', text: () => import('./assets-chunks/styles-RWJLOLRM_css.mjs').then(m => m.default)}
  },
};
