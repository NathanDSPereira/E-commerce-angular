
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7605, hash: '5c2643bfe223630b82b00426f916000e77803eb5fba09fb62ad497a51bc4029a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'a9c698b7791264cd3c7e0e0ed2397dfdbe7a83a2f51d13526172235c29953924', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GRXGZNDJ.css': {size: 25381, hash: '77cURSqJJsE', text: () => import('./assets-chunks/styles-GRXGZNDJ_css.mjs').then(m => m.default)}
  },
};
