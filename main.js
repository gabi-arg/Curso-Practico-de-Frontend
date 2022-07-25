const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.main-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoaside);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed){
        aside.classList.add('inactive');
        } 

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoaside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!ismobileMenuClosed){
    mobileMenu.classList.add('inactive');
    } 

    aside.classList.toggle('inactive');
    
}


const productList = []; //realizamos un array en el cual cada elemento va ser los diferente productos de mi app
productList.push({
    name: 'planta',
    price: 120,
    image:'./css/img/exterior/exterior.jpg',
});
productList.push({
    name: 'planta',
    price: 320,
    image:'./css/img/exterior/exterior1.jpg',
});
productList.push({
    name: 'planta',
    price: 420,
    image:'./css/img/exterior/exterior2.jpg',
});
// esta es la forma de correr los elementos del array para poder insertarlos en HTML
for (product of productList){    //una forma de abreviar el for es usando 'of', para cada producto de mi lista de producto

    //createElement ayuda a crear cada instruccion de HTML en JS
    //en HTML
    /*<div class="cards-container">
            <div class="product-card">
                <img src="./css/img/exterior/exterior.jpg" alt="planta">
                <div class="product-info">
                    <div>
                    <p>$120,00</p>
                    <p>Planta</p>
                </div>
               
                <figure>
                    <img src="./css/iconos/carro.png" alt="carrito-de-compras">
                </figure>
            </div>
            </div>

</div>*/
    //En JS

    //
    const productCard = document.createElement('div') //div class="product-card"
    productCard.classList.add('product-card');


    const productImg = document.createElement('img'); //<img src="./css/img/exterior/exterior.jpg" alt="planta">
    productImg.setAttribute('src', product.image);
    //product ={name, price,image} -> product.image
    const productInfo = document.createElement('div');// <div class="product-info"></div>
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div')//<div>

    const productPrice = document.createElement('p')//<p>$120,00</p>
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p')// <p>Planta</p>
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./css/iconos/carro.png' );

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
 }


    
