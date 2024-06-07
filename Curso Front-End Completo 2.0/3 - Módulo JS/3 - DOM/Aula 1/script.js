// A variável "p" recebe um NodeList de elementos HTML que correspondem à tag "p".
var p = document.getElementsByTagName("p");

// O método "console.log" exibe o número de elementos no NodeList "p" no console do navegador.
console.log(p.length);

// A propriedade "innerHTML" do primeiro elemento no NodeList "p" é alterada para "Manipulado via JS!".
p[0].innerHTML = "Manipulado via JS!";

// O método "console.log" exibe o conteúdo HTML do primeiro elemento no NodeList "p" no console do navegador.
console.log(p[0].innerHTML);

// O método "console.log" exibe o conteúdo HTML do segundo elemento no NodeList "p" no console do navegador.
console.log(p[1].innerHTML);

// O método "console.log" exibe o conteúdo HTML do terceiro elemento no NodeList "p" no console do navegador.
console.log(p[2].innerHTML);

// O método "console.log" exibe o conteúdo HTML do quarto elemento no NodeList "p" no console do navegador.
console.log(p[3].innerHTML);

// O método "console.log" exibe o conteúdo HTML do quinto elemento no NodeList "p" no console do navegador.
console.log(p[4].innerHTML);

// O método "console.log" exibe o conteúdo HTML do sexto elemento no NodeList "p" no console do navegador.
console.log(p[5].innerHTML);

// Um loop "for" itera sobre cada elemento no NodeList "p" e altera a propriedade "innerHTML" para "Manipulado via JS no For!".
for (var i = 0; i < p.length; i++) {
  p[i].innerHTML = "Manipulado via JS no For!";
}

// Um segundo loop "for" itera 10 vezes e altera a propriedade "innerHTML" do primeiro elemento no NodeList "p" para o conteúdo HTML do elemento correspondente no loop.
for (var i = 0; i < 10; i++) {
  p[0].innerHTML = p[i].innerHTML;
}
