const globSync  = require('glob').sync;
const { execSync } = require('child_process');

let writeGood = function (path) {
  return new Promise((resolve) => {
    const files = globSync(path);
    const wgPath = require.resolve('write-good/bin/write-good.js');
    const cmd = `${wgPath} ${files.join(' ')}`;

    // Running write-good in pure Node requires running it against content
    // strings and not files.
    try {
      resolve(execSync(cmd).toString());
    } catch (error) {
      throw new Error(error.stdout.toString());
    }
  });
};

module.exports = writeGood;
