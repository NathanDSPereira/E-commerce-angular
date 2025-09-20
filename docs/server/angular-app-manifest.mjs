
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7605, hash: '5e635003de624a745eda4b21fc7d2213c55b090417548b8e3f599bd86c802ea8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '47d1a2c0fb365349a713b39e0c21e87b79a42ed2393fc9422d2833769c57efea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5CJMXKUH.css': {size: 25693, hash: 'oYcNSE3fCgI', text: () => import('./assets-chunks/styles-5CJMXKUH_css.mjs').then(m => m.default)}
  },
};
