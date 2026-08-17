'use strict';
const CLI = 'cli-builder-839d93';
function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith('--')) { const [k, v] = argv[i].slice(2).split('='); args[k] = v || true; }
    else if (argv[i].startsWith('-')) { args[argv[i].slice(1)] = true; }
    else args._.push(argv[i]);
  }
  return args;
}
const args = parseArgs(process.argv);
console.log(`[${CLI}] Version: 1.0.0`);
console.log(`[${CLI}] Node: ${process.version}`);
console.log(`[${CLI}] Platform: ${process.platform}`);
console.log(`[${CLI}] Args:`, JSON.stringify(args));
