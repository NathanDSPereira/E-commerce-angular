
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '4876a1d887795c68b0450d9e980513757e08e8623b054d708d8f460b0e859d71', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '3efa3987d16ea8298a5bce700abb2992bb51b0a5f0b576f943b873f828ac5a93', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DKR5DU2.css': {size: 28522, hash: '+c13eGFGaB4', text: () => import('./assets-chunks/styles-7DKR5DU2_css.mjs').then(m => m.default)}
  },
};
