
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7682, hash: '9a306795c9c77252b8b00ebe75e8438bd286a24f130d7f0d7d2a3d16ed0762f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'f34b6d7184e974f7bb73f79152deeb9904778beabb2f5d340bfa719d82fe4e01', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IO4VUHLB.css': {size: 26271, hash: 'qkNO3lHeCj4', text: () => import('./assets-chunks/styles-IO4VUHLB_css.mjs').then(m => m.default)}
  },
};
