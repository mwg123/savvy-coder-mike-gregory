export default function Header(state){
    return `
    <div id="header">
        <h1>Hello World!</h1>
        <h1>${state[state.active].title}</h1>
        <img src="https://flavorwire.files.wordpress.com/2013/11/calvin-and-hobbes.jpg" alt="">
        <ul>
            <li class="brand">Tyler Krzyzjaniek is a super duper hipster</li>
        </ul>
        <!--attention getters!-->
        <h3>Hello World</h3>
        <img src="https://i.skyrock.net/9097/82509097/pics/3208153991_1_2_3MCOiTQy.jpg" alt="">
    </div>
        `;
}