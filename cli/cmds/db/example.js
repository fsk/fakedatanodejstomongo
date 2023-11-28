exports.command = 'example <command>';
exports.desc = 'Example command';
exports.builder = function (yargs) {
  return yargs.commandDir('example_cmds');
};
exports.handler = function () { };
