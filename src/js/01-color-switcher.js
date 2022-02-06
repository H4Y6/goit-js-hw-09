function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const startBtnRef = document.querySelector("button[data-start]");
const stopBtnRef = document.querySelector("button[data-stop]");
startBtnRef.addEventListener("click", onStartBtnClick);
stopBtnRef.addEventListener("click", onStopBtnClick);
stopBtnRef.disabled = true;

function onStartBtnClick() {
startBtnRef.disabled = true;
stopBtnRef.disabled = false;
document.body.style.backgroundColor = getRandomHexColor();
timerId = setInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
}
function onStopBtnClick() {
stopBtnRef.disabled = true;
startBtnRef.disabled = false;
clearInterval(timerId);
}


