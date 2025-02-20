const headerTemplate = document.createElement(`template`);

headerTemplate.innerHTML = `
<header>
    <!-- DESIGN: Facilitate website navigation. -->
    <nav>
        <h1>WeatherAdvanced</h1>
        <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Weather Platform</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
    </nav>

    <!-- DESIGN: Call the user to try the solution. -->
    <article>
        <h2>Access precision weather data for any location worldwide</h2>
        <a href="#"><button>Check your local forecast</button></a>
    </article>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowDom = this.attachShadow({ mode: `closed` });
        shadowDom.appendChild(headerTemplate.content);
    }
}

// NOTE: Might need to make it dynamically receive inputs for the call-to-action inside it.
// NOTE: If made dynamic, I will need to input the same inputs on all page with header defeating it's purpose.
customElements.define('header-component', Header);
