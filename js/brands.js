'use strict'

const ofertas = document.querySelectorAll('.offer')

const selecionarAba = document.querySelectorAll('.our-selections')

const dropdowns = document.querySelectorAll('.dropdown')

const resgatarCupom = document.querySelectorAll('.redeem-voucher')

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