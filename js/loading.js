loadText = document.querySelector('loading-text')
bg = document.querySelector('.bg')

load = 0

loadText.innerText = '${load}%'
loadText.style.opacity = 1
bg.style.filter = "blur(10px)"
