import img0Link from "../images/img0.png";
import img1Link from "../images/img1.png";
import img2Link from "../images/img2.png";
import img3Link from "../images/img3.png";
import img4Link from "../images/img4.png";

//1.Выбраные эл должны отображаться в области просмотра заказа
//  1.2.При клике на эл, он будет удаляться
//2.Решить проблему с ценой
//3.При выборе эл менять картинку
//4.Ограничить выбор эл
//5.Кнопка заказать должна быть доступна, после того как во всех четирёх колонках будет выбрано хотя бы по одному эл
//6.После нажатия на кнопку заказать в консоль должен выведен обьект с информацией о заказе
//7.С помощью всплывающего окна пользователь должен быть оповещён об успешном формирование заказа

//КНОПКА
//1.Отображение в поле заказа её текста + цена
//2.Кнопка должна нажиматься один раз
//  2.1После нажатия кнопки она должна измениться
//3.При нажатии кнопки должна меняться картинка

//selected order
const selectedBaseOrder = document.getElementById("selected-base");
const selectedSauseOrder = document.getElementById("selected-sauce");
const selectedIngredient1Order = document.getElementById(
  "selected-ingredient1"
);
const selectedIngredient2Order = document.getElementById(
  "selected-ingredient2"
);
const orderPrise = document.getElementById("total-price");

const images = [img0Link, img1Link, img2Link, img3Link, img4Link];
let imageIndex = 0;

const pizzaImg = document.getElementById("img");
const finalOrderButton = document.getElementById("order-btn");
finalOrderButton.disabled = true;

let totalPrise = 0;

//base buttons
const baseBtn1 = document.getElementById("baseBtn1");
const baseBtn2 = document.getElementById("baseBtn2");
const baseBtn3 = document.getElementById("baseBtn3");
const baseBtn4 = document.getElementById("baseBtn4");

const arrBase = [baseBtn1, baseBtn2, baseBtn3, baseBtn4];

// Получаем заказ базы
function getOrderBase(btn) {
  btn.addEventListener("click", () => {
    const text = btn.innerText;
    const spanBase = document.createElement("span");

    spanBase.textContent = text + " ";
    selectedBaseOrder.append(spanBase);

    btn.style.color = "yellow";
    pizzaImg.src = images[++imageIndex];

    const baseElFromOrderList = selectedBaseOrder.childNodes[0];

    // Удаление базы из листа заказов
    baseElFromOrderList.addEventListener("click", () => {
      baseElFromOrderList.remove();

      arrBase.forEach((item) => {
        item.disabled = false;
      });
      btn.style.color = null;
      pizzaImg.src = images[--imageIndex];
      totalPrise -= parseFloat(btn.getAttribute("data-price"));
      orderPrise.innerText = totalPrise;
      finalOrderButton.disabled = true;
      
    });

    arrBase.forEach((item) => {
      item.disabled = true;
      
    });
    totalPrise += parseFloat(btn.getAttribute("data-price"));
    orderPrise.innerText = totalPrise;
    if (imageIndex == 4) {
      finalOrderButton.disabled = false;
    }
    finalOrderObject.base = selectedBaseOrder.firstChild.textContent;
  });
}

getOrderBase(baseBtn1);
getOrderBase(baseBtn2);
getOrderBase(baseBtn3);
getOrderBase(baseBtn4);

//sause buttons
const sauceBtn1 = document.getElementById("sauceBtn1");
const sauceBtn2 = document.getElementById("sauceBtn2");
const sauceBtn3 = document.getElementById("sauceBtn3");
const sauceBtn4 = document.getElementById("sauceBtn4");

const arrSause = [sauceBtn1, sauceBtn2, sauceBtn3, sauceBtn4];

function getOrderSause(btn) {
  btn.addEventListener("click", () => {
    const text = btn.innerText;
    const spanSause = document.createElement("span");

    spanSause.textContent = text + " ";
    selectedSauseOrder.append(spanSause);

    btn.style.color = "yellow";
    pizzaImg.src = images[++imageIndex];
    const sauseElFromOrderList = selectedSauseOrder.childNodes[0];
    // Удаление соуса из листа закахов
    sauseElFromOrderList.addEventListener("click", () => {
      sauseElFromOrderList.remove();
      arrSause.forEach((item) => {
        item.disabled = false;
      });
      btn.style.color = null;
      pizzaImg.src = images[--imageIndex];
      totalPrise -= parseFloat(btn.getAttribute("data-price"));
      orderPrise.innerText = totalPrise;
      finalOrderButton.disabled = true;
    });

    arrSause.forEach((item) => {
      item.disabled = true;
    });
    totalPrise += parseFloat(btn.getAttribute("data-price"));
    orderPrise.innerText = totalPrise;
    if (imageIndex == 4) {
      finalOrderButton.disabled = false;
    }
    finalOrderObject.sause = selectedSauseOrder.firstChild.textContent;
  });
}

getOrderSause(sauceBtn1);
getOrderSause(sauceBtn2);
getOrderSause(sauceBtn3);
getOrderSause(sauceBtn4);

