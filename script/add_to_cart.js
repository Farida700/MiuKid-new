// Добавление товара в корзину
let class_name = document.getElementsByClassName("add_cart");

let myFunction = function (evt) {
  evt.preventDefault();

  let title =
    this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
  let price =
    this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
  let image =
    this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");

  let creat_li = document.createElement("li");
  creat_li.classList.add("bag__item");

  creat_li.innerHTML =
    '<div class="bag__img">\
										<a href="#">\
											<img src="' +
    image[0].src +
    '" alt="">\
										</a>\
									</div>\
									<div class="bag__info">\
										<p class="info__title"><a href="#">' +
    title[0].innerText +
    '</a></p>\
										<div class="info__price">\
											<span class="currency">$</span>\
                                			<span class="oprice">' +
    price[0].innerText +
    '</span>\
										</div>\
										<div class="trash">\
											<a href="#"><i class="far fa-trash-alt"></i></a>\
										</div>\
									</div>';

  let block_cart = document.querySelector(".bag.shopcard__dropdown ul");
  block_cart.appendChild(creat_li);

  // Удаление товара
  delete_product();

  //Получение суммы денег в корзине
  totalPrice();

  //Получение суммы товаров в корзине
  total_amount();
};

for (var i = 0; i < class_name.length; i++) {
  class_name[i].addEventListener("click", myFunction, false);
  // addEventListener - добовляем событие клика
  // ('click', myFunction, false);
  //  тип события
  //  Что должно выполнятся
  // Обработчик
}

function delete_product() {
  let click_trash = document.querySelectorAll(".trash");

  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener("click", del_func, false);
  }

  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();

    totalPrice();
    total_amount();
  }
}

//Сложение суммы товаров
function totalPrice() {
  let countPrice = document.querySelectorAll(".info__price .oprice");

  let total_price = 0;

  for (var i = 0; i < countPrice.length; i++) {
    total_price = total_price + +countPrice[i].innerHTML;
  }

  document.getElementsByClassName(
    "total_cart"
  )[0].innerHTML = `$ ${total_price}`;
  document.querySelectorAll(
    ".shopcard__total span"
  )[0].innerHTML = `$ ${total_price}`;
}

//Сумма количества товаров
function total_amount() {
  let totalAmount = document.getElementsByClassName("bag__item").length;
  document.getElementsByClassName("cart_count")[0].innerHTML = totalAmount;
}

const tabs = {
  list_tabs: ["Лидеры продаж", "Новинки", "Распродажа"],
};

let creat_ul = document.createElement("ul");

tabs.list_tabs.forEach((item, i) => {
  creat_ul.innerHTML += `<li>${item}<li>`;
});

document.querySelector(".insert_listing").innerHTML += creat_ul.outerHTML;


// работа с классами

