const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=> {
    panel.addEventListener('click', ()=> {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// funcionalidad del navbar
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
}) 