
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 6622, hash: 'e09c619a3a1a757ce99bacebe0b3ea7742d986d49351ac410504f00e4b0f688a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '4d9886f1a056dbd1662053bb965fb7e64667f90d9cb1cebee670ebbfac97d44a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SKEEDWPW.css': {size: 26081, hash: 'obtfQinOt1E', text: () => import('./assets-chunks/styles-SKEEDWPW_css.mjs').then(m => m.default)}
  },
};
