function updateElementIdHtml(elementID, html) {
    document.getElementById(elementID).innerHTML = html
}

function templateSingleCard(cd) {
    return `
     <article class="cardCDInfo" id="${cd.tag}">
        <img  id="img-${cd.tag}" class="coverCD" src="img/${cd.img}" alt="${cd.artist} - ${cd.album}" />
        <h3 id="artist-${cd.tag}">${cd.artist}</h3>
        <p>Album: <span id="album-${cd.tag}">${cd.album}</span> </p>
        <p>Price: <span id="price-${cd.tag}">${cd.price}</span> Kr </p>
        <button id="button-${cd.tag}" class="buyButton js-button">Buy</button>
    </article>
    `
}

function updateContent() {
    let htmlElement = ''

    for (const cd of dataProducts) {
        htmlElement += templateSingleCard(cd)

    }
    updateElementIdHtml('CardProductContents', htmlElement)
}

updateContent()