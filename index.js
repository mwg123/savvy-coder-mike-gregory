var userName = prompt('What is your name?');
var greet = function greet(){
    var userName =  prompt('What is your name, you big fat idiot?');

    if(!userName){
        alert('WRITE YOUR GODDAMN NAME, ASSHOLE!');
        userName = prompt('What is your name 4 rlz?');
        greet();
    }
 else{
        alert('Hello ' + userName);
    }
};