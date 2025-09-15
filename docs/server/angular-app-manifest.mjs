
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7534, hash: 'c8decba7054fcc259ff35a6fb325958cecc615ea0284cd207598f4ae84fceb88', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '8f4020511c75b316175a0ec670157dcb6cf13e7c9ddbdbc4f178c7b24fe15984', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2NB5Q6EE.css': {size: 25100, hash: 'v17a55ApMds', text: () => import('./assets-chunks/styles-2NB5Q6EE_css.mjs').then(m => m.default)}
  },
};
