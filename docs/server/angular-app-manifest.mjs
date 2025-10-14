
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7854, hash: '12ca7d416a5461d529109a49fd36b040bf50d5252899c3f78d9a5eb9e8585ab8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '7330f38420ae7d83a66428d6dc75ce083abf1a1f1ffbda395849986c92419844', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7RWEBBDK.css': {size: 29856, hash: '+2wfxhUPHbY', text: () => import('./assets-chunks/styles-7RWEBBDK_css.mjs').then(m => m.default)}
  },
};
