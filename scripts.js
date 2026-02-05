/* JavaScript 
- Variáveis - pedacinho da memória do computador que você pode guaradr o que quiser 
let = (variavel)
- Funcções 
escrevo function 2- dou um nome 3- () 4- { o que a função faz }
- como se comunicar com o HTML
Manipular a DOM
console log() mostra o que eu quiser na tela, ou seja, o que estiver na variável


exmeplo:
[x]Saber quando o botão foi clicado
[x]Pegar o texto que o usuário digitou
[x]mando para o servidor traduzir
[x]receber a resposta do servidor (tradução)
[x]colocar o texto na tela

fase 2
[]Escolher o idioma
[]traduzir pelo microfone (captar a voz) / IA
[] colocar o site no ar 

//JavaScript - scripts
//HTML - document
querySelector - selecionar um elemento do HTML
onclick - quando o botão for clicado, faça algo
value = valor - o que tem nele

padrão = https://api.mymemory.translated.net/get?q=
traduzir = Hello World!
idioma = &langpair=pt-BR|en

fetch / ferramenta do javascript para entrar em contato com um servidor
await (espere) - async, espere a resposta do servidor


json - formato de dados mais amigável 
*/
// pegando o texto dentro do text area
let inputTexto = document.querySelector(".input-texto")
let traducao = document.querySelector(".tradução")
let idioma = document.querySelector(".idioma")

async function traduzir(){
    //endereço do servidor com o texto que eu quero traduzir
    let endereco  = "https://api.mymemory.translated.net/get?q=" 
    + inputTexto.value
    + "&langpair=pt-BR|en"
    + idioma.value
    //resposta do servidor
    let resposta = await fetch(endereco)
    //converto a resposta para um formato amigável (json)
    let dados = await resposta.json()

    traducao.textContent = dados.responseData.translatedText

    console.log(dados)
}

//clicou no botão -> chama a função -> monto o endereço
//-> chamo o servidor -> peço para esperar -> responde