ball = document.getElementById('bouncyball')
radius = 77

ball.style.width = radius + 'px'
ball.style.height = radius + 'px'

setInterval(function(){
  randomX = Math.random() * window.innerWidth - radius
  randomY = Math.random() * window.innerHeight - radius
  ball.style.left = randomX + 'px'
  ball.style.top = randomY + 'px'

}, 1000) //bounce every milliseconds
