
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7726, hash: 'fbe6990af411e83ad51a9c4c35f69e6fc68e74d856e21a579fa7c3efe46a0984', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '64307d1c482be2ba3888bbb68f0cf7a8205c38db0ed9aebee61973420d2b9b8b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PCSUJY7R.css': {size: 27239, hash: 'lcUT/h7VLxI', text: () => import('./assets-chunks/styles-PCSUJY7R_css.mjs').then(m => m.default)}
  },
};
