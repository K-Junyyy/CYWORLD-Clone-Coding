setTimeout(function () {
    console.log("기능이 실행!!!")
}, 2000)
// 2
setInterval(function () {
    console.log("안녕하세요!!")
}, 1000)
// 3

let time = 11
const processID = setInterval(function () {
    let mm = String(Math.floor(time / 60)).padStart(2, '0')
    let ss = String(time % 60).padStart(2, '0')
    if (time > 0) {
        console.log(mm + ":" + ss)
        time--
    }
    console.log("프로그램 실행중...")
}, 1000)

let time = 180
const processID = setInterval(function () {
    if (time < 0) {
        clearInterval(processID)
        return
    }
    let mm = String(Math.floor(time / 60)).padStart(2, '0')
    let ss = String(time % 60).padStart(2, '0')
    console.log(mm + ":" + ss)
    time--
}, 1000)
