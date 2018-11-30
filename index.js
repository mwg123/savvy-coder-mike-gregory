import Navigation from './src/Navigation';

import Content from './src/Content';

import Footer from './src/Footer';

import Header from './src/Header';
import greet from './src/Greeting';

var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome ty my Savvy Coders Portfolio Project'
    },
    'blog': {
        'title': 'Please read my insightful Blog'
    },
    'contact': {
        'title': 'Contact Me'
    },
    'projects': {
        'title': 'Look upon my works, you jealous asshole!'
    }
};

var root = document.querySelector('#root');

function render(State){ //eslint-disable-line
    var links;

    root.innerHTML = `
    ${Header(State)}
    ${Navigation(State)}
    ${Content(State)}
    ${Footer(State)}
    `;

    links = document.querySelectorAll('#navigation a');

    greet();
    
    function handleNavigation(event){
        event.preventDefault();
        console.log(event.target.textContent);
    }

    State.active = event.target.textContent;

    render(State);

    links[0].addEventListener(
        'click',
        handleNavigation
    );

    links[1].addEventListener(
        'click',
        handleNavigation
    );

    links[2].addEventListener(
        'click',
        handleNavigation
    );
}

render(State);