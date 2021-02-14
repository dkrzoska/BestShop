const formToListen = document.querySelector('.calc__form');
const formProducts = formToListen.querySelector('#products');
const formOrders = formToListen.querySelector('#orders');
const formSelect = formToListen.querySelector('.calc__select');
const formAccounting = formToListen.querySelector('#accounting');
const formTerminal = formToListen.querySelector('#terminal');

const calcSummary = document.querySelector('.calc__summary');
const calcProducts = calcSummary.querySelector('[data-id="products"]');
const calcOrders = calcSummary.querySelector('[data-id="orders"]');
const calcPackage = calcSummary.querySelector('[data-id="package"]');
const calcAccounting = calcSummary.querySelector('[data-id="accounting"]');
const calcTerminal = calcSummary.querySelector('[data-id="terminal"]');
const calcTotal = calcSummary.querySelector('#total-price');

// console.dir(formToListen);

let productprice = 0;
let monthprice = 0;
let packageprice = 0;
let accountingprice = 0;
let terminalprice = 0;
let sum = 0;

// calcTotal.classList.add('open');
console.dir(formToListen);
console.dir(calcSummary.querySelectorAll('li'));
// console.log(calcSummary.querySelector('ul').children[0].classList[1]);

formSelect.addEventListener('click', function(event) {
    formSelect.classList.toggle('open');
});

formSelect.lastElementChild.addEventListener('click', function(event) {
    formSelect.firstElementChild.innerText = event.target.innerText;
    calcPackage.classList.add('open');
    calcPackage.children[1].innerText = event.target.innerText;
    if (event.target.innerText === 'Basic') {
        packageprice = 0;
        calcPackage.children[2].innerText = '$' + packageprice;
    }
    else if (event.target.innerText === 'Professional'){
        packageprice = 25;
        calcPackage.children[2].innerText = '$' + packageprice;
    }
    else if (event.target.innerText === 'Premium'){
        packageprice = 60;
        calcPackage.children[2].innerText = '$' + packageprice;
    }
    calcsummary();
    calcTotal.classList.add('open');
});

formProducts.addEventListener('change', function(event) {
    calcProducts.classList.add('open');
    calcProducts.children[1].innerText = this.value + ' * $0.5';
    productprice = this.value * 0.5;
    calcProducts.children[2].innerText = '$' + productprice;
    calcsummary();
});

formOrders.addEventListener('change', function(event) {
    calcOrders.classList.add('open');
    calcOrders.children[1].innerText = this.value + ' * $0.5';
    monthprice = this.value * 0.5;
    calcOrders.children[2].innerText = '$' + monthprice;
    calcsummary();
});

formAccounting.addEventListener('change', function(event) {
    calcAccounting.classList.toggle('open');
    if (calcAccounting.classList[1] === 'open') {
        accountingprice = 35;
    }
    else {
        accountingprice = 0;
    }
    calcsummary();
});

formTerminal.addEventListener('change', function(event) {
    calcTerminal.classList.toggle('open');
    if (calcTerminal.classList[1] === 'open') {
        terminalprice = 5;
    }
    else {
        terminalprice = 0;
    }
    calcsummary();
});

function calcsummary () {
    sum = productprice + monthprice + packageprice + accountingprice + terminalprice;
    calcTotal.lastElementChild.innerText = '$' + sum;
    // console.log(calcTotal.lastElementChild.innerText);
};

formToListen.addEventListener('change', function(event) {
    for (let i = 0; i < calcSummary.querySelector('ul').children.length; i++) {
        // console.log(calcSummary.querySelector('ul').children[i].classList[1]);
        if (calcSummary.querySelector('ul').children[i].classList[1] === 'open') {
            calcTotal.classList.add('open');
            console.log('Dodanie');
            break;
        }
        else {
            console.log('Usunięcie');
            calcTotal.classList.remove('open');
        };
    }
});

// console.log(calcProducts);