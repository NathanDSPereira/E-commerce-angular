
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 12858, hash: '8151bc44aee3ee7c253d78e0e2f21f36d4c421f18ad3bcbd0ea641afef6311d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'c991e23c3284db0169fe07113bbd37f6eb59adc379d14e292dbaef5466aa8f0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CEA2V5WX.css': {size: 36123, hash: 'wTbqyzu3JUY', text: () => import('./assets-chunks/styles-CEA2V5WX_css.mjs').then(m => m.default)}
  },
};
