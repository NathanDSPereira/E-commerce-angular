
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7854, hash: '1c7281226e2ab0275eea3099b85330c6e896007297695faf2379cdcfbbd9f974', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'b7a73a865ec3ebb468d3874bac69213d983be2ceb7930e409e5083e0a659ee9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RWJLOLRM.css': {size: 29893, hash: 'GfOOrI57HYo', text: () => import('./assets-chunks/styles-RWJLOLRM_css.mjs').then(m => m.default)}
  },
};
