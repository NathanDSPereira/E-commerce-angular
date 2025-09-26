
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7681, hash: '44b611ea906f5e41f397d779906048aae889ab0645e38c2fb40e3a7fb2d6175a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: 'fb8021fce47e390acab406eeeb5a2be87dc0730e37460d8143ee674a1e6afbe8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-22IRX3SU.css': {size: 26410, hash: '3LGhfYb2gx4', text: () => import('./assets-chunks/styles-22IRX3SU_css.mjs').then(m => m.default)}
  },
};
