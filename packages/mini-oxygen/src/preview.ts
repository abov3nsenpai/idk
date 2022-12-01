import * as path from 'path';
import * as fs from 'fs';

import getPort from 'get-port';

import {MiniOxygen} from './mini-oxygen/core';

class WorkerNotFoundError extends Error {
  name = 'WorkerNotFoundError';
  message =
    'A worker file is required for this command. Try building your project or check your mini-oxygen config file to ensure a workerFile is specified and the path is correct.';
}

export type MiniOxygenPreviewOptions = Partial<{
  log(message: string): unknown;
  port: number;
  workerFile: string;
  assetsDir: string;
  publicPath: string;
  watch: boolean;
  modules: boolean;
  buildCommand: string;
  buildWatchPaths: string[];
  autoReload: boolean;
  sourceMap: boolean;
  envPath: string;
  env: {[key: string]: unknown};
}>;

export const configFileName = 'mini-oxygen.config.json';

export async function preview(opts: MiniOxygenPreviewOptions) {
  const {
    // eslint-disable-next-line no-console
    log = (message: string) => console.log(message),
    port = 3000,
    workerFile,
    assetsDir,
    publicPath,
    watch = false,
    buildWatchPaths,
    buildCommand,
    autoReload = false,
    modules = true,
    sourceMap = true,
    envPath,
    env = {},
  } = opts;
  const root = process.cwd();

  if (!workerFile || !fs.existsSync(workerFile)) {
    throw new WorkerNotFoundError();
  }

  if (
    publicPath !== undefined &&
    publicPath.length > 0 &&
    !publicPath.endsWith('/')
  ) {
    log(`WARNING: publicPath must end with a trailing slash`);
  }

  const mf = new MiniOxygen(
    {
      buildCommand,
      envPath,
      scriptPath: path.resolve(root, workerFile),
      watch,
      modules,
      sourceMap,
      buildWatchPaths,
      // this should stay in sync with oxygen-dms
      compatibilityFlags: ['streams_enable_constructors'],
      compatibilityDate: '2022-10-31',
    },
    env,
  );

  const app = mf.createServer({
    assetsDir: assetsDir ? path.resolve(root, assetsDir) : undefined,
    publicPath,
    autoReload,
  });

  const actualPort = await getPort({port});
  if (actualPort !== port) {
    log(`Port ${port} is not available. Using ${actualPort} instead.`);
  }

  // eslint-disable-next-line promise/param-names
  return new Promise<{port: number}>((res) => {
    app.listen(actualPort, () => {
      log(
        `\nStarted miniOxygen server. Listening at http://localhost:${actualPort}\n`,
      );

      res({port: actualPort});
    });
  });
}
