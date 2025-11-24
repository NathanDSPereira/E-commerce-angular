
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '3a703c2f2d4ba55d90d94d3aaa681747a7d4575fd22a50f895efc5e3a09a307a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'e5a38b92868ebbb236e654477da7fe8d636b70c3460897610a88765a4ff594c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DKR5DU2.css': {size: 28522, hash: '+c13eGFGaB4', text: () => import('./assets-chunks/styles-7DKR5DU2_css.mjs').then(m => m.default)}
  },
};
