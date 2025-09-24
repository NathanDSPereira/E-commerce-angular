
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '6a56f41d8c2d21a2d0fc05cc2902414010ddd8025a6932eb4855c68976597b51', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'aa300bb8e511227df33eb4946d18a99ed644f2ff28d0e7fa3ef9f5ac21d9919b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QA6XE2IY.css': {size: 26114, hash: 'Snp0+FjN7pU', text: () => import('./assets-chunks/styles-QA6XE2IY_css.mjs').then(m => m.default)}
  },
};
