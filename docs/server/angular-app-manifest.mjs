
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20760, hash: '2fcf0bc79931c6cee546f697f6384d85bc56a7ddc34b68af7cb7919fad36daa5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: '8f23316f1798325a420531afb9b10c2d5996468cd985602029f3e7b5f1459461', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OKSSYTEH.css': {size: 40252, hash: 'VZcMli2FCig', text: () => import('./assets-chunks/styles-OKSSYTEH_css.mjs').then(m => m.default)}
  },
};
