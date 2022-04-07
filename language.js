const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./lingua/' + Config.LANG + '.json')) {
    console.log(
        chalk.green.bold('Caricamento in corso del ' + Config.LANG + ' linguaggio...')
    );

    var json = JSON.parse(fs.readFileSync('./language/' + Config.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('Hai inserito una lingua non valida. È stata scelta la lingua italiana.')
    );

    var json = JSON.parse(fs.readFileSync('./lingua/IT.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
