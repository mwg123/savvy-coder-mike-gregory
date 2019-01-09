import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import greet from './src/Greeting';
import Navigo from 'navigo';
import Store from './src/Store';


var router = new Navigo(window.location.origin);

var State = {
    'posts': [],
    'active': 'Home',
    'Home': {
        'title': 'Welcome ty my Savvy Coders Portfolio Project',
        'links': [ 'blog', 'contact', 'projects' ]
    },
    'blog': {
        'title': 'Please read my insightful Blog',
        'links': [ 'Home', 'contact', 'projects' ]
    },
    'contact': {
        'title': 'Contact Me',
        'links': [ 'Home', 'blog', 'projects' ]
    },
    'projects': {
        'title': 'Look upon my works, you jealous asshole!',
        'links': [ 'Home', 'blog', 'contact' ]
    }
};

var store = new Store(State);

var root = document.querySelector('#root');

function handleNavigation(params){
    store.dispatch((state) => {
        state.active = params.page;
        
        return state;
    });
}

function render(state){
    root.innerHTML = `
    ${Header(state)}
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
    `;

    greet();

    router.updatePageLinks();
}

store.addListener(render);

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        store.dispatch((state) => {
            state.posts = posts;

            return state;
        });
    });