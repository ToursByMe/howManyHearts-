//"...y eres como una balanza con las pesas colgando por dentro..."(Radio Futura, 37 grados)
"use strict"

let oneOf = document.querySelector('#the1');
let restOf = document.querySelectorAll('.fa.fa-heart');

//handlers

console.log(restOf);
restOf.forEach((e=>{
    e.classList.add('fa-2x');
}));
//get all the hearts
let list = ["the1", "the2", "the3", "the4", "the5"];

list.forEach(function(e){
    document.getElementById(e).addEventListener('pointerenter',  function()  {

        let bigger = document.getElementById(e).className;
        if(bigger.includes('fa-2x')){
        document.getElementById(e).classList.remove('fa-2x');
        document.getElementById(e).classList.add('fa-3x');
        }
    });
    document.getElementById(e).addEventListener('pointerout',  function()  {

        let smaller = document.getElementById(e).className;
        if(smaller.includes('fa-3x')){
        document.getElementById(e).classList.remove('fa-3x');
        document.getElementById(e).classList.add('fa-2x');
        }
    });

})

//loop through all of them
list.forEach(function(e) {

  
    //get a hold in each of them
    document.getElementById(e).addEventListener('click',function(){
        
        let heartsClass = document.getElementById(e).className;
        //add classes if
        if(heartsClass.includes("unchecked")) {
            //like the forms remove one, add the other
            document.getElementById(e).classList.remove("unchecked");
            document.getElementById(e).classList.add("checked");
            console.log(this.classList);
        } else {

            document.getElementById(e).classList.remove("checked");
            document.getElementById(e).classList.add("unchecked");
            console.log(this.classList);
        }

    });

})