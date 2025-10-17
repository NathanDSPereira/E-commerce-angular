
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7854, hash: '946145a29c26e08bc879bd48491e5e68362596dc908429f59dd0942761fcc1fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '91e382b5395c0a4071a768859ddd362e99a651f8ccd680985443e6319154cd56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RWJLOLRM.css': {size: 29893, hash: 'GfOOrI57HYo', text: () => import('./assets-chunks/styles-RWJLOLRM_css.mjs').then(m => m.default)}
  },
};
