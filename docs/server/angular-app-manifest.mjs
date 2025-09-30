
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7682, hash: '86650caa8bf55e10096d6f63140d06b1eea3fea81b24bc0869bf7f6dfde6490e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'bc19f8ec9769ec1607913083010fcdcd3664ba7c98aefa24248389ba1215ef8a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CURPB4RV.css': {size: 26566, hash: 'f4pafU4yYlM', text: () => import('./assets-chunks/styles-CURPB4RV_css.mjs').then(m => m.default)}
  },
};
