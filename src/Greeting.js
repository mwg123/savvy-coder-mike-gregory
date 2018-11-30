var userName = prompt('What is your name?') || 'Anonymous';


export default function greet(){
    var title = document.querySelector('h1');

    userName =  prompt('What is your name, you big fat idiot?');

    if(!userName){
        alert('WRITE YOUR GODDAMN NAME, ASSHOLE!');
        userName = prompt('What is your name 4 rlz?');
        greet();
    }
    else{
        title.textContent += 'Hello, ' + userName + ', you douchebag';
    }
}