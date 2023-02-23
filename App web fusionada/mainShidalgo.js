
// #region selectores de clases en el html

// Menu de correo en navbar
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Menu hamburguesa en version movil
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// Lista de productos en carrito
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const listProductCart = document.querySelector('.productCart');

//Este cardsContainer se llama solamente para poder insertarle la plantilla de producto
const productsCardsContainer = document.querySelector('.cards-container');

//#endregion

// #region Escucha eventos clic
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleListProductCart);
// #endregion

//#region Funciones para ocultar menus

//Funciones que pueden ser de cualquiera de las formas (comentada / descomentada)... la que esta funcionando es mas sencilla pero la comentada puede servir en algún caso extraño

function toggleDesktopMenu() {
    listProductCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');


    // const isListProductCartClosed = listProductCart.classList.contains('inactive');

    // if(!isListProductCartClosed){
    //     listProductCart.classList.add('inactive');
    // }

    // desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    listProductCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

    // const isListProductCartClosed = listProductCart.classList.contains('inactive');

    // if(!isListProductCartClosed){
    //     listProductCart.classList.add('inactive');
    // }

    // mobileMenu.classList.toggle('inactive');
}


function toggleListProductCart() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    listProductCart.classList.toggle('inactive');

    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // const isDestopMenuClosed = desktopMenu.classList.contains('inactive');

    // if(!isDestopMenuClosed){
    //     desktopMenu.classList.add('inactive');
    // }

    // else if(!isMobileMenuClosed){
    //     mobileMenu.classList.add('inactive');
    // }        

    // listProductCart.classList.toggle('inactive');
}
//#endregion

//#region lista de productos a mostrar

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://www.profesionalreview.com/wp-content/uploads/2019/03/Samsung-anuncia-los-precios-de-sus-nuevos-televisores-8K-QLED.jpg'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://media.cdn.puntobiz.com.ar/012023/1673280937840.webp?cw=807&ch=454&extw=jpg'
});

 //#endregion

// #region referencia de HTML que vamos a construir

// <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//             <div>
//                 <p>$120,00</p>
//                 <p>Bike</p>
//             </div>
//             <figure>
//                 <img src="../icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
// </div>

// #endregion


// #region Seteamos cual va a ser la plantilla de los productos
for (product of productList) {
    const productCard = document.createElement('div');
    productCart.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    //product={name, price, image} -> product.image

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
//----------------------------------------------------
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = '$' + product.name;
//----------------------------------------------------
    const productInfoFigure = document.createElement('figure');
    
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', '../icons/bt_add_to_cart.svg')   
//----------------------------------------------------
//#endregion

//#region En la jerarquía empezamos a meter uno dentro de otro para hacer un solo paquete de atras para adelente ejemplo 1,2,3,4,5 lo metemos primero el 5,4,3,2,1


productInfoDiv.appendChild(productPrice);
productInfoDiv.appendChild(productName);
productInfoFigure.appendChild(productImgCart);

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);
productsCardsContainer.appendChild(productCard);





}

// si usamos el for in linea 10 de aqui para abajo entonces nos dará solo el indice, si usamos for of nos da el contenido
// productList
// (3) [{…}, {…}, {…}]0: {name: 'Bike', precio: 120, image: 'https://images.pexels.com/photos/276517/pexels-pho….jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}1: {name: 'Pantalla', precio: 220, image: 'https://www.profesionalreview.com/wp-content/uploa…los-precios-de-sus-nuevos-televisores-8K-QLED.jpg'}2: {name: 'Computador', precio: 620, image: 'https://media.cdn.puntobiz.com.ar/012023/1673280937840.webp?cw=807&ch=454&extw=jpg'}length: 3[[Prototype]]: Array(0)
// for(product of productList){
//     console.log(product.name)
// }
// VM1187:2 Bike
// VM1187:2 Pantalla
// VM1187:2 Computador
// undefined
// for(product in productList){
//     console.log(product)
// }
// VM1250:2 0
// VM1250:2 1
// VM1250:2 2