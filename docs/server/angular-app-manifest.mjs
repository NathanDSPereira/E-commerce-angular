
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20697, hash: 'e0a41750b34dd9ac45fdd16405904c99c17df3de6c7e162bb86dd08c78d4c2f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: 'dd65976737c0320f4a65610c43f5e5211939206e7e53c237211cc18171335b29', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UXFL3KLT.css': {size: 39709, hash: 'FoZ9L9ZgINM', text: () => import('./assets-chunks/styles-UXFL3KLT_css.mjs').then(m => m.default)}
  },
};
