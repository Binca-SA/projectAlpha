
change = () => {
    //PARA CAMBIAR BACKGROUND A GRADIENT CUANDO ESTAS EN TODAS LAS SECCIONES MENOS EN HOME//
    const opacity = 'FF'

    const primary = `#FBF9F0${opacity}`
    const secundary = `conic-gradient(
                        from 224.06deg at 117.22% -11.07%, 
                        rgba(220, 235, 206, 0.88) -12.82deg, #002F66 32.42deg, #D9D4EB 313.99deg, 
                        rgba(220, 235, 206, 0.88) 347.18deg, #002F66 392.42deg)`


    
    if( document.querySelector('#home').checked ){
        document.body.style.backgroundColor = primary
        document.body.style.backgroundImage = ''
    }
    else {
        document.body.style.backgroundImage = secundary
    }

// //PARA HACER QUE LOS LABELS SE QUEDEN CHECKEADDOS CUANDO ESTÁS EN UNA SECCIÓN//

    // // Recoge los elementos con la clase .input-scroll
    let inputs = document.querySelectorAll('.input-scroll')

    // // Recorre los elementos
    inputs.forEach( (input) => {

    // // Detecta si esta checked
        if(input.checked) {

    // // Busca el label al que hace referencia el id del input
            let label = document.querySelector('#'+input.id+'-label')

    // // Añade la clase menu__label-checked al elemento
            label.classList.add('menu__label-checked')
        }
        else {
    // // Busca el label al que hace referencia el id del input
            let label = document.querySelector('#'+input.id+'-label')

    // // Elimina la clase menu__label-checked al elemento
            label.classList.remove('menu__label-checked')
        }
    })
};

//PARA CREAR BOTÓN DE VER MÁS Y VER MENOS EN SECCIÓN ABOUT//
    
function addClass(idTextoOculto, svgClass) {
    const texto = document.getElementById(idTextoOculto);
    var iconoSvg = document.querySelector("."+svgClass);
    var identifier = iconoSvg.id;

    if (identifier == "plus-icon") {
        iconoSvg.innerHTML = '<path d="M0 2.5L17 2.5" stroke="#002F66" stroke-width="4"/>'
        iconoSvg.id = "minus-icon"
        texto.style.display = "block"

    } else if (identifier== 'minus-icon') {
        iconoSvg.innerHTML = '<path d="M14.8101 24V6" stroke="#115099" stroke-width="3"/> <path d="M5.00003 15L24.6206 15" stroke="#115099" stroke-width="3"/>'
        iconoSvg.id = "plus-icon"
        texto.style.display = "none"
    }

};
    
