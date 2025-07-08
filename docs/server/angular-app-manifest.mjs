
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5564, hash: '8752866a312e03e96bd5675eac86e8efcf1b4daff4b7565f32e51e63580d1850', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'c82d73e0d573cd57b5de906c9c26d4d1de93afaa74d5f67d4e02a2f4458e25d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2D2EGGL7.css': {size: 14742, hash: 'rJeFwoAZfY4', text: () => import('./assets-chunks/styles-2D2EGGL7_css.mjs').then(m => m.default)}
  },
};
