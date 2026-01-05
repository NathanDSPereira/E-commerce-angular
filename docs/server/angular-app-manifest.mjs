
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20826, hash: '838e9a17680a664974274c5770b19e3f7f5a9b0a6c45929032ec8f8dba770706', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: 'ea92297b0a1ecc6cfae7c202e6e4d1ee1f7c35e040457120125f7555edca02bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4TDVJX5Q.css': {size: 41132, hash: '7u/z+2KwXxs', text: () => import('./assets-chunks/styles-4TDVJX5Q_css.mjs').then(m => m.default)}
  },
};
