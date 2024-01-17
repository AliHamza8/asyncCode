const btnStart = document.querySelector(".start")
const btnStop = document.querySelector(".stop")
const heading = document.querySelector(".heading")

const starting = function() {
    // heading.textContent = "Ali Hamza is a Billionair"
    console.log("Ali Hamza is a Billionair...")
}
// let stopped = setInterval(starting, 3000)

let stopped = 0

btnStart.addEventListener('click', function() {
    stopped = setInterval(starting, 3000)
})

btnStop.addEventListener('click',function() {
    clearInterval(stopped)
    console.log("Stopped")
})