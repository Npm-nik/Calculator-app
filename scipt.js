let input = document.querySelector("input");
let buttons = document.querySelectorAll(".btn");
let string = "";
let str = 'x';
let num = parseInt(str);
let symbol = document.getElementById("#symbol");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
    } else  if(e.target.innerHTML == 'C'){
        string = "";
        input.value = string;
    }
    else if(e.target.value == 'x'){
        string = "";
        input.value = string;
    }
    else{
    console.log(e.target);
    string +=  e.target.innerHTML;
    input.value = string;
    }
  });
});

// let string = "";
// let buttons = document.querySelectorAll('.btn');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click" , (e) =>{
//         console.log(e.target);
//         string = string + e.target.InnerHTML;
//         document.querySelector('input').value = string;
//     })
// });

