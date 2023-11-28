#!/usr/bin/env node
require('yargs')
  .scriptName('cli')
  .commandDir('cmds')
  .demandCommand()
  .strictCommands()
  .help().argv;