//Ingredient1 buttons
const ing1Btn1 = document.getElementById("ing1Btn1");
const ing1Btn2 = document.getElementById("ing1Btn2");
const ing1Btn3 = document.getElementById("ing1Btn3");
const ing1Btn4 = document.getElementById("ing1Btn4");

let ing1Counter = 0;
let ing1OrderPrice = 0;

const arrIngredients1 = [ing1Btn1, ing1Btn2, ing1Btn3, ing1Btn4];

// Получение первых ингредиентов в лист заказа
function getOrderIndredient1(btn) {
  btn.addEventListener("click", () => {
    const text = btn.innerText;
    const spanIngredient1 = document.createElement("span");

    spanIngredient1.textContent = text + " ";
    selectedIngredient1Order.append(spanIngredient1);

    btn.style.color = "yellow";
    ++ing1Counter;
    console.log("ing1 counter " + ing1Counter);
    if (ing1Counter === 1) {
      pizzaImg.src = images[++imageIndex];
    }

    arrIngredients1.forEach((item) => {
      if (ing1Counter === 2) {
        item.disabled = true;
      }
    });
    ing1OrderPrice += parseFloat(btn.getAttribute("data-price"));
    console.log(ing1OrderPrice);

    totalPrise += parseFloat(btn.getAttribute("data-price"));
    orderPrise.innerText = totalPrise;
    finalOrderObject.ingredient1 = finalOrderObject.ingredient1 + " " + text;
    if (imageIndex == 4) {
      finalOrderButton.disabled = false;
    }
  });
}
console.log("ing1 " + imageIndex);
getOrderIndredient1(ing1Btn1);
getOrderIndredient1(ing1Btn2);
getOrderIndredient1(ing1Btn3);
getOrderIndredient1(ing1Btn4);

//Ingredient2 battons
const ing2Btn1 = document.getElementById("ing2Btn1");
const ing2Btn2 = document.getElementById("ing2Btn2");
const ing2Btn3 = document.getElementById("ing2Btn3");
const ing2Btn4 = document.getElementById("ing2Btn4");

let ing2Counter = 0;
let ing2OrderPrice = 0;

const arrIngredients2 = [ing2Btn1, ing2Btn2, ing2Btn3, ing2Btn4];

// Полученние вторых ингредиентов в лист заказа
function getOrderIndredient2(btn) {
  btn.addEventListener("click", () => {
    const text = btn.innerText;
    const spanIngredient2 = document.createElement("span");

    spanIngredient2.textContent = text + " ";
    selectedIngredient2Order.append(spanIngredient2);

    btn.style.color = "yellow";
    ++ing2Counter;
    if (ing2Counter === 1) {
      pizzaImg.src = images[++imageIndex];
    }

    arrIngredients2.forEach((item) => {
      if (ing2Counter === 2) {
        item.disabled = true;
      }
    });

    ing2OrderPrice += parseFloat(btn.getAttribute("data-price"));
    totalPrise += parseFloat(btn.getAttribute("data-price"));
    orderPrise.innerText = totalPrise;

    finalOrderObject.ingredient2 = finalOrderObject.ingredient2 + " " + text;

    if (imageIndex == 4) {
      finalOrderButton.disabled = false;
    }
  });
}
console.log("Ing2 " + imageIndex);
getOrderIndredient2(ing2Btn1);
getOrderIndredient2(ing2Btn2);
getOrderIndredient2(ing2Btn3);
getOrderIndredient2(ing2Btn4);

// Удаление Ingredient1
selectedIngredient1Order.addEventListener("click", () => {
  selectedIngredient1Order.innerHTML = "";
  arrIngredients1.forEach((btn) => {
    btn.style.color = "yellow";
    btn.disabled = false;
  });
  pizzaImg.src = images[--imageIndex];
  ing1Counter = 0;
  totalPrise -= ing1OrderPrice;
  ing1OrderPrice = 0;
  orderPrise.innerText = totalPrise;
  finalOrderButton.disabled = true;
  finalOrderObject.ingredient1 = "";
});

// Удаление Ingredient2
selectedIngredient2Order.addEventListener("click", () => {
  selectedIngredient2Order.innerHTML = "";
  arrIngredients2.forEach((btn) => {
    btn.style.color = null;
    btn.disabled = false;
  });
  pizzaImg.src = images[--imageIndex];
  ing2Counter = 0;
  totalPrise -= ing2OrderPrice;
  ing2OrderPrice = 0;
  orderPrise.innerText = totalPrise;
  finalOrderButton.disabled = true;
  finalOrderObject.ingredient2 = "";
});

let finalOrderObject = {
  base: null,
  ingredient1: [],
  ingredient2: [],
  sause: null,
  price: null,
};

// Финальная кнопка заказа

finalOrderButton.addEventListener("click", () => {
  finalOrderObject.price = orderPrise.textContent + "$";
  console.log(finalOrderObject);
  alert("Thank you for your order ");
  location.reload();
});
   