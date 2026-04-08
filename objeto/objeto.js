const pessoa = {
    nome: "Henrique",
    sobrenome: "Góes",
    idade: 16,
    time: "Palmeiras",
    nomeCompleto: function () { return this.nome + " " + this.sobrenome},
    meuObjeto: function() {return this}
};

console.log(pessoa.nome + " " + pessoa.sobrenome + " tem " +
    pessoa.idade + " anos e torce para o " + pessoa.time
)

const pessoaStringificada = JSON.stringify(pessoa);
console.log(pessoaStringificada);

const pessoaParseada = JSON.parse(pessoaStringificada)

console.log(pessoaParseada.nome + " " + pessoaParseada.sobrenome + " tem " +
    pessoaParseada.idade + " anos e torce para o " + pessoaParseada. time 
)