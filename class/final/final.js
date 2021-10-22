


// 휴대폰 번호 입력 부분
function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010
    if(phone1.length === 3){
        document.getElementById("phone2").focus();
    }
}
function changePhone2(){
    const phone2 = document.getElementById("phone2").value // 010
    if(phone2.length === 4){
        document.getElementById("phone3").focus();
    }
}
function changePhone3(){
    const phone3 = document.getElementById("phone3").value // 010
    if(phone3.length === 4){
      document.getElementById("sendMessage").focus();
      document.getElementById("sendMessage").setAttribute("style","background-color:yellow; cursor:pointer")
      document.getElementById("completion").setAttribute("style","background-color:yellow; cursor:pointer")
      document.getElementById("sendMessage").disabled = false;
      document.getElementById("completion").disabled = false;
    }
}

// 문자인증+타이머 부분
let processID = -1;

const getToken = () => {
  if (processID != -1) clearInterval(processID);
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("certificationNumber").innerText = token;
  //document.getElementById("certificationNumber").style.border = "5px solid #" + token;
  let time = 180;
  processID = setInterval(function () {
    if (time < 0) {
      clearInterval(processID);
      return;
    }
    let mm = String(Math.floor(time / 60)).padStart(2, "0");
    let ss = String(time % 60).padStart(2, "0");
    let result = mm + ":" + ss;
    document.getElementById("timeLimit").innerText = result;
    time--;
  }, 50);
};


// 가입부분 체크

function signUpCheck(){

}