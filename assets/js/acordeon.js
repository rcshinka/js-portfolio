const acordeonTrigers = document.querySelectorAll('.acordeon .triger')

acordeonTrigers.forEach((triger) => {

    triger.addEventListener('click', (e) => {
        const acordeon = triger.parentElement
        const isOpen = acordeon.classList.contains('open')
 
        if (isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})