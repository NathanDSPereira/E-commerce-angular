
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7605, hash: '0990c44ff3a646736c673104d6e721c33219a2d9c39d2a5a7d02a0f8ea9abe6a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '9d9d923a4868ce5936541367119c1631cadde40304e58f378dcf0bb6c373fd70', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5CJMXKUH.css': {size: 25693, hash: 'oYcNSE3fCgI', text: () => import('./assets-chunks/styles-5CJMXKUH_css.mjs').then(m => m.default)}
  },
};
