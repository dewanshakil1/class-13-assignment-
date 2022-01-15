const start =document.querySelector(".start");
const stop =document.querySelector(".stop");
const nam =document.querySelector(".number");
const coValue =document.querySelector(".pro");
const h2 =document.querySelector(".coun-nb");
// coValue.style.width="100px";
//     coValue.style.height="100px";
let counValue;
let clear="";
start.addEventListener("click",()=>{
    counValue=nam.value; 
   
        
  let width=loader(nam.value,counValue);
  coValue.style.width=`${width}%`

    clear= setInterval(()=>{
        h2.innerHTML=counValue;
        
        if(counValue==0){
            clearInterval(clear)
        
        }
        counValue--;

    },1000)
})
stop.addEventListener("click",()=>{
   
    clearInterval(clear)

})



// const start = document.getElementById("cou_start");
// const stop = document.getElementById("cou_stop");
// const reset = document.getElementById("cou_reset");
// const couInput = document.getElementById("cou_input");
// const charge = document.getElementById("charge");
// const reCharge = document.getElementById("re-charge");
// const count = document.getElementById("count");

// let count_value;
// let countclear;

// start.addEventListener('click', () =>{
//     count_value = couInput.value;

//     countclear = setInterval(function(){
//         count.innerHTML = count_value;
//         count_value--;

//     }, 1000)

// })

// stop.addEventListener("click", () =>{
//     clearInterval(countclear);
// });

// reset.addEventListener("click", () =>{
//     count_value = 0;
//     count.innerHTML = count_value;
//     clearInterval(countclear);
// });


