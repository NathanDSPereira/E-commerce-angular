
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7812, hash: '932bbc4a10642215c9b83c5bda6aa081235255dc4c38cd96845d623398c73ecc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'cb6227126f7f5ee7dce4780e9fd82cc8c2ac20a06e50412dff921d8fc5387bbb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XXFKH5JX.css': {size: 27477, hash: 'bMFRs0+OL0c', text: () => import('./assets-chunks/styles-XXFKH5JX_css.mjs').then(m => m.default)}
  },
};
