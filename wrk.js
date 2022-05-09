const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

//Listen to submit button when click by usera
/*document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    // Get input Values from the froms
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;
    saveContactInfo(name, email, message);
    document.querySelector('.contact-form').reset();
    //calling the down function when the message is click
    sendEmail(name, email, message);
}
// function to send Email
function sendEmail(name, email, message) {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'mozaic138@gmail.com',
        Password: 'axzzdsaurmqggoav',
        To: 'mozaic138@gmail.com',
        From: 'mozaic138@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then(message => alert('mail sent successfully'));
}*/

// CODE FOR ARRAY
/*
const data = [{
        id: 0,
        img: 'images/tshirt1.jpg',
        name: 'round neck shirt1',
        price: 180000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },

    {
        id: 1,
        img: 'images/tshirt2.jpg',
        name: 'round neck shirt2',
        price: 20000,
        quantity: 'cart-quantity',

        itemInCart: false,
    },

    {
        id: 2,
        img: 'images/tshirt3.jpg',
        name: 'round neck shirt3',
        price: 250000,
        quantity: 'cart-quantity',

        itemInCart: false,
    },
    {
        id: 3,
        img: 'images/tshirt4.jpg',
        name: 'round neck shirt4',
        price: 260000,

        quantity: 'cart-quantity',

        itemInCart: false,
    },
    {
        id: 4,
        img: 'images/longslev1.jpg',
        name: 'logslevels Shirt',
        price: 50000,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 5,
        img: 'images/longslev2.jpg',
        name: 'black Longseleves Shirt',
        price: 60000,

        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 6,
        img: 'images/womencloth.jpg',
        name: 'Women gown',
        price: 500000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },
    {
        id: 7,
        img: 'images/offshoulder.jpg',
        name: 'Women off shoulder cloth',
        price: 39000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },
    {
        id: 8,
        img: 'images/longslev4.jpg',
        name: 'Longseleves men',
        price: 70000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },
    {
        id: 9,
        img: 'images/longslev5.jpg',
        name: 'Causul Wears',
        price: 120000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },
    {
        id: 10,
        img: 'images/vestidos.jpg',
        name: 'Vestidos',
        price: 780000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },

    {
        id: 11,
        img: 'images/womeshoe3.jpg',
        name: 'shoes1',
        price: 560000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },
    {
        id: 12,
        img: 'images/longslev1.jpg',
        name: 'zuzu wears',
        price: 70000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },
    {
        id: 13,
        img: 'images/longslev2.jpg',
        name: 'Black tutu neck',
        price: 60000,
        quantity: 'cart-quantity',
        itemInCart: false,
    },
    {
        id: 14,
        img: 'images/womencloth.jpg',
        name: 'armless Gown',
        price: 70000,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 15,
        img: 'images/offshoulder.jpg',
        name: 'red-black Gown ',
        price: 560000,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
];
let cartList = [];
let sproduct = document.getElementsByClassName('pro');
let ime = document.getElementsByClassName('ime');
let detailstitle = document.getElementById('details-title');
let detailprice = document.getElementById('details-price');
let cartquantity = document.getElementById('cart-quantity');
let prodetails = document.getElementById('prodetails');
let back = document.getElementById('back');
let cart = document.getElementById('cart');
back.addEventListener('click', refreshPage);

//function refreshPage() {
//  ime.style.display = 'none';
//}*/