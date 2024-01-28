const startBtn  = document.querySelector('.button__start');
const pauseBtn = document.querySelector('.button__pause');
const stopBtn = document.querySelector('.button__stop');

const displayTime = document.querySelector('.time');

let count = 0;
let timer = undefined;

startBtn.addEventListener('click',()=>{
  console.log("시작했다");
  startTimer(); //타이머가 돌아가기 시작한다
 //현재 타이머를 보여준다
})

pauseBtn.addEventListener('click',()=>{
  console.log("일시정지했다."); 
  clearInterval(timer);
})

stopBtn.addEventListener('click',()=>{
  console.log("정지했다.")
  displayTime.innerText = `00:00:00`;
  count = 0;
  clearInterval(timer);
})

function startTimer(){
  timer = setInterval(()=>{
    count++;
    showNowTime(); 
  },1000);
}

function showNowTime(){
  const hour = String(Math.floor(count/3600)).padStart(2,0);
  let minute = String(Math.floor(count/60)%60).padStart(2,0);
  const sec = String(Math.floor(count%60)).padStart(2,0);
  displayTime.innerText = `${hour}:${minute}:${sec}`;
}