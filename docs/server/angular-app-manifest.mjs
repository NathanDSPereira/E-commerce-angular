
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20760, hash: 'e5c89f5b6e038e2b287eb2b2d476d4819254db45209128fccdfbbb1b082bb206', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: '95dd41a95256fde0597b78ec1b79a0dcafa1dc34a10e1122bd1ca4c35df2f25c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GSRVXLYY.css': {size: 40038, hash: 'Fx2lbeYvH/w', text: () => import('./assets-chunks/styles-GSRVXLYY_css.mjs').then(m => m.default)}
  },
};
