const h = document.querySelector(".h");
const m = document.querySelector(".m");
const s = document.querySelector(".s");
const am = document.querySelector(".ampm");
setInterval(function () {
  let dateObjet = new Date();
  let hours = dateObjet.getHours();
  let minutes =dateObjet.getMinutes();
  let seconds = dateObjet.getSeconds();
  let ampm = hours > 12 ? "PM" : "AM";
  let hour= "";
  if (hours == 0) {
    hour = 12;
  }
  if (hours > 0 && hours <= 12) {
    hour = hours;
  } else {
    hour = hours - 12;
  }
  let min="";
  if(minutes < 10){
    min=`0${minutes}`
  }
  else{
    min=minutes
  }

  let sec = "";
  if (seconds < 10) {
    sec = `0${seconds} `;
  } else {
    sec = seconds;
  }
  h.innerHTML = `${hour}`;
  m.innerHTML = `${min}`;
  s.innerHTML = `${sec}`;
  am.innerHTML = `${ampm}`;
}, 1000);
/**
 * counter function
 */
function loader(start_val,current_val){
  return (current_val * 100) / start_val;

}

