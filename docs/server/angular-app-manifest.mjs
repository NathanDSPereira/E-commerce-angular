
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7812, hash: 'ff3d9fdd647e77932303ebd58954b5c30af308b91a07ad5bebbd45e221011aec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'b7ba8bc290215085d8732ac941178d182b160e53bc1eda0b64797173acd91b9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JOWSDEDS.css': {size: 28871, hash: '3xRbnuSaimk', text: () => import('./assets-chunks/styles-JOWSDEDS_css.mjs').then(m => m.default)}
  },
};
