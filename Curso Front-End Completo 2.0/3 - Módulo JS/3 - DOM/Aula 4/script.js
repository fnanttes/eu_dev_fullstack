// A variável "els" recebe um NodeList de elementos HTML que correspondem ao seletor CSS ".testes".
var els = document.querySelectorAll(".testes");

// O primeiro elemento do NodeList "els" é acessado usando "els[0]".
// A propriedade "innerHTML" do elemento é alterada para "Oi".
// Isso altera o conteúdo HTML interno do primeiro elemento div com a classe "testes" para "Oi".
els[0].innerHTML = "Oi";
