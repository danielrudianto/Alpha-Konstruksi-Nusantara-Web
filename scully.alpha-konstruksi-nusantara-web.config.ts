import {
  ScullyConfig,
  setPluginConfig,
  registerPlugin,
} from '@scullyio/scully';
import fetch from 'node-fetch';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

setPluginConfig(baseHrefRewrite, {
  href: process.env['LOCALE'] == 'id' ? '/' : `/${process.env['LOCALE']}/`,
});

registerPlugin('router', 'blogsPlugin', async () => {
  const response = await (
    await fetch('https://alphakonstruksi.id/api/routes')
  ).json();

  return response;
});

// const fixStaticLinksPlugin = async (html: any) => {
//   const regex = new RegExp('(<script [^>]*src=")([^"]*)"', 'gmi');
//   html = html.replace(regex, `$1${process.env['LOCALE']}/$2"`);

//   return Promise.resolve(html);
// };

// registerPlugin('render', 'fixStaticLinks', fixStaticLinksPlugin);

const defaultPostRenderers = [
  'seoHrefOptimise',
  'baseHrefRewrite',
  // 'fixStaticLinks',
];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'alpha-konstruksi-nusantara-web',
  distFolder: `./dist/alpha-konstruksi-nusantara-web/${process.env['LOCALE']!}`, // output directory of your Angular build artifacts
  outDir: `./dist/static/`, // directory for scully build artifacts
  outHostFolder: `./dist/static/`, // folder that contains the static distribution of your app
  hostFolder: `./dist/static/`, // folder that contains the static distribution of your app
  defaultPostRenderers: defaultPostRenderers,
  routes: {
    '/Blog/:id/:title': {
      type: 'blogsPlugin',
    },
  },
};
