const burger = document.getElementById("burger");
const list = document.getElementById("burger-builder-ul");
const fillings = ["bottom-bun", "patty", "cheese", "lettuce", "pickle", "ketchup", "mustard", "mayo", "tomato", "onion", "top-bun"];



const addFilling = (type) => {
    const filling = document.createElement('div');
    filling.classList.add(type);
    burger.insertBefore(filling, burger.firstChild);
    addFillingList(type);
};

const addFillingList = (type) => {
  var ingredientName = type.value;
  const filling = document.creatElement('li'); filling.appendChild(document.createTextNode(ingredientName));
  list.appendChild(filling);
};

const generateButtons = () => {
  const nav = document.getElementById("buttons");
  const buttonsWrapper = document.createElement('div');

  fillings.forEach(filling => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = filling;
    button.onclick = function() { addFilling(filling); };
    buttonsWrapper.appendChild(button);
  });

  nav.appendChild(buttonsWrapper);
  burger.classList.add("margin-top");
};

const reset = () => burger.innerHTML = "";

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
