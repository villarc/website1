loadText = document.querySelector('loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring,30)


function blurring() {
    load++

    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = '${load}%'
    loadText.style.opacity = 1
    bg.style.filter = "blur(10px)"
}
