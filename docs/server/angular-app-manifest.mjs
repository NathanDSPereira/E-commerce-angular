
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7854, hash: '57bcaf2b9752f67f36faf3e25ed632cd15eb64b745ff06d08cce3d9d00292966', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'bfa3ac07906926de82188b385e63a0328e552024ca061317fa56bca29d78c4ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RWJLOLRM.css': {size: 29893, hash: 'GfOOrI57HYo', text: () => import('./assets-chunks/styles-RWJLOLRM_css.mjs').then(m => m.default)}
  },
};
