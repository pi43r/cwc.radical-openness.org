let logo = document.querySelectorAll(".logo img")
let info = document.querySelectorAll(".info div")
let w = window.innerWidth

let touch = is_touch_device4()
console.log('touch:', touch)

window.onresize = function() {
  w = window.innerWidth
} 

onmousemove = function (e) {
  let left = scale(e.clientX, w / 2, w, 0, 100)
  logo[0].style.left = left + "px"
  logo[1].style.right = left + "px"
  // if (!touch) {
  //   resize_infos(e.clientX)
  // }
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function is_touch_device4() {
    
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  
  var mq = function (query) {
      return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

function resize_infos(xPos){
  if(xPos < w / 4){
    info[0].style.width = '50%'
    info[1].style.transform = 'scaleX(0.75)'
    info[2].style.transform = 'scaleX(0.75)'
    info[3].style.transform = 'scaleX(0.75)'
  }
}