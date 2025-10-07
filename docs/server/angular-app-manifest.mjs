
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7812, hash: 'c9cc0b73a68b3911c9793c65624be6ddf6f4dde5c28c1507218651a31069c816', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '4a0dbf6fa460bf69d4bf2e1f3b09a378f37f548f2279b12811504f7d901f987e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XXFKH5JX.css': {size: 27477, hash: 'bMFRs0+OL0c', text: () => import('./assets-chunks/styles-XXFKH5JX_css.mjs').then(m => m.default)}
  },
};
