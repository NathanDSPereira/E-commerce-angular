
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7767, hash: '80f1ed69c4cca68900f2ea35d7ffea49684002c075071172aca4c5ecd497f5f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '25ea0bfcec799aa3f8d082b97f89fdcab8242b32f0908377cf8730e05538db3c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M5QDRXQV.css': {size: 27354, hash: 'UapVm/kcnj4', text: () => import('./assets-chunks/styles-M5QDRXQV_css.mjs').then(m => m.default)}
  },
};
