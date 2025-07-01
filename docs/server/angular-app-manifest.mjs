
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5564, hash: '1e076303aced8ff0b269092b0bdac6bfd7e2edb3a9ffa0de46e7dbe466f9ee29', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'be119db7c868a8422afe9f1178371fd1a7c28fe18f4ca5cbd294c0cc5c037efd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FLUQKAZC.css': {size: 14700, hash: 'mWsJyqsoEIw', text: () => import('./assets-chunks/styles-FLUQKAZC_css.mjs').then(m => m.default)}
  },
};
