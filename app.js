const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

var min = document.getElementById("minutes")
var sec = document.getElementById("seconds")

var startTime = null

start.addEventListener('click', function () {
    function startInterval() {
        startTime = setInterval(function () {
            timer()
        }, 1000)
    }
    startInterval()
})

stop.addEventListener('click', function () {
    clearInterval(startTime)
})

reset.addEventListener('click', function () {
    min.value = 0
    sec.value = 0
    clearInterval(startTime)
})


function timer() {
    if (min.value == 0 && sec.value == 0) {
        min.value = 0
        sec.value = 0
    } else if (sec.value != 0) {
        sec.value--
    } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59
        min.value--
    }
    return
}