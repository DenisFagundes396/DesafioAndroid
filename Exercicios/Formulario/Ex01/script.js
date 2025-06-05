function bottonOpen(botao) {
    let bloco = document.getElementById("main__bloco--" + botao.id);
    if (bloco.style.display == 'none') { bloco.style.display = 'flex' }
    else { bloco.style.display = 'none' }
}

//Aplicar Check ao item de compra, e salvar a cor status
function statusItem(maid) {
    let colorDiv = window.getComputedStyle(maid).backgroundColor;
    switch (colorDiv) {
        case 'rgba(255, 0, 0, 0.7)':
            maid.style.backgroundColor = 'rgba(223, 223, 23, 0.7)';
            localStorage.setItem(maid.id, maid.style.backgroundColor);
            break;
        case 'rgba(223, 223, 23, 0.7)':
            maid.style.backgroundColor = 'rgba(2, 121, 2, 0.7)';
            localStorage.setItem(maid.id, maid.style.backgroundColor);
            break;
        case 'rgba(2, 121, 2, 0.7)':
            maid.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            localStorage.setItem(maid.id, maid.style.backgroundColor);
    }
}

// Salvar valor no localStorage ao alterar o input
function salvarValor(input) {
    localStorage.setItem(input.id, input.value);
}

// Recuperar O VALOR SALVO e aplicá-lo ao input quando a página carregar
window.onload = function valor() {
    for (let j = 1; j <= 8; j++) {
        for (let i = 1; i <= 20; i++) {
            let input = document.getElementById("main__item--" + j + "-" + i);
            if (input) {
                let valorSalvo = localStorage.getItem(input.id);
                console.log("valores feito");
                input.value = valorSalvo;
            }
        }
    }
    for (let y = 1; y <= 8; y++) {
        for (let x = 1; x <= 20; x++) {
            let bloco = document.getElementById("main__bloco--" + y + "-" + x);
            if (bloco) {
                let valorSalvo = localStorage.getItem(bloco.id);
                if (valorSalvo)
                    console.log(valorSalvo);
                bloco.style.backgroundColor = valorSalvo;
            }
        }
    }
    for (let a = 1; a <= 20; a++) {
        console.log("valor de a: " + a);
        for (let b = 1; b <= 20; b++) {
            console.log("valor de b: " + b);
            let bloco = document.getElementById("main__itemCusto--" + a + "-" + b);
            if (bloco) {
                let valorSalvo = localStorage.getItem(bloco.id);
                if (valorSalvo)
                    console.log("main__itemCusto--" + a + "-" + b);
                console.log(valorSalvo);
                bloco.value = valorSalvo;
            }
        }
    }
}

// Recuperar A COR SALVA e aplicá-lo ao input quando a página carregar
// window.onload = function cor() {
//     for (let y = 1; y <= 8; y++) {
//         for (let x = 1; x <= 20; x++) {
//             let input = document.getElementById("main__bloco--" + y + "-" + x);
//             if (input) {
//                 let valorSalvo = localStorage.getItem(input.id);
//                 console.log(input);
//                 input.value = valorSalvo;
//             }
//         }
//     }
// }