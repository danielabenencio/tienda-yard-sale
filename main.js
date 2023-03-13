const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon =  document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailConatiner = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu );
burgerMenu.addEventListener('click', toggleMobileMenu );
carritoIcon.addEventListener('click', toggleshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu () {
 desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}
function toggleshoppingCartContainer () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailConatiner.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailConatiner.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside (){
    shoppingCartContainer.classList.add('inactive');

    productDetailConatiner.classList.remove('inactive');
}
function closeProductDetailAside (){
    productDetailConatiner.classList.add('inactive');
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: '120',
    image: './bike.jpeg',
});
productList.push ({
    name: 'Computadora',
    price: '1200',
    image: './bike.jpeg',

});
productList.push ({
    name: 'Camara',
    price: '1000',
    image: './bike.jpeg',

});


function renderProducts(arr){

for (product of arr) {

const productCard = document.createElement('div');
productCard.classList.add('product-card');

const productImg = document.createElement('img');
productImg.setAttribute('src', product.image);
productImg.addEventListener('click', openProductDetailAside)

const productInfo = document.createElement('div');
productInfo.classList.add('product-info');

const productInfoDiv = document.createElement('div');

const productPrice = document.createElement('p');
productPrice.innerText = '$' + product.price
const productName = document.createElement('p');
productName.innerText = product.name

productInfoDiv.appendChild(productName);
productInfoDiv.appendChild(productPrice);


const productInfoFigure = document.createElement('figure');
const productImgCart = document.createElement('img');
productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');

productInfoFigure.appendChild(productImgCart);

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);
}}

renderProducts (productList);