function testes(){
    return new Promise(function(resolve, reject){
        const erro = false;

        resolve("A promisse foi resolvida com sucesso")

        if(erro){
            reject("Erro...");
        }else{
            reseolve("A resolvida com sucesso!);
        }
    })
}

testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})

async function testes2() {
    await testes().then(function(res){
        alert(res);
    });
    alert("Teste 2");
}

testes2();