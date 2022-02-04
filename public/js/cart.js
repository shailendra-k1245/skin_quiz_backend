
let itemsDiv = document.getElementById('items');

let cart =  JSON.parse(localStorage.getItem('cartProducts'))

let totalPrice = document.getElementById('total-bill');

if(cart.length <= 0) {
  let message = document.createElement('p');
  message.textContent = "Your cart is currently empty."

  let gotoProd = document.createElement('a')
  gotoProd.href = './products'
  gotoProd.target = '_black';
  gotoProd.textContent = 'Add Products >>'

  itemsDiv.append(message, gotoProd)

}else {
  cart.map((item, idx )=> {

    let div = document.createElement('div');
    div.setAttribute('class', "cart-product")


    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('class', 'cart-img-div')

    let priceDiv = document.createElement('div');
    priceDiv.setAttribute('class', 'cart-price-div');

    let img = document.createElement('img');
    img.src = item.image_url;

    let name = document.createElement('p')
    name.innerText = item.title;

    let deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'fa fa-trash-o')
    deleteIcon.setAttribute('id', 'deleteIcon');

    
    
    let prices = document.createElement('div')
    prices.innerHTML =`<p class="old-price" > Rs. ${item.price} </p>
                       <p> Rs. ${item.offer_price}</p>` ;
    
    let hr = document.createElement('hr');

    imgDiv.append(img, name, deleteIcon);
    priceDiv.append(prices)

    div.append(imgDiv,hr, priceDiv)
    itemsDiv.append(div)

  });

  var total = cart.reduce((ac, cv) => {
    return ac + Number(cv.offer_price);
  },0)
  
  
}

totalPrice.innerHTML = `Rs. ${total}`;



