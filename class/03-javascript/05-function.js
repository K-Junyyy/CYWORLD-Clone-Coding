let processID = -1;

const getToken = () => {
  if (processID != -1) clearInterval(processID);
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("certificationNumber").innerText = token;
  document.getElementById("certificationNumber").style.border =
    "5px solid #" + token;
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
