const product = [
    {
        id: 0,
        image: '../products/pao-tub.jpg',
        comment: '',
        title: 'Puto Pao - Tub',
        price: 100,
    },
    {
        id: 1,
        image: '../products/puto.jpg',
        comment: '',
        title: 'Puto Pao - Bilao',
        price: 450,
    },
    {
        id: 2,
        image: '../products/cheese-tub.jpg',
        comment: '',
        title: 'Puto Cheese - Tub',
        price: 75,
    },
    {
        id: 3,
        image: '../products/puto-bilao.jpg ',
        comment: '',
        title: 'Puto Pao - Bilao',
        price: 350,
    },

    {
        id: 4,
        image: '../products/maja-tub.jpg',
        comment: '',
        title: 'Maja Blanca - Tub',
        price: 120,
    },

    {
        id: 5,
        image: '../products/maja-smalltray.jpg',
        comment: '',
        title: 'Maja Blanca  - Small Tray',
        price: 350,
    },

    {
        id: 6,
        image: '../products/maja-tray.jpg',
        comment: '',
        title: 'Maja Blanca - Large Tray',
        price: 650,
    },

    {
        id: 7,
        image: '../products/sapin-sapin.jpg',
        comment: '',
        title: 'Sapin-Sapin - Tub',
        price: 90,
    },

    {
        id: 8,
        image: '../products/sapsap-bilao.jpg',
        comment: '',
        title: 'Sapin-Sapin - Bilao',
        price: 350,
    },

    {
      id: 9,
      image: '../products/puto-ube.jpg',
      comment: '*BRAND NEW*',
      title: ' Puto Ube - Tub',
      price: 100,
  }

    
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
  displaycart();

});

document.getElementById('container').innerHTML = categories
  .map((item) => {
    var { image, comment, title, price } = item;
    return `
      <div class='product-card'>
        <div class='img-box'>
          <img class='card-image product-1-A' src=${image}></img>
        </div>
        <h3>${comment}</h3>
          <h2>${title}</h2>
          <p>₱ ${price}.00</p>
          <button onclick='addtocart(${i++})'>Add to cart</button>
      </div>
    `;
  })
  .join('');

function addtocart(a) {
  cart.push({ ...categories[a] });
  localStorage.setItem('cart', JSON.stringify(cart));
  added();
  displaycart();

}

function added() {
    alert("Product added to cart");
  }
function delElement(a) {
  cart.splice(a, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displaycart();

}



function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById('count').innerHTML = cart.length;
  const shopDiv = document.getElementById('shop');
  const rightBarContent = document.getElementById('right-bar-content');

  if (cart.length === 0) {
    shopDiv.innerHTML = '<h1>Your cart is empty</h1>';
    rightBarContent.innerHTML = '';
    document.getElementById('total').innerHTML = '₱ ' + 0 + '.00';
  } else {
    shopDiv.innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById('total').innerHTML = '₱ ' + total + '.00';
        return `
          <div class='box'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <div class='content'>
              <h3>${title}</h3>
              <h4>₱ ${price}.00</h4>
              <button class ='btn-area' onclick='delElement(${j++})'> Remove </button>
            </div>
          </div>
        `;
      })
      .join('');

    rightBarContent.innerHTML = cart
    .map((items) => {
      var { title, price } = items;
      return `
      <ul style="list-style-type:none">
      <li>${title}</li>
      <li>₱ ${price}.00</li>
      </ul>
      `;
    })
    .join('')
    localStorage.setItem('cart', JSON.stringify(cart));

  }
}


