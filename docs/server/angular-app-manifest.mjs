
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4183, hash: 'ad2c8b6272abfe88eb71a8325fd46932da0a1822a0682691ce5e542d7e5d6ad0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '021db9a8d876c008d25cbbbc1981607bd861df19cf133460b95710b67d6d7b3a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DQBQA3A4.css': {size: 11599, hash: 'HIxOrtF5L5Q', text: () => import('./assets-chunks/styles-DQBQA3A4_css.mjs').then(m => m.default)}
  },
};
