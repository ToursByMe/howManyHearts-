//"...y eres como una balanza con las pesas colgando por dentro..."(Radio Futura, 37 grados)
"use strict"



//getter all hearts other way
//when all is in place... 
document.addEventListener('DOMContentLoaded', function(){

    //get them all
    let allStars = document.querySelectorAll('.star');
    //loop though them if anyone is going to do click, because will activate javascript
    allStars.forEach(function(e){

        e.addEventListener('click', myRating);
    });

    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = allStars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));

});

function myRating(elem){

    let span = elem.currentTarget;
    let stars = document.querySelectorAll('.star');
    //you'll tell me the true
    let match = false;
    //counter
    let num = 0;
    
    //loop through them will you?!
    stars.forEach(function(everyStar, index){

        if(match){
            
            everyStar.classList.remove('rated');

        }else {

            everyStar.classList.add('rated');
        }
        //to whom am I looking at if it was clicked
        if (everyStar === span){

            match = true;
            num = index + 1;
        }
    });


    document.querySelector('.stars').setAttribute('data-rating', num);
}
