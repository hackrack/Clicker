
document.addEventListener("click", function(event) {
  var position = event.screenX;
  if (position > 512) {
    document.body.style.backgroundColor = "#66DDAA";
  } else {
    document.body.style.backgroundColor = "#ffdab9";
  }
})
