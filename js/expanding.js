panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener("click', () => {
        removeActiveClasses()
        panel.ClassList.add('active')
    })
})



function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}