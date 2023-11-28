import {yargs} from "yargs";

const options = yargs
    .option("dbConnectionString",{
        alias: 'db',
        describe: 'Database Connection String',
        demandOption: true, // Bu argümanın zorunlu olduğunu belirtir
        type: 'string', // Argümanın tipini belirtir
    })
    .option("port",{
        alias: 'p',
        describe: 'Port Number',
        demandOption: true,
        type: 'number', // Port numarası tamsayı olmalıdır
    })
    .option("fakeDataNumber",{
        alias: 'i',
        describe: 'Fake Data Number',
        demandOption: true,
        type: 'number', // Tamsayı değeri
    })
    .argv;

yargs.usage('Usage: node app.js --db <dbConnectionString> --port <port> --integerValue <integerValue>');

const cfg = {
    dbConnectionString: options.dbConnectionString,
    port: options.port,
    fakeDataNumber: options.fakeDataNumber,
};

export {cfg};