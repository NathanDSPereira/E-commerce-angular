
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7605, hash: 'e35140042550640681f490156f077c7c5f7a3fdb96a3f3acd619c872e05dddbd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'd80794798bc915b34e1c05c4fb0ccfa986dfedef46e38e74bc5eb35b5eb8853a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5CJMXKUH.css': {size: 25693, hash: 'oYcNSE3fCgI', text: () => import('./assets-chunks/styles-5CJMXKUH_css.mjs').then(m => m.default)}
  },
};
