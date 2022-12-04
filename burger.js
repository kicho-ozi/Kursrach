const hamb = document.querySelector("#hamb");
const popupBurger = document.querySelector("#popupBurger");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) 
{
    e.preventDefault();
    popupBurger.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");

    renderPopup();
  }
  function renderPopup() 
  {
    popupBurger.appendChild(menu);
  }
