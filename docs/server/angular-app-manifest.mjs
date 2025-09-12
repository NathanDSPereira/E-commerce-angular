
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7490, hash: '93249abd43d6cccc52e9dd0452c98176399287c38c22c5125464353d4da83cc8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '1bb4cefd591d1d2a6a796758a0638a4729499c4e6e05dd3c3de64ab4f25e09af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-A4OOXUVA.css': {size: 23798, hash: 'ldzuVhZy3/w', text: () => import('./assets-chunks/styles-A4OOXUVA_css.mjs').then(m => m.default)}
  },
};
