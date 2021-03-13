// var lista = ["maçã", "pêra", "laranja"];
// lista.push("uva")
// lista.pop();
// console.log(lista.toString());
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista[0]);
// console.log(lista.toString()[1]);
// console.log(lista.join(" + "));

// var fruta = {nome:"maçã", cor:"vermelha"};
// console.log(fruta);
// console.log(fruta.nome);
// var frutas = [{nome:"uva", cor:"verde"},
//             {nome:"melancia", cor:"rosa"}
//             ]
// console.log(frutas)
// console.log(frutas[0].nome)

// var idade = prompt("Qual sua idade?");
// if(idade >= 18)
//             alert("Maior de Idade");
// else
//             alert("Menor de Idade");


// var count = 0
// while(count < 5 ){
//     console.log(count)
//     count++
// }
// count = 0
// for(count = 1; count <=5; count++){
//     console.log(count)
// }

// var d = new Date();
// console.log(d.getMonth()+1);
// console.log(d.getDate())

// function soma(a , b){
//     return a + b;
// }
// alert(soma(2,19))

function botao(){
    var elemento = document.getElementById("titulo-pagina");
    elemento.innerHTML = "Novo Título";

    alert("obrigado por clicar");
}

function redirection(){
    // window.open("https://google.com");
    window.location.href = "https://github.com"
}

function hover(elemento){
    // document.getElementById("mousemove").innerHTML = "hover bem sucedido.";
    elemento.innerHTML = "hover bem sucedido"
}
function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse Aqui"
    elemento.innerHTML = "Passe o mouse Aqui"
}

function trocaOp(elemento){
    alert(elemento.value + " é a opção escolhida");
}