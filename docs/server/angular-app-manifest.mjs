
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7726, hash: '5acc21496f836584441cbdb50c9efcf9f21df7baa3129e25d0085c5393644aad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '6e0824850d2ac81ed7003b14d828e8c9074f3741644b0bb796adea88a4355582', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DNO5H2ER.css': {size: 27154, hash: '8qzcw5IQkoI', text: () => import('./assets-chunks/styles-DNO5H2ER_css.mjs').then(m => m.default)}
  },
};
