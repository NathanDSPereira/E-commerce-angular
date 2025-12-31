
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20826, hash: 'dbd2bef9aa05c2fcee51f7d36cc991be250203e372515ab54572f2abbc4146f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: '7ae1d3142368ca3e7ee1d7a44f81fb5a34c045603578ad41329bea6cfda9f5b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DEXMR45R.css': {size: 41000, hash: 'g6NR774B+iI', text: () => import('./assets-chunks/styles-DEXMR45R_css.mjs').then(m => m.default)}
  },
};
