window.onload = window.onresize = function () {
  var windowW = document.body.clientWidth
  var htmlPx = windowW / 750 * 100;
  var htmlPx2 = windowW /320 * 10;
  document.getElementsByTagName('html')[0].style.fontSize = htmlPx + 'px'
}