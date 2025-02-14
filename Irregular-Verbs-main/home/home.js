window.addEventListener('load', () => {
    const h4 = document.querySelector('h4');
    h4.classList.add('show');
  });
  

  window.addEventListener('load', () => {
    const button = document.querySelector('.home a');
    button.classList.add('show'); /* Add the 'show' class to trigger the transition */
});


const menu_resp = document.querySelector('.menu-resp');
const check_box = document.querySelector('#menu-check');

check_box.addEventListener("change" , function() {
  if (this.checked) {
    menu_resp.classList.add("menu-resp-active");
  } else {
    menu_resp.classList.remove("menu-resp-active")
  }
});



document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".menu-resp").classList.add("active");
});



