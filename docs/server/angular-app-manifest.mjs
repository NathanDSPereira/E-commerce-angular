
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '9ca918ac49f2f311c7c35c7ba5953c1aa9f242d55dc51a828a924f669d01e162', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'd2a49a8e80e2ac114c79aaf837301cd0fa7198c4fd6e4e5f45bee66b73eaa65a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DKR5DU2.css': {size: 28522, hash: '+c13eGFGaB4', text: () => import('./assets-chunks/styles-7DKR5DU2_css.mjs').then(m => m.default)}
  },
};
