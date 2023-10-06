const {readFile, watch, writeFile} = require('fs/promises');
const {spawn} = require('child_process');
const path = require('path');

const docsMetaFile = path.resolve(process.cwd(), process.argv[2]);

console.log('Watching: ' + docsMetaFile);

async function run() {
  // Copy the metafile to the remix app directory so it can be watched, imported, and loaded by Remix.
  copyMetaFile(docsMetaFile);

  // Start up the Remix dev server
  const remix = spawn(
    'node',
    [
      path.resolve(path.dirname(require.resolve('@remix-run/dev')), 'cli.js'),
      'dev',
      '--manual',
    ],
    {
      cwd: path.resolve(__dirname, '..'),
    },
  );

  remix.stdout.on('data', (data) => console.log(`${data}`));
  remix.stdout.on('error', (data) => console.error(`${data}`));
  remix.on('error', (error) => {
    console.log('hi');
    process.exit(1);
  });
  remix.on('close', (code) => {
    if (code > 0) console.error('Remix app failed');
    process.exit(code);
  });

  try {
    const watcher = watch(docsMetaFile);

    for await (const event of watcher) {
      if (event.eventType === 'change') {
        // Whenever the source metafile changes, copy it back into the Remix app dir
        // which automatically picks it up and hot reloads the page
        copyMetaFile(docsMetaFile);
      }
    }
  } catch (err) {
    if (err.name === 'AbortError') return;
    console.error('Failed to startup Remix');
    throw err;
  }
}

let timeout;

function copyMetaFile(file) {
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    try {
      console.log('Copying metafile: ' + file);
      const f = await readFile(file, 'utf-8');
      // Read the source metafile so that we can prepend it with `export default`
      // There's probably a better way to do this, like JSON imports or write to
      // the buffer stream so we don't need to load the entire metafile into memory
      writeFile(
        path.resolve(__dirname, '../app/generated_docs_data.js'),
        'export default ' + f,
      );
    } catch (e) {
      console.error('Error copying metafile', e);
    }
  }, 100);
}

run();
