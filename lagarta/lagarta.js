async function lagarta(){
    let lagarta = "( )( )( )(00)";
    let encolhida = "()()()(00)"
    let espaco = " ";

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    for(let i = 0; i < 40; i++){
        lagarta = espaco + lagarta;
        console.log(lagarta);
        await sleep (500);
        console.clear();

        escolhida = espaco + encolhida;
        console.log(encolhida)
        await sleep (500);
        console.clear();
    }
}