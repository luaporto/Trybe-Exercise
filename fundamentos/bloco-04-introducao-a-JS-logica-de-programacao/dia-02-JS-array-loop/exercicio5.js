let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let contador = 0; contador < numbers.length; contador++) {
  if (numbers[contador] > maiorNumero) {
    maiorNumero = numbers[contador];
  }
}

console.log(maiorNumero);
