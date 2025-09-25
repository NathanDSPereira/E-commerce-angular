
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '74f348c995f56c0e4f250daa3da1cf973b1b3f8c69c4d89d1a46a64145e62247', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '80a02bdf53f671df45edd7cd67c713f3dafd8ebab18fe6bc27ddb19281519a6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QA6XE2IY.css': {size: 26114, hash: 'Snp0+FjN7pU', text: () => import('./assets-chunks/styles-QA6XE2IY_css.mjs').then(m => m.default)}
  },
};
