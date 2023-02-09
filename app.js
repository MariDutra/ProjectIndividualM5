

import ReadLineSync from 'readline-sync'
//const readLineSync = require('readline-sync')
import ch from 'chalk';
//const ch = require('chalk');


const valores = []
let input = ""

console.log(ch.blackBright.bgCyanBright('Projeto Individual!'))
console.log(ch.yellow('Vamos usar o Node que vai receber uma lista de artistas e vai devolver essa lista ordenada de A-Z.'))
while(input != "sair")
{
    valores.push(input)
    input = ReadLineSync.question(ch.green("Digite seus melhores artistas").toLocaleLowerCase())
}
console.log(ch.bgYellowBright.black(valores.sort().join('\n')))