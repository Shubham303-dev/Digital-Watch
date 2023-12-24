let date;
let hours;
let minutes;
let seconds;

let hourDisplay=document.querySelector('#hour');
let minuteDisplay=document.querySelector('#minute');;
let secondDisplay=document.querySelector('#second');;

function getCurrentTime(){
  date=new Date();
  hours=date.getHours();
  minutes=date.getMinutes();
  seconds=date.getSeconds();
}

let showTime=function showTime(){
  getCurrentTime();
  hourDisplay.innerText=hours;
  minuteDisplay.innerText=minutes;
  secondDisplay.innerText=seconds;
  // console.log(hours+' '+minutes+' '+seconds);
}

showTime();

setInterval(showTime,1000);