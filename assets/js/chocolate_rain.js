console.log("Chocolate Rain activated")
let chocolateRainWrapper = document.createElement('div')
chocolateRainWrapper.classList.add('chokolate-rain-wrapper')
chocolateRainWrapper.id = "chokolate-rain-by-csomor"

let chocolateRainVideoController = document.createElement('div')
let chocolateRainVideo = document.createElement('iframe')
chocolateRainVideo.src = "https://www.youtube.com/embed/EwTZ2xpQwpA?autoplay=1&loop=1"
chocolateRainVideo.allow = "autoplay"

chocolateRainVideoController.classList.add('music-controller')
chocolateRainVideoController.id = "chokolate-rain-music-controller-by-csomor"
chocolateRainVideoController.appendChild(chocolateRainVideo)
for(let i=0; i<100; i++){
  let rainDrop = document.createElement('div')
  rainDrop.classList.add('rain')
  chocolateRainWrapper.appendChild(rainDrop)
}

window.addEventListener("DOMContentLoaded",()=>{
  document.body.appendChild(chocolateRainWrapper)
  document.body.appendChild(chocolateRainVideoController)
})

