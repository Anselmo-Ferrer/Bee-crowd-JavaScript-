var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let nota = parseInt(prompt())

if (nota === 0) {
    console.log('E')
}

else if (nota >= 1 && nota <= 35) {
    console.log('D')
}

else if (nota >= 36 && nota <= 60) {
    console.log('C')
}

else if (nota >= 61 && nota <= 85) {
    console.log('B')
}

else if (nota >= 86 && nota <= 100) {
    console.log('A')
}

else {
    console.log('nota invalida')
}