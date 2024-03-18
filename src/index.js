
import img0Link from '../images/img0.png';
import img1Link from '../images/img1.png';
import img2Link from '../images/img2.png';
import img3Link from '../images/img3.png';
import img4Link from '../images/img4.png';

//1.Выбраные эл должны отображаться в области просмотра заказа +
//  1.2.При клике на эл, он будет удаляться 
//  1.3.При выборе эл менять картинку +
//  1.4.Ограничить выбор эл +
//2.Решить проблему с ценой
//3.Кнопка заказать должна быть доступна, после того как во всех четирёх колонках будет выбрано хотя бы по одному эл
//4.После нажатия на кнопку заказать в консоль должен выведен обьект с информацией о заказе
//5.С помощью всплывающего окна пользователь должен быть оповещён об успешном формирование заказа


//КНОПКА +-
//1.Отображение в поле заказа её текста + цена 
//2.Кнопка должна нажиматься один раз 
//  2.1После нажатия кнопки она должна измениться
//3.При нажатии кнопки должна меняться картинка


//selected order
const selectedBaseOrder = document.getElementById('selected-base');
const selectedSauseOrder = document.getElementById('selected-sauce');
const selectedIngredient1Order = document.getElementById('selected-ingredient1');
const selectedIngredient2Order = document.getElementById('selected-ingredient2');

const images = [img0Link, img1Link, img2Link, img3Link, img4Link];
let imageIndex = 0;

const pizzaImg = document.getElementById("img");
const button = document.getElementById("order-btn");

//base buttons
const baseBtn1 = document.getElementById('baseBtn1');
const baseBtn2 = document.getElementById('baseBtn2');
const baseBtn3 = document.getElementById('baseBtn3');
const baseBtn4 = document.getElementById('baseBtn4');

const arrBase = [baseBtn1, baseBtn2, baseBtn3, baseBtn4];

function getOrderBase(btn) {
    btn.addEventListener('click', () => {
        const text = btn.innerText;
        const spanBase = document.createElement('span');

        spanBase.textContent = text + " ";
        selectedBaseOrder.append(spanBase);

        btn.style.color = 'blue';
        pizzaImg.src = images[++imageIndex];

        const baseElFromOrderList = selectedBaseOrder.childNodes[0];
        baseElFromOrderList.addEventListener('click', () => {
            baseElFromOrderList.remove();
            arrBase.forEach((item) => {
                item.disabled = false;
            })
            btn.style.color = 'black';
            pizzaImg.src = images[--imageIndex];
        })

        arrBase.forEach((item) => {
            item.disabled = true;
        })
    })
}

getOrderBase(baseBtn1);
getOrderBase(baseBtn2);
getOrderBase(baseBtn3);
getOrderBase(baseBtn4);

//sause buttons
const sauceBtn1 = document.getElementById('sauceBtn1');
const sauceBtn2 = document.getElementById('sauceBtn2');
const sauceBtn3 = document.getElementById('sauceBtn3');
const sauceBtn4 = document.getElementById('sauceBtn4');

const arrSause = [sauceBtn1, sauceBtn2, sauceBtn3, sauceBtn4];

function getOrderSause(btn) {
    btn.addEventListener('click', () => {
        const text = btn.innerText;
        const spanSause = document.createElement('span');

        spanSause.textContent = text + " ";
        selectedSauseOrder.append(spanSause);

        btn.style.color = 'blue';
        pizzaImg.src = images[++imageIndex];

        const sauseElFromOrderList = selectedSauseOrder.childNodes[0];
        sauseElFromOrderList.addEventListener('click', () => {
            sauseElFromOrderList.remove();
            arrSause.forEach((item) => {
                item.disabled = false;
            })
            btn.style.color = 'black';
            pizzaImg.src = images[--imageIndex];
        })

        arrSause.forEach((item) => {
            item.disabled = true;
        })
    })
}


getOrderSause(sauceBtn1);
getOrderSause(sauceBtn2);
getOrderSause(sauceBtn3);
getOrderSause(sauceBtn4);


