var letterLocation = document.querySelectorAll('.letter')[0];
var keyCodeLocation = document.querySelectorAll('.keycode')[0];

window.addEventListener('keydown',function(e){
  letterLocation.textContent = e.keyCode;
  keyCodeLocation.textContent = e.key.toUpperCase();
})
