const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const nam = document.querySelector(".number");
const coValue = document.querySelector(".pro");
const h2 = document.querySelector(".coun-nb");

let counValue;
let clear = "";
start.addEventListener("click", () =>{
  counValue = nam.value;
  clear = setInterval(() => {
    h2.innerHTML = counValue;
    let width = loader(nam.value, counValue);
    coValue.style.width = `${width}%`;
    if (counValue == 0) {
      clearInterval(clear);
    }
    counValue--;
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(clear);
});

/**
 *
 *to do appp
 *
 */
const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.querySelector(".list-group");
add.addEventListener("click", () => {
  let li = document.createElement("li");
  li.className = `list-group-item`;
  li.style.marginTop = "10px";
  li.innerHTML = input.value;
  list.appendChild(li);
  input.value = "";
});
/**
 * student information
 */
// const fristName=document.getElementById("firstName");
// const name=document.getElementById("name")
// const Roll=document.getElementById("Roll")
// const Reg=document.getElementById("Reg")
// const Pass=document.getElementById("Pass");
// const lastName=document.getElementById("lastName");
// const roll=document.getElementById("roll");
// const reg=document.getElementById("regNb");
// const option=document.querySelector("#sile");
// const button=document.getElementById("button");
// button.addEventListener("click",()=>{
//  name.innerHTML=`${fristName.value} ${lastName.value}`
//  Roll.innerHTML=`${roll.value} `
//  Reg.innerHTML=`${reg.value} `
//  Pass.innerHTML=`${option.value}`
// })
// console.log(option)

// /***
//  * subject murks
//  */
// const ban=document.querySelector('input[placeholder="bangla"]');
// const en=document.querySelector('input[placeholder="english"]');
// const mat=document.querySelector('input[placeholder="math"]');
// const sSc=document.querySelector('input[placeholder="social-science"]');
// const s=document.querySelector('input[placeholder="science"]');
// const bio=document.querySelector('input[placeholder="biology"]');
// const bNb=document.querySelector('.bNb');
// const enN=document.getElementById('enN');
// const matN=document.getElementById('matN');
// const sN=document.getElementById('sN');
// const ssN=document.getElementById('ssN');
// const rN=document.getElementById('rN');
// button.addEventListener("click",()=>{
//   bNb.innerHTML=`${ban.value}`
//   enN.innerHTML=`${en.value}`
//   matN.innerHTML=`${mat.value}`
//   sN.innerHTML=`${sSc.value}`
//   ssN.innerHTML=`${s.value}`
//   rN.innerHTML=`${bio.value}`
 
// })
// /**
//  * gpa and grade
//  */
// const bnG=document.querySelector(".banG");
// const enG=document.querySelector(".enG");
// const maT=document.querySelector(".maT");
// const sC=document.querySelector(".sC");
// const SS=document.querySelector(".SS");
// const rE=document.querySelector(".rE");
// const total=document.querySelector(".total");

// button.addEventListener("click",()=>{
//   bnG.children[2].innerHTML=`${result(ban.value).gpa  } `
//   bnG.children[3].innerHTML=`${result(ban.value).grade  } `
//   enG.children[2].innerHTML=`${result(en.value).gpa  } `
//   enG.children[3].innerHTML=`${result(en.value).grade  } `
//   maT.children[2].innerHTML=`${result(mat.value).gpa  } `
//   maT.children[3].innerHTML=`${result(mat.value).grade  } `
//   sC.children[2].innerHTML=`${result(s.value).gpa  } `
//   sC.children[3].innerHTML=`${result(s.value).grade  } `
//   SS.children[2].innerHTML=`${result(sSc.value).gpa  } `
//   SS.children[3].innerHTML=`${result(sSc.value).grade  } `
//   rE.children[2].innerHTML=`${result(bio.value).gpa  } `
//   rE.children[3].innerHTML=`${result(bio.value).grade  } `
//   total.children[2].innerHTML=`${result.finalResult(result. ban,result.en,result.mat,result.s,result.sSc,result.bio)}`
  
  
//   total.children[3].innerHTML=`  `


// })


// function result (marks){
//   let gpa;
//   let grade;
//   if( marks >= 0 && marks < 33 ){
//     gpa     = 0;
//     grade   = 'F';
// }else if( marks >= 33 && marks < 40 ){
//     gpa     = 1;
//     grade   = 'D';
// }else if( marks >= 40 && marks < 50 ){
//     gpa     = 2;
//     grade   = 'C';
// }else if( marks >= 50 && marks < 60 ){
//     gpa     = 3;
//     grade   = 'B';
// }else if( marks >= 60 && marks < 70 ){
//     gpa     = 3.5;
//     grade   = 'A-';
// }else if( marks >= 70 && marks < 80 ){
//     gpa     = 4;
//     grade   = 'A';
// }else if( marks >= 80 && marks <= 100 ){
//     gpa     = 5;
//     grade   = 'A+';
// }else {
//     gpa     = 'Invalid';
//     grade   = 'Invalid';
// }

//   return {
//     gpa    : gpa,
//     grade     : grade
//   }    

// }


/**
 * 
 * final gpa and grade functoin
 */

 
// function  finalResult (bn, en, math, s, ss, rel){

//   let cgpa;
//   let finalGrade;
//   let totalGpa = result(bn).gpa + result(en).gpa + result(math).gpa + result(s).gpa + result(ss).gpa + result(rel).gpa;

//  cgpa =  totalGpa / 6;


//   if( bn < 33 || en < 33 || math < 33 || s < 33 || ss < 33 || rel < 33 ){
//       finalGrade = 'F';
//   }else if( cgpa >= 0 && cgpa < 1 ){
//       finalGrade = 'F';
//   }else if( cgpa >= 1 && cgpa < 2 ){
//       finalGrade = 'D';
//   }else if( cgpa >= 2 && cgpa < 3 ){
//       finalGrade = 'C';
//   }else if( cgpa >= 3 && cgpa < 3.5 ){
//       finalGrade = 'B';
//   }else if( cgpa >= 3.5 && cgpa < 4 ){
//       finalGrade = 'A-';
//   }else if( cgpa >= 4 && cgpa < 5 ){
//       finalGrade = 'A';
//   }else if( cgpa == 5 ){
//       finalGrade = 'A+';
//   }


//   return {
//       finalCgpa   :  (finalGrade == 'F') ? 'Failed' :  cgpa.toFixed(2),
//       finalresult : finalGrade
//   }



// }




