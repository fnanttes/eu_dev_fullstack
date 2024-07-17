// Definição de uma função chamada testes
function testes() {
  // Retorna uma nova Promise
  return new Promise(function (resolve, reject) {
    // Definição de uma constante chamada erro
    const erro = false;

    // Resolução da Promise com uma mensagem de sucesso
    resolve("A promisse foi resolvida com sucesso");

    // Verificação se a constante erro é verdadeira
    if (erro) {
      // Rejeição da Promise com uma mensagem de erro
      reject("Erro...");
    } else {
      // Erro de sintaxe na linha 14, deveria ser reject ao invés de reseolve
      reject("A resolvida com sucesso!");
    }
  });
}

// Chamada da função testes e utilização dos métodos then e catch da Promise
testes()
  .then(function (res) {
    // Exibição de um alerta com a mensagem de sucesso da Promise
    alert(res);
  })
  .catch(function (err) {
    // Exibição de um alerta com a mensagem de erro da Promise
    alert(err);
  });

// Definição de uma função assíncrona chamada testes2
async function testes2() {
  // Aguarda a resolução da Promise retornada pela função testes
  await testes().then(function (res) {
    // Exibição de um alerta com a mensagem de sucesso da Promise
    alert(res);
  });
  // Exibição de um alerta com a mensagem "Teste 2"
  alert("Teste 2");
}

// Chamada da função testes2
testes2();
