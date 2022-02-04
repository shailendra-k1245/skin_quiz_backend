console.log('here first')

var cart = JSON.parse(localStorage.getItem("cartProducts")) || []

function getData(items) {

  console.log('items:',items)
  let item = JSON.parse(items)
  cart.push(item)
  console.log(item)
  localStorage.setItem('cartProducts', JSON.stringify(cart));
  
  alert('success')

}  

  