
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '8a294820e2e5f1c8f80c1b6b22b51ff805e552fcc69ab2d8489ef27538764b12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '5a718e82931fe400bca45ae3518d79718c73ecfe72749c50dd4eb6ef2d1b11be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QA6XE2IY.css': {size: 26114, hash: 'Snp0+FjN7pU', text: () => import('./assets-chunks/styles-QA6XE2IY_css.mjs').then(m => m.default)}
  },
};
