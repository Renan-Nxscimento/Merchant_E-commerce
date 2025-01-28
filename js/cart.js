'use strict'

const ofertas = document.querySelectorAll('.offer')

const selecionarAba = document.querySelectorAll('.our-selections')

const dropdowns = document.querySelectorAll('.dropdown')

const fullScreen = document.querySelector('.fullscreenForm')

const closeFullscreen = document.querySelector('.close-fullscreen')

const comprar = document.querySelector('#buyBtn')

filtrar()

//Menu Dropdown

dropdowns.forEach(dropdown => {
    const select = document.querySelector('.categories')
    const caret = document.querySelector('.caret')
    const menu = document.querySelector('.diver-down')

    select.addEventListener('click', () => {
        select.style.borderBottomRightRadius = '5px'
            select.style.borderBottomLeftRadius = '5px'
        select.classList.toggle('square-cat')
        if (select.classList.contains('square-cat')) {
            select.style.borderBottomRightRadius = '0'
            select.style.borderBottomLeftRadius = '0'
        }
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('open-diver')
    })
})

//Barra de pesquisa

fetch('lista.json').then(res => res.json()).then((json) => {
    const ul = document.getElementById('productList');
        json.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <a href="http://127.0.0.1:5500/Merchant/${item.id}">
                <img width="50"
                    src="${item.image}">
                <span class="item-name">${item.nome}</span>
            </a>
            `;
            ul.appendChild(li);
        })
})

function filtrar() {
    var input,
        filter,
        ul,
        li,
        a,
        i,
        span,
        txtValue,
        count = 0

    input = document.getElementById('searchBar');
    ul = document.getElementById('productList');

    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";

            count++

            span = li[i].querySelector(".item-name");

            if (span) {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                    return "<strong>" + match + "</strong>";
                })
            }
        } else {
            li[i].style.display = "none";
        }
    }
    
	//VERIFICANDO SE TEM ITENS NA LISTA
     if(filter ===""){
	 ul.style.display = "none";
	 }else{ 
	 ul.style.display = "block";
	 }

}


//Items

//Item 1
if (localStorage.getItem('db_javelin') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_javelin')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-1').style.display = 'flex'

    document.querySelector('#i-1 .i-image img').addEventListener('click', function () {
        location.href = 'javelin.html'
    })

    document.querySelector('#i-1 .i-image img').src="img/javelin.png"
    document.querySelector('#i-1 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-1 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-1 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-1 .i-price .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-1 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_javelin', JSON.stringify(dadosProduto))
        document.querySelector('#i-1 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_javelin')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-1').style.display = 'none'
    }
})

document.querySelector('#i-1 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_javelin', JSON.stringify(dadosProduto))
        document.querySelector('#i-1 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 1



//Item 2
if (localStorage.getItem('db_quattro') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_quattro')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-2').style.display = 'flex'

    document.querySelector('#i-2 .i-image img').addEventListener('click', function () {
        location.href = 's24ultra.html'
    })

    document.querySelector('#i-2 .i-image img').src="img/phones/24ultra.png"
    document.querySelector('#i-2 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-2 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-2 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-2 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-2 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_quattro', JSON.stringify(dadosProduto))
        document.querySelector('#i-2 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_quattro')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-2').style.display = 'none'
    }
})

document.querySelector('#i-2 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_quattro', JSON.stringify(dadosProduto))
        document.querySelector('#i-2 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 2


//Item 3
if (localStorage.getItem('db_edge40') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_edge40')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-3').style.display = 'flex'

    document.querySelector('#i-3 .i-image img').addEventListener('click', function () {
        location.href = 'edge40.html'
    })

    document.querySelector('#i-3 .i-image img').src="img/phones/medge40.png"
    document.querySelector('#i-3 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-3 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-3 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-3 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-3 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_edge40', JSON.stringify(dadosProduto))
        document.querySelector('#i-3 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_edge40')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-3').style.display = 'none'
    }
})

document.querySelector('#i-3 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_edge40', JSON.stringify(dadosProduto))
        document.querySelector('#i-3 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 3


//Item 4
if (localStorage.getItem('db_freebuds') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_freebuds')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-4').style.display = 'flex'

    document.querySelector('#i-4 .i-image img').addEventListener('click', function () {
        location.href = 'freeBuds5i.html'
    })

    document.querySelector('#i-4 .i-image img').src="img/acessories/hfreebuds5i.png"
    document.querySelector('#i-4 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-4 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-4 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-4 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-4 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_freebuds', JSON.stringify(dadosProduto))
        document.querySelector('#i-4 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_freebuds')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-4').style.display = 'none'
    }
})

document.querySelector('#i-4 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_freebuds', JSON.stringify(dadosProduto))
        document.querySelector('#i-4 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 4


//Item 5
if (localStorage.getItem('db_FiftyFive') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_FiftyFive')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-5').style.display = 'flex'

    document.querySelector('#i-5 .i-image img').addEventListener('click', function () {
        location.href = 'galaxyA55.html'
    })

    document.querySelector('#i-5 .i-image img').src="img/phones/sa55.webp"
    document.querySelector('#i-5 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-5 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-5 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-5 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-5 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_FiftyFive', JSON.stringify(dadosProduto))
        document.querySelector('#i-5 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_FiftyFive')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-5').style.display = 'none'
    }
})

document.querySelector('#i-5 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_FiftyFive', JSON.stringify(dadosProduto))
        document.querySelector('#i-5 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 5


//Item 6
if (localStorage.getItem('db_GbudsTwo') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_GbudsTwo')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-6').style.display = 'flex'

    document.querySelector('#i-6 .i-image img').addEventListener('click', function () {
        location.href = 'galaxyBuds2.html'
    })

    document.querySelector('#i-6 .i-image img').src="img/acessories/sgbuds2.webp"
    document.querySelector('#i-6 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-6 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-6 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-6 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-6 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_GbudsTwo', JSON.stringify(dadosProduto))
        document.querySelector('#i-6 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_GbudsTwo')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-6').style.display = 'none'
    }
})

document.querySelector('#i-6 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_GbudsTwo', JSON.stringify(dadosProduto))
        document.querySelector('#i-6 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 6


//Item 7
if (localStorage.getItem('db_GfitThree') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_GfitThree')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-7').style.display = 'flex'

    document.querySelector('#i-7 .i-image img').addEventListener('click', function () {
        location.href = 'galaxyFit3.html'
    })

    document.querySelector('#i-7 .i-image img').src="img/watches/sgfit3.webp"
    document.querySelector('#i-7 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-7 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-7 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-7 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-7 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_GfitThree', JSON.stringify(dadosProduto))
        document.querySelector('#i-7 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_GfitThree')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-7').style.display = 'none'
    }
})

document.querySelector('#i-7 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_GfitThree', JSON.stringify(dadosProduto))
        document.querySelector('#i-7 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 7


//Item 8
if (localStorage.getItem('db_gamingDock') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_gamingDock')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-8').style.display = 'flex'

    document.querySelector('#i-8 .i-image img').addEventListener('click', function () {
        location.href = 'gamingDock.html'
    })

    document.querySelector('#i-8 .i-image img').src="img/acessories/agamingchargerdock.png"
    document.querySelector('#i-8 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-8 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-8 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-8 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-8 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_gamingDock', JSON.stringify(dadosProduto))
        document.querySelector('#i-8 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_gamingDock')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-8').style.display = 'none'
    }
})

document.querySelector('#i-8 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_gamingDock', JSON.stringify(dadosProduto))
        document.querySelector('#i-8 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 8


//Item 9
if (localStorage.getItem('db_GwatchSeven') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_GwatchSeven')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-9').style.display = 'flex'

    document.querySelector('#i-9 .i-image img').addEventListener('click', function () {
        location.href = 'gWatch7.html'
    })

    document.querySelector('#i-9 .i-image img').src="img/watches/gwatch7.webp"
    document.querySelector('#i-9 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-9 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-9 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-9 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-9 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_GwatchSeven', JSON.stringify(dadosProduto))
        document.querySelector('#i-9 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_GwatchSeven')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-9').style.display = 'none'
    }
})

document.querySelector('#i-9 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_GwatchSeven', JSON.stringify(dadosProduto))
        document.querySelector('#i-9 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 9


//Item 10
if (localStorage.getItem('db_GwatchFe') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_GwatchFe')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-10').style.display = 'flex'

    document.querySelector('#i-10 .i-image img').addEventListener('click', function () {
        location.href = 'gWatchFE.html'
    })

    document.querySelector('#i-10 .i-image img').src="img/watches/gwatchFE.webp"
    document.querySelector('#i-10 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-10 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-10 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-10 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-10 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_GwatchFe', JSON.stringify(dadosProduto))
        document.querySelector('#i-10 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_GwatchFe')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-10').style.display = 'none'
    }
})

document.querySelector('#i-10 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_GwatchFe', JSON.stringify(dadosProduto))
        document.querySelector('#i-10 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 10


//Item 11
if (localStorage.getItem('db_HbandNine') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_HbandNine')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-11').style.display = 'flex'

    document.querySelector('#i-11 .i-image img').addEventListener('click', function () {
        location.href = 'huaweiBand9.html'
    })

    document.querySelector('#i-11 .i-image img').src="img/watches/hband9.jpg"
    document.querySelector('#i-11 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-11 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-11 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-11 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-11 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_HbandNine', JSON.stringify(dadosProduto))
        document.querySelector('#i-11 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_HbandNine')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-11').style.display = 'none'
    }
})

document.querySelector('#i-11 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_HbandNine', JSON.stringify(dadosProduto))
        document.querySelector('#i-11 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 11


//Item 12
if (localStorage.getItem('db_hyperCharge') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_hyperCharge')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-12').style.display = 'flex'

    document.querySelector('#i-12 .i-image img').addEventListener('click', function () {
        location.href = 'hyperCharge.html'
    })

    document.querySelector('#i-12 .i-image img').src="img/acessories/xhypervharge120.png"
    document.querySelector('#i-12 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-12 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-12 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-12 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-12 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_hyperCharge', JSON.stringify(dadosProduto))
        document.querySelector('#i-12 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_hyperCharge')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-12').style.display = 'none'
    }
})

document.querySelector('#i-12 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_hyperCharge', JSON.stringify(dadosProduto))
        document.querySelector('#i-12 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 12


//Item 13
if (localStorage.getItem('db_miPro') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_miPro')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-13').style.display = 'flex'

    document.querySelector('#i-13 .i-image img').addEventListener('click', function () {
        location.href = 'mi14tPro.html'
    })

    document.querySelector('#i-13 .i-image img').src="img/phones/x14tpro.webp"
    document.querySelector('#i-13 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-13 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-13 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-13 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-13 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_miPro', JSON.stringify(dadosProduto))
        document.querySelector('#i-13 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_miPro')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-13').style.display = 'none'
    }
})

document.querySelector('#i-13 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_miPro', JSON.stringify(dadosProduto))
        document.querySelector('#i-13 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 13


//Item 14
if (localStorage.getItem('db_miPowerbank') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_miPowerbank')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-14').style.display = 'flex'

    document.querySelector('#i-14 .i-image img').addEventListener('click', function () {
        location.href = 'miPowerBank.html'
    })

    document.querySelector('#i-14 .i-image img').src="img/acessories/mipowerbk.png"
    document.querySelector('#i-14 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-14 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-14 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-14 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-14 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_miPowerbank', JSON.stringify(dadosProduto))
        document.querySelector('#i-14 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_miPowerbank')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-14').style.display = 'none'
    }
})

document.querySelector('#i-14 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_miPowerbank', JSON.stringify(dadosProduto))
        document.querySelector('#i-14 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 14


//Item 15
if (localStorage.getItem('db_motoZeroFour') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_motoZeroFour')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-15').style.display = 'flex'

    document.querySelector('#i-15 .i-image img').addEventListener('click', function () {
        location.href = 'motoG04S.html'
    })

    document.querySelector('#i-15 .i-image img').src="img/phones/mmotog04s.png"
    document.querySelector('#i-15 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-15 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-15 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-15 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-15 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_motoZeroFour', JSON.stringify(dadosProduto))
        document.querySelector('#i-15 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_motoZeroFour')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-15').style.display = 'none'
    }
})

document.querySelector('#i-15 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_motoZeroFour', JSON.stringify(dadosProduto))
        document.querySelector('#i-15 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 15


//Item 16
if (localStorage.getItem('db_pSixty') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_pSixty')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-16').style.display = 'flex'

    document.querySelector('#i-16 .i-image img').addEventListener('click', function () {
        location.href = 'p60Pro.html'
    })

    document.querySelector('#i-16 .i-image img').src="img/phones/hp60pro.webp"
    document.querySelector('#i-16 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-16 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-16 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-16 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-16 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_pSixty', JSON.stringify(dadosProduto))
        document.querySelector('#i-16 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_pSixty')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-16').style.display = 'none'
    }
})

document.querySelector('#i-16 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_pSixty', JSON.stringify(dadosProduto))
        document.querySelector('#i-16 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 16


//Item 17
if (localStorage.getItem('db_premiumCharger') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_premiumCharger')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-17').style.display = 'flex'

    document.querySelector('#i-17 .i-image img').addEventListener('click', function () {
        location.href = 'premiumCharger.html'
    })

    document.querySelector('#i-17 .i-image img').src="img/acessories/scharger2.avif"
    document.querySelector('#i-17 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-17 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-17 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-17 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-17 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_premiumCharger', JSON.stringify(dadosProduto))
        document.querySelector('#i-17 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_premiumCharger')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-17').style.display = 'none'
    }
})

document.querySelector('#i-17 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_premiumCharger', JSON.stringify(dadosProduto))
        document.querySelector('#i-17 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 17


//Item 18
if (localStorage.getItem('db_miThirteen') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_miThirteen')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-18').style.display = 'flex'

    document.querySelector('#i-18 .i-image img').addEventListener('click', function () {
        location.href = 'redmi13C.html'
    })

    document.querySelector('#i-18 .i-image img').src="img/phones/xredmi13c.webp"
    document.querySelector('#i-18 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-18 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-18 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-18 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-18 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_miThirteen', JSON.stringify(dadosProduto))
        document.querySelector('#i-18 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_miThirteen')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-18').style.display = 'none'
    }
})

document.querySelector('#i-18 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_miThirteen', JSON.stringify(dadosProduto))
        document.querySelector('#i-18 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 18


//Item 19
if (localStorage.getItem('db_miWatchTwo') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_miWatchTwo')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-19').style.display = 'flex'

    document.querySelector('#i-19 .i-image img').addEventListener('click', function () {
        location.href = 'redmiWatch2.html'
    })

    document.querySelector('#i-19 .i-image img').src="img/watches/rwatch2.png"
    document.querySelector('#i-19 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-19 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-19 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-19 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-19 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_miWatchTwo', JSON.stringify(dadosProduto))
        document.querySelector('#i-19 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_miWatchTwo')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-19').style.display = 'none'
    }
})

document.querySelector('#i-19 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_miWatchTwo', JSON.stringify(dadosProduto))
        document.querySelector('#i-19 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 19


//Item 20
if (localStorage.getItem('db_miWatchThree') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_miWatchThree')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-20').style.display = 'flex'

    document.querySelector('#i-20 .i-image img').addEventListener('click', function () {
        location.href = 'redmiWatch3.html'
    })

    document.querySelector('#i-20 .i-image img').src="img/watches/rwatch3.png"
    document.querySelector('#i-20 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-20 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-20 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-20 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-20 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_miWatchThree', JSON.stringify(dadosProduto))
        document.querySelector('#i-20 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_miWatchThree')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-20').style.display = 'none'
    }
})

document.querySelector('#i-20 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_miWatchThree', JSON.stringify(dadosProduto))
        document.querySelector('#i-20 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 20


//Item 21
if (localStorage.getItem('db_rogCetra') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_rogCetra')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-21').style.display = 'flex'

    document.querySelector('#i-21 .i-image img').addEventListener('click', function () {
        location.href = 'RogCetra.html'
    })

    document.querySelector('#i-21 .i-image img').src="img/acessories/arogcetra.webp"
    document.querySelector('#i-21 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-21 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-21 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-21 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-21 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_rogCetra', JSON.stringify(dadosProduto))
        document.querySelector('#i-21 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_rogCetra')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-21').style.display = 'none'
    }
})

document.querySelector('#i-21 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_rogCetra', JSON.stringify(dadosProduto))
        document.querySelector('#i-21 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 21


//Item 22
if (localStorage.getItem('db_rogPhoneEight') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_rogPhoneEight')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-22').style.display = 'flex'

    document.querySelector('#i-22 .i-image img').addEventListener('click', function () {
        location.href = 'RogPhone8.html'
    })

    document.querySelector('#i-22 .i-image img').src="img/phones/rphone9.png"
    document.querySelector('#i-22 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-22 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-22 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-22 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-22 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_rogPhoneEight', JSON.stringify(dadosProduto))
        document.querySelector('#i-22 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_rogPhoneEight')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-22').style.display = 'none'
    }
})

document.querySelector('#i-22 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_rogPhoneEight', JSON.stringify(dadosProduto))
        document.querySelector('#i-22 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 22


//Item 23
if (localStorage.getItem('db_tressPlus') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_tressPlus')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-23').style.display = 'flex'

    document.querySelector('#i-23 .i-image img').addEventListener('click', function () {
        location.href = 's23plus.html'
    })

    document.querySelector('#i-23 .i-image img').src="img/phones/23plus.png"
    document.querySelector('#i-23 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-23 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-23 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-23 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-23 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_tressPlus', JSON.stringify(dadosProduto))
        document.querySelector('#i-23 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_tressPlus')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-23').style.display = 'none'
    }
})

document.querySelector('#i-23 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_tressPlus', JSON.stringify(dadosProduto))
        document.querySelector('#i-23 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 23


//Item 24
if (localStorage.getItem('db_samHolder') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_samHolder')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-24').style.display = 'flex'

    document.querySelector('#i-24 .i-image img').addEventListener('click', function () {
        location.href = 'samsungHolder.html'
    })

    document.querySelector('#i-24 .i-image img').src="img/acessories/sphonestand.avif"
    document.querySelector('#i-24 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-24 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-24 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-24 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-24 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_samHolder', JSON.stringify(dadosProduto))
        document.querySelector('#i-24 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_samHolder')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-24').style.display = 'none'
    }
})

document.querySelector('#i-24 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_samHolder', JSON.stringify(dadosProduto))
        document.querySelector('#i-24 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 24


//Item 25
if (localStorage.getItem('db_viWatchBp') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_viWatchBp')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-25').style.display = 'flex'

    document.querySelector('#i-25 .i-image img').addEventListener('click', function () {
        location.href = 'vivoWatchBP.html'
    })

    document.querySelector('#i-25 .i-image img').src="img/watches/avivowatchBP.png"
    document.querySelector('#i-25 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-25 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-25 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-25 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-25 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_viWatchBp', JSON.stringify(dadosProduto))
        document.querySelector('#i-25 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_viWatchBp')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-25').style.display = 'none'
    }
})

document.querySelector('#i-25 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_viWatchBp', JSON.stringify(dadosProduto))
        document.querySelector('#i-25 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 25


//Item 26
if (localStorage.getItem('db_viWatchSp') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_viWatchSp')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-26').style.display = 'flex'

    document.querySelector('#i-26 .i-image img').addEventListener('click', function () {
        location.href = 'vivoWatchSP.html'
    })

    document.querySelector('#i-26 .i-image img').src="img/watches/avivowatchSP.png"
    document.querySelector('#i-26 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-26 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-26 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-26 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-26 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_viWatchSp', JSON.stringify(dadosProduto))
        document.querySelector('#i-26 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_viWatchSp')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-26').style.display = 'none'
    }
})

document.querySelector('#i-26 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_viWatchSp', JSON.stringify(dadosProduto))
        document.querySelector('#i-26 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 26


//Item 27
if (localStorage.getItem('db_miHolder') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_miHolder')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-27').style.display = 'flex'

    document.querySelector('#i-27 .i-image img').addEventListener('click', function () {
        location.href = 'xiaomiHolder.html'
    })

    document.querySelector('#i-27 .i-image img').src="img/acessories/xcarstand.png"
    document.querySelector('#i-27 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-27 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-27 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-27 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-27 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_miHolder', JSON.stringify(dadosProduto))
        document.querySelector('#i-27 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_miHolder')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-27').style.display = 'none'
    }
})

document.querySelector('#i-27 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_miHolder', JSON.stringify(dadosProduto))
        document.querySelector('#i-27 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 27


//Item 28
if (localStorage.getItem('db_zenNine') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_zenNine')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-28').style.display = 'flex'

    document.querySelector('#i-28 .i-image img').addEventListener('click', function () {
        location.href = 'zenfone9.html'
    })

    document.querySelector('#i-28 .i-image img').src="img/phones/azenfone9.png"
    document.querySelector('#i-28 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-28 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-28 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-28 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-28 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_zenNine', JSON.stringify(dadosProduto))
        document.querySelector('#i-28 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_zenNine')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-28').style.display = 'none'
    }
})

document.querySelector('#i-28 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_zenNine', JSON.stringify(dadosProduto))
        document.querySelector('#i-28 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 28


//Item 29
if (localStorage.getItem('db_zenEleven') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_zenEleven')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-29').style.display = 'flex'

    document.querySelector('#i-29 .i-image img').addEventListener('click', function () {
        location.href = 'zenfone11Ultra.html'
    })

    document.querySelector('#i-29 .i-image img').src="img/phones/azenfone11ultra.png"
    document.querySelector('#i-29 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-29 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-29 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-29 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-29 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_zenEleven', JSON.stringify(dadosProduto))
        document.querySelector('#i-29 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_zenEleven')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-29').style.display = 'none'
    }
})

document.querySelector('#i-29 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_zenEleven', JSON.stringify(dadosProduto))
        document.querySelector('#i-29 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 29


//Item 30
if (localStorage.getItem('db_miBandNine') != null) {
    const dadosProduto = (JSON.parse(localStorage.getItem('db_miBandNine')))

    window.addEventListener('load', function (e) {
        atualizarValor()
        valorTotal()
    })

    document.getElementById('i-30').style.display = 'flex'

    document.querySelector('#i-30 .i-image img').addEventListener('click', function () {
        location.href = 'miBand9.html'
    })

    document.querySelector('#i-30 .i-image img').src="img/watches/mband9.png"
    document.querySelector('#i-30 .item-name').innerHTML = dadosProduto.nome
    document.querySelector('#i-30 .item-qnt').innerHTML = dadosProduto.quantidade
    document.querySelector('#i-30 .item-var').innerHTML = dadosProduto.variacao

    const atualizarValor = () => {
        const valor = dadosProduto.preco.slice(2).replace('.', '').replace(',', '.')
        const valorFinal = Number(valor) * dadosProduto.quantidade
        document.querySelector('#i-30 .item-price').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.', ',')
    }
    
    //Alterar quantidade

document.querySelector('#i-30 .i-qnt .i-minus').addEventListener('click', function () {
    if (dadosProduto.quantidade > 0) {
        dadosProduto.quantidade --
        localStorage.setItem('db_miBandNine', JSON.stringify(dadosProduto))
        document.querySelector('#i-30 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
    }

    function deletarItem() {
        localStorage.removeItem('db_miBandNine')
    }

    if(dadosProduto.quantidade === 0) {
        deletarItem()
        document.getElementById('i-30').style.display = 'none'
    }
})

document.querySelector('#i-30 .i-qnt .i-plus').addEventListener('click', function () {
        dadosProduto.quantidade ++
        localStorage.setItem('db_miBandNine', JSON.stringify(dadosProduto))
        document.querySelector('#i-30 .i-qnt .item-qnt').innerHTML = dadosProduto.quantidade
        atualizarValor()
        valorTotal()
})
}
//Fim do item 30


//Valor total

function valorTotal () {
    let valores = []
    if (document.querySelector('#i-1 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-1 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-2 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-2 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-3 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-3 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-4 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-4 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-5 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-5 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-6 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-6 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-7 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-7 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-8 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-8 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-9 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-9 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-10 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-10 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-11 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-11 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-12 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-12 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-13 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-13 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-14 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-14 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-15 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-15 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-16 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-16 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-17 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-17 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-18 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-18 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-19 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-19 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-20 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-20 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-21 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-21 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-22 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-22 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-23 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-23 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-24 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-24 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-25 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-25 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-26 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-26 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-27 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-27 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-28 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-28 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-29 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-29 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }
    if (document.querySelector('#i-30 .i-price .item-price').innerHTML != 'l') {
        valores.push(JSON.parse(document.querySelector('#i-30 .i-price .item-price').innerHTML.slice(2).replace('.', '').replace(',', '.')))
    }

    const freteNumero = []
    if (document.querySelector('#shippingValue').innerHTML != '') {
        freteNumero.push(JSON.parse(document.querySelector('#shippingValue').innerHTML.slice(2).replace(',', '.')))
    }

    

    let sum = 0
    valores.forEach(n => sum += n)

    let sum2 = 0
    freteNumero.forEach(n => sum2 += n)

    let somaValores = sum + sum2

    
    
    
      
    document.getElementById('totalValue').innerHTML = 'R$' + somaValores.toFixed(2).replace('.', ',')

    document.getElementById('formTotal').innerHTML = 'R$' + somaValores.toFixed(2).replace('.', ',')

    valores = valores.filter(valor => valor !== 0)

    document.getElementById('itemsValue').innerHTML = valores.length

}

//Calcular frete



const pesquisarCep = async() => {
    const cep = document.getElementById('shipCalc').value
    const valorFrete = document.querySelector('.shipValue')
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const endereco = await dados.json()
    console.log(endereco)
    if (endereco.uf === "AC") {
        valorFrete.innerHTML = 'R$172,00'
    }
    if (endereco.uf === "AL") {
        valorFrete.innerHTML = 'R$137,90'
    }
    if (endereco.uf === "AP") {
        valorFrete.innerHTML = 'R$98,00'
    }
    if (endereco.uf === "AM") {
        valorFrete.innerHTML = 'R$162,00'
    }
    if (endereco.uf === "BA") {
        valorFrete.innerHTML = 'R$45,63'
    }
    if (endereco.uf === "CE") {
        valorFrete.innerHTML = 'R$118,20'
    }
    if (endereco.uf === "ES") {
        valorFrete.innerHTML = 'R$72,00'
    }
    if (endereco.uf === "DF") {
        valorFrete.innerHTML = 'R$23,00'
    }
    if (endereco.uf === "MA") {
        valorFrete.innerHTML = 'R$89,00'
    }
    if (endereco.uf === "MT") {
        valorFrete.innerHTML = 'R$54,00'
    }
    if (endereco.uf === "MS") {
        valorFrete.innerHTML = 'R$78,00'
    }
    if (endereco.uf === "MG") {
        valorFrete.innerHTML = 'R$32,00'
    }
    if (endereco.uf === "PA") {
        valorFrete.innerHTML = 'R$67,00'
    }
    if (endereco.uf === "PB") {
        valorFrete.innerHTML = 'R$49,00'
    }
    if (endereco.uf === "PR") {
        valorFrete.innerHTML = 'R$112,00'
    }
    if (endereco.uf === "PE") {
        valorFrete.innerHTML = 'R$105,00'
    }
    if (endereco.uf === "PI") {
        valorFrete.innerHTML = 'R$49,00'
    }
    if (endereco.uf === "RJ") {
        valorFrete.innerHTML = 'R$115,00'
    }
    if (endereco.uf === "RN") {
        valorFrete.innerHTML = 'R$78,00'
    }
    if (endereco.uf === "RS") {
        valorFrete.innerHTML = 'R$56,27'
    }
    if (endereco.uf === "RO") {
        valorFrete.innerHTML = 'R$84,00'
    }
    if (endereco.uf === "RR") {
        valorFrete.innerHTML = 'R$76,00'
    }
    if (endereco.uf === "SC") {
        valorFrete.innerHTML = 'R$96,00'
    }
    if (endereco.uf === "SP") {
        valorFrete.innerHTML = 'R$42,00'
    }
    if (endereco.uf === "SE") {
        valorFrete.innerHTML = 'R$48,00'
    }
    if (endereco.uf === "TO") {
        valorFrete.innerHTML = 'R$86,00'
    }
    if (endereco.uf === "GO") {
        valorFrete.innerHTML = 'R$86,00'
    }
    document.getElementById('sAdress').innerHTML = endereco.logradouro
    if (endereco.erro) {
        document.getElementById('sAdress').innerHTML = 'CEP inválido.'
        valorFrete.innerHTML = ''
    }
    document.getElementById('shippingValue').innerHTML = valorFrete.innerHTML
    valorTotal()
}

document.getElementById('calcBtn').addEventListener('click', pesquisarCep)


//Finalizar compra

comprar.addEventListener('click', function () {
        fullScreen.style.display = 'block'
        closeFullscreen.style.display = 'block'
        closeFullscreen.addEventListener('click', function () {
            fullScreen.style.display = 'none'
            closeFullscreen.style.display = 'none'
        })
})