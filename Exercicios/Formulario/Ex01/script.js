function bottonOpen(botao) {
    let bloco = document.getElementById("main__bloco--"+botao.id);
    if (bloco.style.display == 'none') { bloco.style.display = 'flex' }
    else { bloco.style.display = 'none' }
}

// Salvar valor no localStorage ao alterar o input
function salvarValor(input) {
    localStorage.setItem(input.id, input.value);
}

// Recuperar o valor salvo e aplicá-lo ao input quando a página carregar
window.onload = function() {
    for (let j = 1; j <= 8; j++){
        for (let i = 1; i <= 20; i++){
        let input = document.getElementById("main__item--"+j+"-" + i);
        if (input){
        let valorSalvo = localStorage.getItem(input.id);
        console.log(input);
        input.value = valorSalvo;}
    }
    }
}