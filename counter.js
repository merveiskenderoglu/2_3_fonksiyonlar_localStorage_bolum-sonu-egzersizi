
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
let counterDOM = document.querySelector('#counter');
let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');

counterDOM.innerHTML = counter ;

// my solution
// increaseDOM.addEventListener('click', function(){
//     counter += 1;
//     counterDOM.innerHTML = counter ;
// })

// decreaseDOM.addEventListener('click', function(){
//     counter -= 1;
//     counterDOM.innerHTML = counter ;
// })




// kodluyoruz solution
decreaseDOM.addEventListener('click', clickEvent);
increaseDOM.addEventListener('click', clickEvent);

function clickEvent(){
    if (this.id == 'increase'){
        counter ++;
    }else{
        counter --;
    }
    localStorage.setItem('counter',counter);
    counterDOM.innerHTML=counter;
}
