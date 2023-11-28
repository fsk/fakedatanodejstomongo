exports.command = 'db <command>';
exports.desc = 'Manage database records';
exports.builder = function (yargs) {
  return yargs.commandDir('db');
};
exports.handler = function () { };
