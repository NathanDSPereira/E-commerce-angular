
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7404, hash: 'a2fa5900da25b29534a6726f7f9742d9396bbd8cfd3d38ad9833c6beaa3f2d9f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '6d7855d3e8987ba08c45f70520191039f86342237771caef4db3c8d6b77199e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BTKKG5V7.css': {size: 23265, hash: '+fNGMeD2/aU', text: () => import('./assets-chunks/styles-BTKKG5V7_css.mjs').then(m => m.default)}
  },
};
