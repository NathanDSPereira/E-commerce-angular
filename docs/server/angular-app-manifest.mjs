
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20826, hash: '9586a3c2b766d379577d407af68d82bcaf67d42f665ecb95c03f5b309114a0eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: 'd2697ebbe18c6ae89fb9624abbc362d6340f5f9a326862f852103a9b4f9454da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LB4EBLDY.css': {size: 40918, hash: 'Z2inv3jfMG4', text: () => import('./assets-chunks/styles-LB4EBLDY_css.mjs').then(m => m.default)}
  },
};
