const botao = document.querySelector('.btn-mobile')

const menu = document.querySelector('.menu')
const menu_mobile = document.querySelector('.menu-mobile')
const exitMenu_mobile = document.querySelector('.sairMenu')

const ativarMenu = () => {
    menu_mobile.classList.remove('none')
    menu.classList.add('none')
}

const desativarMenu = () => {
    menu_mobile.classList.add('none')
    menu.classList.remove('none')
}

botao.addEventListener('click', () => {
    if(menu_mobile.classList.contains('none')){
        ativarMenu()
    }
    else{
        desativarMenu()
    }
})

menu_mobile.addEventListener('click', () => {
    if(menu_mobile.classList.contains('none')){
        ativarMenu()
    }
    else{
        desativarMenu()
    }
})

exitMenu_mobile.addEventListener('click', desativarMenu())