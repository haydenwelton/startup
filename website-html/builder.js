const burger = document.getElementById("burger");
const list = document.getElementById("burger-builder-ul");
const fillings = ["bottom-bun", "patty", "cheese", "lettuce", "ketchup", "mustard", "mayo", "tomato", "onion", "top-bun"];

const audio = new Audio("add.mp3");
const buttons = document.querySelectorAll("button");




const addFilling = (type) => {
    const filling = document.createElement('div');
    filling.classList.add(type);
    burger.insertBefore(filling, burger.firstChild);
    addFillingList(type);
};

const addFillingList = (type) => {
    const fillingItem = document.createElement('li');
    fillingItem.textContent = type;
    list.insertBefore(fillingItem, list.firstChild);
  
};

const generateButtons = () => {
  const nav = document.getElementById("buttons");
  const buttonsWrapper = document.createElement('div');

  fillings.forEach(filling => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = filling;
    button.onclick = function() { 
      addFilling(filling);
      addItem(filling);
    };
    button.addEventListener("click", () => {
    audio.play();
  });
    buttonsWrapper.appendChild(button);
  });

  nav.appendChild(buttonsWrapper);
  burger.classList.add("margin-top");
};

const reset = () => {
  burger.innerHTML = "";
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
} 

const start = () => {
    reset();
  generateButtons();
  btn.innerText = "Start Again";
  btn.onclick = reset;
};

const deleter = (btn) => {
  reset();
  btn.onclick = reset;
};

