
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7812, hash: '09f63b9aa2a015dcf0cddf2df1a7fd4fd4fd826967459136e85a8f883ad65da3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '08c465a7b039fd433c836bd8a8c2688bc60495c9878fdb25bb94ba0cb9f515eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Z5SZV4HF.css': {size: 28136, hash: 'wYymsEGX5II', text: () => import('./assets-chunks/styles-Z5SZV4HF_css.mjs').then(m => m.default)}
  },
};
