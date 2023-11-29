import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';
import * as path from 'path';

// The Express app is exported so that it can be used by serverless Functions.
const getTranslatedServer = (lang: string) => {
  const distFolder = path.join(
    process.cwd(),
    `dist/angular-universal-i18n-demo/server/${lang}`
  );
  const server = require(`${distFolder}/main.js`);
  return server.app(lang);
};

export function app(): express.Express {
  const server = express();
  const distFolder = join(
    process.cwd(),
    'dist/alpha-konstruksi-nusantara-web/browser'
  );
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const appEn = getTranslatedServer('en');
  const appId = getTranslatedServer('id');
  const appZh = getTranslatedServer('zh');

  // Start up the Node server
  const server = app();

  server.use('/en', appEn);
  server.use('/id', appId);
  server.use('/zh', appZh);

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
