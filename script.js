const btnStart = document.querySelector(".start")
const btnStop = document.querySelector(".stop")
const heading = document.querySelector(".heading")

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId

const startChangingColor = function() {
    if(!intervalId) {
        intervalId = setInterval(changeBGColor, 1000)
    }
    
    function changeBGColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null
}

btnStart.addEventListener('click', startChangingColor)
btnStop.addEventListener('click', stopChangingColor)




