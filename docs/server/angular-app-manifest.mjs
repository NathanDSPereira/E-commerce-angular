
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20826, hash: '403c43ae8dabd15220c2e4fbcc1bf4487046eb3676fe670a5cfec96b455352c0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: 'bcda2e170fda992a45b0fc5ef09f847247595efc4163e963fb482a47401c7d4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AJR2FZIO.css': {size: 40793, hash: '23V8gNj/jpg', text: () => import('./assets-chunks/styles-AJR2FZIO_css.mjs').then(m => m.default)}
  },
};
