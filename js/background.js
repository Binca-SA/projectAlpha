
change = () => {
    const opacity = 'FF'

    const primary = `#FBF9F0${opacity}`
    const secundary = `conic-gradient(
                        from 224.06deg at 117.22% -11.07%, 
                        rgba(220, 235, 206, 0.88) -12.82deg, #002F66 32.42deg, #D9D4EB 313.99deg, 
                        rgba(220, 235, 206, 0.88) 347.18deg, #002F66 392.42deg)`

    // document.querySelector('#home').checked
    // ? 
    // () => {
    //     document.body.style.backgroundColor = primary
    //     document.body.style.backgroundImage = ''
    // }
    // :document.body.style.backgroundImage = secundary

    
    if( document.querySelector('#home').checked ){
        document.body.style.backgroundColor = primary
        document.body.style.backgroundImage = ''
    }
    else {
        document.body.style.backgroundImage = secundary
    }
}
