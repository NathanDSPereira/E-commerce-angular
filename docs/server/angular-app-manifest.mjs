
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7534, hash: '30e357fa0c1b286f88df6143d3e71aa7d20424055b8b7898ccdd15c8f4829dda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'c034be5e1f534a9209b70e979adbd3bad8ab12ef929ae85aaf071e58730822e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QKBRO4NM.css': {size: 25253, hash: 'As9p9dejh68', text: () => import('./assets-chunks/styles-QKBRO4NM_css.mjs').then(m => m.default)}
  },
};
