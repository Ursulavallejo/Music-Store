function createContentHeader() {
    return `

   <section class="grid-container-header">
          <div class="logo">
            <img src="img/amoebaLogo.png" alt="shopLogo" />
          </div>
          <div class="searchArea">
            <label>
              <input type="text" value="artist name, keywords" />
            </label>
            <button onclick="#">SEARCH</button>
          </div>
          <div class="dropdown">
            <div class="checkOut">
              <img src="img/shoppingCart.png" alt="cartBuy" onclick="openMenu()" />
              <button class="checkoutDropdownButton" onclick="openMenu()">
                Checkout
              </button>
            </div>
            <div id="dropdown" class="dropdown-content">
              <h2>Your Cart</h2>
              <hr/>

              <section class="grid-container-ShopCart">
              
                <article id="cartProducts" class="grid-item1 area-item2">
                 <p>No Articles add it to the cart</p> 
                </article>
                <article class="grid-item1 area-item3">
                  <p>
                    SUMMARY: (<span id="totalCds">0</span><span> CD's</span>) TOTAL to PAY:
                    <span id="totalPay"></span><span> SEK</span>
                  </p>
                  <p id="freeShipmt">You need to buy 259 Kr to Free fright!</p>
                </article>

                <button onclick="closeMenu()">Close</button>
                <button onclick="toCheckout()">Checkout</button>
              </section>
            </div>
          </div>
        </section>
`
}
document.getElementById('header').innerHTML = createContentHeader()