//Ingredient1 buttons
const ing1Btn1 = document.getElementById('ing1Btn1');
const ing1Btn2 = document.getElementById('ing1Btn2');
const ing1Btn3 = document.getElementById('ing1Btn3');
const ing1Btn4 = document.getElementById('ing1Btn4');

let ing1Counter = 0;

const arrIngredients1 = [ing1Btn1, ing1Btn2, ing1Btn3, ing1Btn4];

function getOrderIndredient1(btn) {
    btn.addEventListener('click', () => {
        const text = btn.innerText;
        const spanIngredient1 = document.createElement('span');

        spanIngredient1.textContent = text + " ";
        selectedIngredient1Order.append(spanIngredient1);

        btn.style.color = 'blue';
        ++ing1Counter;
        if (ing1Counter == 1) {
            pizzaImg.src = images[++imageIndex];
        }


        //Попробовать через toggle
        const Ingredients1ElFromOrderList = selectedIngredient1Order.firstChild;
        Ingredients1ElFromOrderList.addEventListener('click', () =>{
            Ingredients1ElFromOrderList.remove();
            Ingredients1ElFromOrderList1.remove();
            btn.style.color = 'black';
            pizzaImg.src = images[imageIndex--];
            if (ing1Counter == 1) {
                pizzaImg.src = images[++imageIndex];
            }
            ing1Counter--;
            arrIngredients1.forEach((item) => {
            
                item.disabled = false;
            
        })
            
        })



        const Ingredients1ElFromOrderList1 = selectedIngredient1Order.lastChild;
        Ingredients1ElFromOrderList1.addEventListener("click", () => {
          Ingredients1ElFromOrderList1.remove();
          Ingredients1ElFromOrderList.remove();
        });




        arrIngredients1.forEach((item) => {
            if (ing1Counter === 2) {
                item.disabled = true;
            }
        })
    })
}

getOrderIndredient1(ing1Btn1);
getOrderIndredient1(ing1Btn2);
getOrderIndredient1(ing1Btn3);
getOrderIndredient1(ing1Btn4);


//Ingredient2 order 
const ing2Btn1 = document.getElementById('ing2Btn1');
const ing2Btn2 = document.getElementById('ing2Btn2');
const ing2Btn3 = document.getElementById('ing2Btn3');
const ing2Btn4 = document.getElementById('ing2Btn4');

let ing2Counter = 0;

const arrIngredients2 = [ing2Btn1, ing2Btn2, ing2Btn3, ing2Btn4];

function getOrderIndredient2(btn) {
    btn.addEventListener('click', () => {
        const text = btn.innerText;
        const spanIngredient2 = document.createElement('span');

        spanIngredient2.textContent = text + " ";
        selectedIngredient2Order.append(spanIngredient2);

        btn.style.color = 'blue';
        ++ing2Counter;
        if (ing2Counter == 1) {
            pizzaImg.src = images[++imageIndex];
        }

        arrIngredients2.forEach((item) => {
            if (ing2Counter === 2) {
                item.disabled = true;
            }
        })
    })
}

getOrderIndredient2(ing2Btn1);
getOrderIndredient2(ing2Btn2);
getOrderIndredient2(ing2Btn3);
getOrderIndredient2(ing2Btn4);


//Удаление из листа заказов

// Удаление Ingredient1
selectedIngredient1Order.addEventListener("click", () => {
    selectedIngredient1Order.innerHTML = '';
    arrIngredients1.forEach((btn) => {
      btn.style.color = "black"
    });
    pizzaImg.src = images[--imageIndex];
    arrIngredients1.forEach((item) => {
      item.disabled = false;   
    });
    ing1Counter = 0;
    console.log("Ing1 counter after remove "+ing1Counter);
  });
  
  
  // Удаление Ingredient2
  selectedIngredient2Order.addEventListener("click", () => {
    selectedIngredient2Order.innerHTML = '';
    arrIngredients2.forEach((btn) => {
      btn.style.color = "black"
    });
    pizzaImg.src = images[--imageIndex];
    arrIngredients2.forEach((item) => {
      item.disabled = false;   
    });
    ing2Counter = 0;
    console.log("Ing2 counter after remove "+ing1Counter);
  });