'use strict'

const produtos = document.querySelectorAll('.product')

const ofertas = document.querySelectorAll('.offer')

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


//Favoritados
const favoritos = JSON.parse(localStorage.getItem('favorites'))
const container = document.querySelector('.products-container')
favoritos.forEach(itemFavoritado => {
    for ( const chave in itemFavoritado) {
        const info = itemFavoritado[chave]
        const product = document.createElement('div')
    product.classList.add('product')
    product.innerHTML = `
                <div class="prod-bg">
                    <img src="${info.image}" alt="" class="prod-img">
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs"></i>
                </div>
                <p class="prod-name">${info.nome}</p>
                <p class="price">${info.preco}</p>
            </a>
    `

    if (info.nome === 'Galaxy S24 Ultra') {
        product.innerHTML = `
                <div class="prod-bg">
                    <img src="${info.image}" alt="" class="prod-img">
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                </div>
                <p class="prod-name">${info.nome}</p>
                <p class="price">${info.preco}</p>
            </a>
    `
    }

    if (info.nome === 'Asus ROG Cetra TWS') {
        product.innerHTML = `
                <div class="prod-bg">
                    <img src="${info.image}" alt="" class="prod-img">
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                </div>
                <p class="prod-name">${info.nome}</p>
                <p class="price">${info.preco}</p>
            </a>
    `
    }

    if (info.nome === 'Asus ROG Phone 8') {
        product.innerHTML = `
                <div class="prod-bg">
                    <img src="${info.image}" alt="" class="prod-img">
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs activeStar"></i>
                    <i class="fa-solid fa-star fa-xs"></i>
                    <i class="fa-solid fa-star fa-xs"></i>
                </div>
                <p class="prod-name">${info.nome}</p>
                <p class="price">${info.preco}</p>
            </a>
    `
    }

    product.addEventListener('click', function () {
        location.href = info.link
    })
    container.appendChild(product)
    }
})
