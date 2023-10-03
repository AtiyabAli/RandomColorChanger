const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {

        color += hex[Math.floor(Math.random() * 16)]
    }
    return color


}
let interval

const startChangingColor = () => {
    
    
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
    interval = setInterval(changeBgColor, 1000)

}

const stopChangingColor = () => {
    clearInterval(interval)

}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)