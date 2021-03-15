// init Konva
require("konva-node");
const { renderVideo } = require("./renderVideo");
const path = require("path");

async function run() {
  const outputDir = path.join(__dirname, "../out");
  const output = path.join(__dirname, "../output.mp4");

  await renderVideo({ outputDir, output });
}

run().catch(console.error);
