
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
}

//PARA CREAR BOTÓN DE VER MÁS Y VER MENOS EN SECCIÓN ABOUT//
// function mostrarOcultar(id, iconId, idMenos){
//     var elemento = document.getElementById(id);
//     // var icon = document.getElementById(iconId);
//     // var menosIcon = document.getElementById(idMenos);

//     if(!elemento) {
//     return true;
//     }
//     if (elemento.style.display == "none") {
//     elemento.style.display = "block";
//     // icon.style.display = "none";
//     // menosIcon.style.display = "block";

//     } else {
//     elemento.style.display = "none";
//     // icon.style.display = "block";
//     // menosIcon.style.display = "none";
//     };
//     return true;
//     };


//     <h1 class="elemento" onclick="addClass()">Click me</h1>
// <button class="desplegar">+</button>

// function mostrarOcultar() {
//   const elemento = document.querySelector('.texto-oculto');
//   elemento.classList.toggle('active');
  
//   document.querySelector('.desplegar').innerHTML = <svg width="17" height="5" viewBox="0 0 17 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 2.5L17 2.5" stroke="#002F66" stroke-width="4"/>
//   </svg>;
// }
