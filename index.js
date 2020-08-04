const core = require('@actions/core');
const writeGood = require('./github-action-write-good');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const path = core.getInput('path');
    core.info(`Running write-good against '${path}'...`);
    const res = await writeGood(path);
    core.setOutput('output', res.resolves);
  } catch (error) {
    core.setOutput('output', error.message);
    core.setFailed(error.message);
  }
}

run();
