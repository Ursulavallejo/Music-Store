function openMenu() {
// opens dropdown Menu
    document.getElementById('dropdown').classList.toggle('show')

}

function closeMenu() {
// closes dropdown Menu
    document.getElementById('dropdown').classList.remove('show')
}

function toCheckout() {
//Shows check out Message
    alert('Thank you for visiting us!! At the moment we cant offer to buy any product!')

}


function templateSingleCartItemToDropdown(cd) {
// function that writes html template with dynamic data
    return `
     <article class="cardCDInfoCart" id="${cd.tag}">
        <img  id="img-${cd.tag}" class="coverCD" src="${cd.img}" alt="${cd.artist} - ${cd.album}" />
        <h3 id="artist-${cd.tag}">${cd.artist}</h3>
        <p>Album: <span id="album-${cd.tag}">${cd.album}</span> </p>
        <p>Price: <span id="price-${cd.tag}">${cd.price}</span> Kr </p>
        <input id="inputQty-${cd.tag}" type="number" name="amount" value="${cd.quantity}"  onchange="addMore('${cd.tag}')"/>
         <p id="subPriceCart"><span>${cd.totalSum}</span> Kr</p>
        <button id="removeCDCart" type="button" onclick="removeItemFromArray ('${cd.tag}')">X</button>
    </article>  
`
}

function updateDropdownContent() {
// updates dropdown when array changes
    let showCartAlbums = [];
    for (const item of myCartShop) {
        showCartAlbums += templateSingleCartItemToDropdown(item)
    }
    updateElementIdHtml('cartProducts', showCartAlbums)
}

function checkNumberItem(cd) {
// if input is 0, removes item from array
    let val = document.getElementById("inputQty-" + cd).value
    let numberItem = parseInt(val)
    if (numberItem <= 0) {
        removeItemFromArray(cd)
    }
}









