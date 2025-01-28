'use strict'

const productImage = document.querySelector('.product-main-img')

const imgs = document.querySelectorAll('.alt-img')

const variations = document.querySelectorAll('.variation')

const variationName = document.getElementById('variation')

const reviewSections = document.querySelectorAll('.r-sort')

const likeIcon = document.querySelectorAll('.likeComment')

const qntNumber = document.querySelector('#qNumber')

const reviews = document.querySelectorAll('.review')

const estrelaUm = document.querySelectorAll('.r-star1')

const estrelaDois = document.querySelectorAll('.r-star2')

const estrelaTres = document.querySelectorAll('.r-star3')

const estrelaQuatro = document.querySelectorAll('.r-star4')

const estrelaCinco = document.querySelectorAll('.r-star5')

const reviewImages = document.querySelectorAll('.r-img')

const withImages = document.querySelectorAll('.image-within')

const goToImage = document.querySelectorAll('.image-within img')

const fullScreen = document.querySelector('.fullscreenImage')

const closeFullscreen = document.querySelector('.close-fullscreen')

let productQuantity = 1

filtrar()


//Imagens Alternativas do produto

imgs.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector('.active-var')?.classList.remove('active-var')
        img.classList.add('active-var')
    })
})

var minhaImagem, style, backgroundImage
    minhaImagem = document.getElementById('main-image')
    style = window.getComputedStyle(minhaImagem)
    backgroundImage = style.getPropertyValue('background-image').slice(4, -1).replace(/["']/g, "")

document.querySelector('.alt1').addEventListener('click', function () {
    productImage.style.backgroundImage = "url('img/acessories/agamingchargerdock.png')"
    backgroundImage = productImage.style.getPropertyValue('background-image').slice(4, -1).replace(/["']/g, "")
})

document.querySelector('.alt2').addEventListener('click', function () {
    productImage.style.backgroundImage = "url('img/acessories/AltImgs/gamingdock/alt1.png')"
    backgroundImage = productImage.style.getPropertyValue('background-image').slice(4, -1).replace(/["']/g, "")
})

document.querySelector('.alt3').addEventListener('click', function () {
    productImage.style.backgroundImage = "url('img/acessories/AltImgs/gamingdock/alt2.png')"
    backgroundImage = productImage.style.getPropertyValue('background-image').slice(4, -1).replace(/["']/g, "")
})

//Selecionar variação do produto

variations.forEach(variation => {
    variation.addEventListener('click', () => {
        document.querySelector('.active-variation')?.classList.remove('active-variation')
        variation.classList.add('active-variation')
    }) 
})

document.getElementById('var1').addEventListener('click', function () {
    variationName.innerText = 'Preto'
})

//Quantidade de produtos

document.querySelector('#qMinus').addEventListener('click', function () {
    if (productQuantity > 1) {
        productQuantity --
        qntNumber.innerHTML = productQuantity
    }
})

document.querySelector('#qPlus').addEventListener('click', function () {
    productQuantity ++
    qntNumber.innerHTML = productQuantity
})


//Compartilhar Link

document.querySelector('.b-share').addEventListener('click', () => {
    const targetElementor = 'www.merchant.com.br'
    
    navigator.clipboard.writeText(targetElementor).then(() => {
        document.querySelector('.b-share i').remove()
        
        const shareText = document.querySelector('.b-share span')
        
        shareText.innerHTML = 'Link copiado!'
        shareText.style.fontWeight = 'bold'
        shareText.style.color = 'rgb(243, 97, 0)'
    })
})

//Favoritar item

document.querySelector('.b-favorite').addEventListener('click', function() {
    const icon = document.getElementById('favoriteButton');
    if (icon.classList.contains('fa-regular')) {
        icon.classList.replace('fa-regular', 'fa-solid');
    } else {
        icon.classList.replace('fa-solid', 'fa-regular');
    }
});


//Fullscreen

productImage.addEventListener('click', function () {
    document.querySelector('.fullscreenImage img').src = backgroundImage
        fullScreen.style.display = 'block'
        closeFullscreen.style.display = 'block'
        closeFullscreen.addEventListener('click', function () {
            fullScreen.style.display = 'none'
            closeFullscreen.style.display = 'none'
        })
})

goToImage.forEach(openImage => {
    openImage.addEventListener('click', function () {
        document.querySelector('.fullscreenImage img').src = openImage.getAttribute('src')
        fullScreen.style.display = 'block'
        closeFullscreen.style.display = 'block'
        closeFullscreen.addEventListener('click', function () {
            fullScreen.style.display = 'none'
            closeFullscreen.style.display = 'none'
        })
    })
})


//Filtrar reviews

document.querySelector('.product-review').addEventListener('click', function () {
    window.scrollTo({
        top:1600,
        behavior: 'smooth'})
})

reviewSections.forEach(revSection => {
    revSection.addEventListener('click', () => {
        document.querySelector('.active-r')?.classList.remove('active-r')
        revSection.classList.add('active-r')
    })
})

document.querySelector('#rFive').addEventListener('click', function () {
    reviews.forEach(review => {
        if (!review.classList.contains('star-five')) {
            review.style.display = 'none'
        } else {
            document.querySelectorAll('.star-five').forEach(estrelas => {
                estrelas.style.display = 'flex'
            })
        }
    })
})

document.querySelector('#rFour').addEventListener('click', function () {
    reviews.forEach(review => {
        if (!review.classList.contains('star-four')) {
            review.style.display = 'none'
        } else {
            document.querySelectorAll('.star-four').forEach(estrelas => {
                estrelas.style.display = 'flex'
            })
        }
    })
})

document.querySelector('#rThree').addEventListener('click', function () {
    reviews.forEach(review => {
        if (!review.classList.contains('star-three')) {
            review.style.display = 'none'
        } else {
            document.querySelectorAll('.star-three').forEach(estrelas => {
                estrelas.style.display = 'flex'
            })
        }
    })
})

document.querySelector('#rTwo').addEventListener('click', function () {
    reviews.forEach(review => {
        if (!review.classList.contains('star-two')) {
            review.style.display = 'none'
        } else {
            document.querySelectorAll('.star-two').forEach(estrelas => {
                estrelas.style.display = 'flex'
            })
        }
    })
})

document.querySelector('#rOnes').addEventListener('click', function () {
    reviews.forEach(review => {
        if (!review.classList.contains('star-one')) {
            review.style.display = 'none'
        } else {
            document.querySelectorAll('.star-one').forEach(estrelas => {
                estrelas.style.display = 'flex'
            })
        }
    })
})

document.querySelector('#rOverall').addEventListener('click', function () {
    reviews.forEach(review => {
    review.style.display = 'flex'
    })
})

reviewImages.forEach(reviewImage => {
    if (reviewImage.classList.contains('with-image')) {
        reviewImage.style.display = 'flex'
    }
})

document.querySelector('#rMedia').addEventListener('click', function () {
    reviews.forEach(review => {
    review.style.display = 'none'
    })
    withImages.forEach(hasImage => {
        hasImage.style.display = 'flex'
    })
})


//Like review

likeIcon.forEach(likeButton => {
    likeButton.addEventListener('click', function() {
        if (likeButton.classList.contains('fa-regular')) {
            likeButton.classList.replace('fa-regular', 'fa-solid');
        } else {
            likeButton.classList.replace('fa-solid', 'fa-regular');
        }
    })
})


//Carrinho 

const adicionar = document.getElementById('adCart')
adicionar.addEventListener('click', function () {
    
    adicionarCarrinho()

    document.getElementById('adCart').innerHTML = "Produto adicionado!"

    document.getElementById('adCart').style.color = 'rgb(50, 201, 50)'
})

function adicionarCarrinho() {

    const productName = document.querySelector('.product-name span')

    let product = {
        nome: productName.innerHTML,
        quantidade: productQuantity,
        variacao: variationName.innerHTML,
        preco: document.getElementById('currentPrice').innerHTML
    }

    const gravarProduto = localStorage.setItem('db_miBandNine', JSON.stringify(product))

    const dadosProduto = (JSON.parse(localStorage.getItem('db_miBandNine')))

    gravarProduto
}


//Comprar
document.querySelector('#buyNow').addEventListener('click', function() {
    adicionarCarrinho()
    location.href = 'cart.html'
})


//Favoritar item

function checkFavorites() {
    const inspectFavorites = JSON.parse(localStorage.getItem('favorites'))

    const productExists = inspectFavorites.some(item => item.gamingdock);

    if ( !productExists) {

    } else {
        const icon = document.getElementById('favoriteButton');
        icon.classList.replace('fa-regular', 'fa-solid');
    }
}

window.addEventListener('load', function (e) {
    checkFavorites()
})

const favoritar = document.querySelector('.b-favorite');

favoritar.addEventListener('click', function () {
    const productName = document.querySelector('.product-name span');
    const productPrice = document.getElementById('currentPrice');

    let favProduct = {
        "gamingdock": {
            "nome": productName.innerHTML,
            "preco": productPrice.innerHTML,
            "image": "img/acessories/agamingchargerdock.png",
            "link": window.location.pathname
        }
    };

    let getFavorite = JSON.parse(localStorage.getItem('favorites')) || [];

    const productExists = getFavorite.some(item => item.gamingdock);

    if (!productExists) {
        getFavorite.push(favProduct);
    } else {
        getFavorite = getFavorite.filter(item => !(item.gamingdock));
        
    }

    localStorage.setItem('favorites', JSON.stringify(getFavorite));

});


//Exibir reviews
const mostrarReviews = document.querySelector('.show-btn')
mostrarReviews.addEventListener('click', function() {
    if (mostrarReviews.innerHTML === 'Exibir avaliações') {
        mostrarReviews.innerHTML = 'Ocultar avaliações'
        document.querySelector('.r-reviews').style.display = 'flex'
    } 
    else if (mostrarReviews.innerHTML === 'Ocultar avaliações') {
            mostrarReviews.innerHTML = 'Exibir avaliações'
            document.querySelector('.r-reviews').style.display = 'none'
        }
})


//Menu Dropdown

const dropdowns = document.querySelectorAll('.dropdown')

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