class cardProduct {
  constructor(tooltips, tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {
    this.tooltips = tooltips;
    this.tooltipsClass = tooltipsClass;
    this.img = img;
    this.title = title;
    this.originPrice = originPrice;
    this.oldPrice = oldPrice;
    this.innerBlock = document.querySelector(innerBlock);
    this.valuta = 85;
    this.originPrice = this.convertToUSD(this.originPrice);
    this.oldPrice = this.convertToUSD(this.oldPrice);
  }


  convertToUSD(price) {
    const result = price / this.valuta;
    return result.toFixed(1);
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("list__item");
    div.innerHTML = `
                    <div class = "item__img">
                      <div class = "tooltips ${this.tooltipsClass}">
                        <span >${this.tooltips}</span> 
                      </div >
                        <img src =${this.img} alt = ""/>
                          <div class = "arrows">
                            <span><i class = "fas fa-arrows-alt"> </i> Quick view</span >
                          </div>  
                    </div> 
                      <div class = "item__title">
                        <a href = "?search=#" class = "ttl" >${this.title}</a> 
                          <div class = "stars">
                          <i class = "fas fa-star"> </i>  
                          <i class = "fas fa-star"> </i>
                          <i class = "fas fa-star"> </i>
                          <i class = "fas fa-star"> </i>  
                          <i class = "fas fa-star"> </i> 
                          <span>6 Review(s)</span> 
                          </div>

                        <div class = "price">
                          <span class="currency">$</span>
                          <span class="oprice">${this.originPrice}</span>
                          <del> $ ${this.oldPrice}</del> 
                        </div > 
                      </div>

                    <div class = "item__hide">
                      <div class = "item__icon">
                        <a class = "icon__hidden add_cart" href = "#"> 
                        <i class = "fas fa-cart-arrow-down"></i></a>
                      </div>

                      <div class = "item__icon" >
                        <a class = "icon__hidden" href = "#">
                        <i class = "fas fa-balance-scale"></i></a> 
                      </div>

                      <div class = "item__icon">
                      <a class = "icon__hidden" href = "#">
                      <i class = "fas fa-heart"></i></a> 
                      </div>  
                    `;

    this.innerBlock.append(div);
  };

};

new cardProduct(
  'New',
  'green',
  'img/content/img61.jpg',
  'Курточка на мальчика',
  2800,
  3500,
  '.main__list'
).render();

new cardProduct(
  '-25%',
  'orange',
  'img/content/img50.jpg',
  'Кофта на мальчика',
  1720,
  1900,
  '.main__list'
).render();

new cardProduct(
  'Sale',
  'green',
  'img/content/img51.jpg',
  'Небесное платье',
  1380,
  1580,
  '.main__list'
).render();

new cardProduct(
  'New',
  'orange',
  'img/content/img63.jpg',
  'Рюкзак',
  1420,
  1800,
  '.main__list'
).render();

new cardProduct(
  'New block',
  'orange',
  'img/content/img64.jpg',
  'Новинка Платье',
  1230,
  2500,
  '.main__list'
).render();

// (function () {
//   'use strict';

//   const inputSom = document.querySelector("#som"),
//     inputUsd = document.querySelector("#usd");

//   inputSom.addEventListener('input', () => {

//     const request = new XMLHttpRequest();

//     request.open("GET", "current.json");
//     // request.open(method(GET/POST), url, asy, login, passw );
//     request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//     request.send();


//     request.addEventListener('load', () => {

//       if (request.status === 200) {
//         // console.log(request.response);
//         // console.log(JSON.parse(request.response));

//         const currency = JSON.parse(request.response);

//         const result = inputSom.value / currency.current.usd;

//         inputUsd.value = (result).toFixed(2);

//       } else {
//         inputUsd.value = "Что-то пошло не так";
//       }

//     });
//     // status
//     // statusText
//     // respose
//     // readyState
//   });

//  const search = document.querySelector("[name='search]"),
//    btnSearch = document.querySelector(".search button"),
//    search_res = document.querySelector(".search_result");

//  btnSearch.addEventListener('click', (e) => {
//    e.preventDefault();

//    fetch('../search.php', {
//        method: "POST",
//        body: JSON.stringify({query: search.value}),
//        headers: {'Content-type': 'application/json'}
//      })
//      .then(response => response.json())
//      .then(json => console.log(json))

//  });

// const request_ = new XMLHttpRequest();

// request_.open("GET", "search.php?query="+search.value);

// search_res.innerHTML = "Данные отправлены";

// request_.setRequestHeader("Content-type", "application/json; charset=UTF-8");

// request_.send();

// request_.addEventListener('load', () => {

// 	if(request_.status === 200){

// 		const data = JSON.parse(request_.response);

// 		let creat_ul = document.createElement('ul');

// 		for (let i = 0; i < data.length; i++) {

// 			creat_ul.innerHTML += `<li>
// 									<a href="${data[i].href}">${data[i].text}</a>
// 									</li>`;
// 		}
// 		search_res.innerHTML = creat_ul.outerHTML;
// 	} else {
// 		console.log("error");
// 	}

// });

//  });

// }());