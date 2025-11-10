
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '5fdd3752ef10150f68d24ef8a494913d4fca5bccba69c87ef937a8d2f3fb4887', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '61ce3ce6ea4ae34064aaf17e7bfd09df25f8480a2c367c61ab0f284094b02d56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DKR5DU2.css': {size: 28522, hash: '+c13eGFGaB4', text: () => import('./assets-chunks/styles-7DKR5DU2_css.mjs').then(m => m.default)}
  },
};
