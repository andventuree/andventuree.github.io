const elements = document.getElementsByClassName("navigation__link");
const navToggle = document.getElementById('navi-toggle')

Array.prototype.slice.call(elements)
  .forEach(function (el) {
    el.addEventListener('click', function (e) {
      navToggle.checked = false
    })
  })