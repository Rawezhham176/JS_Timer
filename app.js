var timer = false

function satartTimer() {
    if (!timer) {
        let currentTime = new Date().getTime()
        let startTime = 1000 * 60 * 5
        let endTime = currentTime + startTime

        setInterval(function () {
            let timeLeft = endTime - new Date().getTime()

            if (timeLeft > 0) {
                let minutes = timeLeft / (1000 * 60)
                minutes = Math.floor(minutes)
                let seconds = (timeLeft / 1000) % 60
                seconds = Math.round(seconds)
                seconds = ("0" + seconds).slice(-2)
                let text = '0' + minutes + ":" + seconds
                document.getElementById("timer_timer").innerHTML = text
            } else {
                document.getElementById("timer_timer").innerHTML = "00:00"
            }

        }, 1000)
        timer = true
    }
}

function stopTimer() {
    timer = false
    document.getElementById("timer_timer").innerHTML = "05:00"
}