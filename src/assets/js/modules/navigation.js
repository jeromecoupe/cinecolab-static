const navTriggers = document.querySelectorAll(".js-menutrigger");
const body = document.querySelector("body");
const mobileMenu = document.querySelector(".js-mobilemenu");

function init() {
  navTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      mobileMenu.classList.toggle("is-active");
      body.classList.toggle("has-menu");
    });
  });
}

export { init };
