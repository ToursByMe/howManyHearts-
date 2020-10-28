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

    //get the number of data-rating
    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));

    //data-rating gives us a number but NOT the position, therefore minus 1
    let target = allStars[rating - 1];//-1 so I get the index

    //we pretended it was CLICKED!
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

        //just the boton
        let button = document.querySelector('#deleteMe');

        button.addEventListener('click', deleteStars);

        function deleteStars(){

            console.log('delete works');

            let allStars = document.querySelectorAll('.star');

            allStars.forEach(function(e){

                e.classList.remove('rated');
            });
        }

        /****************************documentacion ***************/
        //https://www.youtube.com/watch?v=dPCj6Qkq13Y