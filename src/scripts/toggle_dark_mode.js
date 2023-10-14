let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.toggle-dark-mode')

/* Função para ativar e desativar o dark mode */ 
const ativarDarkMode = () => {
    // Adiciona a classe darkMode no body
    document.body.classList.add('darkMode')

    document.querySelector('.img-toggle').setAttribute('alt', 'Light mode')
    document.querySelector('.img-toggle').setAttribute('title', 'Ir para light mode')
    

    //Diz para o localStorage que o darkMode está ativado
    localStorage.setItem('darkMode', 'ativado');
}

const desativarDarkMode = () => {
    // Adiciona a classe darkMode no body
    document.body.classList.remove('darkMode')
    document.querySelector('.img-toggle').setAttribute('alt', 'Dark mode')
    document.querySelector('.img-toggle').setAttribute('title', 'Ir para dark mode')


    //Diz para o localStorage que o darkMode está ativado
    localStorage.setItem('darkMode', null);
}

if(darkMode === 'ativado'){
    ativarDarkMode();
    darkMode = localStorage.getItem('darkMode')
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    
    if(darkMode !== 'ativado'){
        ativarDarkMode();
    } 
    else{
        desativarDarkMode();
    }
})