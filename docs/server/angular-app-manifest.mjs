
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '7ba922abf64547ad39bec0b901b421cc29eab9ab2f5c22574c2f1dd33acef480', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '9475e0e416e2a7feec4e190c4068901fe7e9bcc3530ccd675583b1c11495e396', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DKR5DU2.css': {size: 28522, hash: '+c13eGFGaB4', text: () => import('./assets-chunks/styles-7DKR5DU2_css.mjs').then(m => m.default)}
  },
};
