export default function Navigation(){
    return `
    <div id="navigation">
        <ul class="container">
            <li>
                <a href=./blog>blog </a> </li> <li>
                    <a href="./contact">contact</a>
            </li>
            <li>
                <a href="./projects">projects</a>
                <ul class="dropdown">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </li>
        </ul>
    </div>
    `;
}