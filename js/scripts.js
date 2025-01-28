'use strict'

const fundos = document.querySelectorAll('.dot')

const proximaImagem = document.getElementById('nextBtn')

const imagemAnterior = document.getElementById('backBtn')

const produtos = document.querySelectorAll('.product')

const ofertas = document.querySelectorAll('.offer')

let numeroImagem = 2

const selecionarAba = document.querySelectorAll('.our-selections')

const dropdowns = document.querySelectorAll('.dropdown')

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

//Banner

function changeBackground() {
const pontoUm = document.getElementById('dotOne')
const pontoDois = document.getElementById('dotTwo')
const pontoTres = document.getElementById('dotThree')
const imagem = document.querySelector('.banner')

    if (numeroImagem === 1) {
    imagem.style.backgroundImage = "url('img/bannerSamsung.png')"
    pontoTres.classList.remove('dtactive')
    pontoDois.classList.remove('dtactive')
    pontoUm.classList.add('dtactive')

} if (numeroImagem === 2) {
    imagem.style.backgroundImage = "url('img/bannerXiaomi.webp')"
    pontoTres.classList.remove('dtactive')
    pontoUm.classList.remove('dtactive')
    pontoDois.classList.add('dtactive')

} if (numeroImagem === 3) {
    imagem.style.backgroundImage = "url('img/bannerAsus.webp')"
    pontoUm.classList.remove('dtactive')
    pontoDois.classList.remove('dtactive')
    pontoTres.classList.add('dtactive')
}
}

proximaImagem?.addEventListener('click', () => {  
    if (numeroImagem < 3) {
        numeroImagem++
    }
changeBackground()
})

imagemAnterior?.addEventListener('click', () => {
    if (numeroImagem > 1) {
        numeroImagem--
    }
    changeBackground()
})

selecionarAba.forEach(aba => {
    aba.addEventListener('click', () => {
        document.querySelector('.activeTxt')?.classList.remove('activeTxt')
        aba.classList.add('activeTxt')
    })
})

//Seleção de categorias

document.querySelector('#lastProducto').addEventListener('click', function () {
    produtos.forEach(product => {
        if (!product.classList.contains('latest')) {
            product.style.display = 'none'
        } else {
            document.querySelectorAll('.latest').forEach(ultimo => {
                ultimo.style.display = 'flex'
            })
        }
    })
})

document.querySelector('#allProducto').addEventListener('click', function () {
    produtos.forEach(product => {
            product.style.display = 'flex'
    })
})

document.querySelector('#offerProducto').addEventListener('click', function () {
    produtos.forEach(product => {
        if (!product.classList.contains('offer')) {
            product.style.display = 'none'
        } else {
            document.querySelectorAll('.offer').forEach(ultimo => {
                ultimo.style.display = 'flex'
            })
        }
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