import Navigation from './src/Navigation';

import Content from './src/Content';

import Footer from './src/Footer';

console.log(Footer);

document.querySelector('#root').innerHTML += `
    ${Navigation}
    ${Content}
    ${Footer}
    `;

var userName = prompt('What is your name?') || 'Anonymous';

var title = document.querySelector('h1:');

var greet = function greet(){
    userName =  prompt('What is your name, you big fat idiot?');

    if(!userName){
        alert('WRITE YOUR GODDAMN NAME, ASSHOLE!');
        userName = prompt('What is your name 4 rlz?');
        greet();
    }
    else{
        title.textContent += 'Hello, ' + userName + ', you douchebag';
    }
};

//greet();