
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7812, hash: '715d9b191bca99c47c88b70a3806494e9576f95a9e68bdc10ec1d7d3f781191a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'a03f817c969ff3e1436aa7a7e617f366b38bdbb688173b8d89b68aa34eb76a33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QCJUC2W7.css': {size: 28596, hash: 'ykraT6MwEaA', text: () => import('./assets-chunks/styles-QCJUC2W7_css.mjs').then(m => m.default)}
  },
};
