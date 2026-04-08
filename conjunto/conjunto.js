function conjunto(){
    const letras = new Set ()
    letras.add("a");
    letras.add("b");
    letras.add("c");
    letras.add("d");
    letras.add("e");
    letras.add("f");

    letras.delete("c");
    console.log(letras);

    for (const x of letras.values()){
        console.log(x);
    }

    

console.log(letras.size);

}
conjunto();