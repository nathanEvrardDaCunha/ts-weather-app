const headerTemplate = document.createElement(`template`);

headerTemplate.innerHTML = `
<header>
    <!-- DESIGN: Facilitate website navigation. -->
    <nav>
        <h1>Wat</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Solution</a></li>
            <li><a href="#">Compagny</a></li>
        </ul>
    </nav>

    <!-- DESIGN: Call the user to try the solution. -->
    <section>
        <h2>Get real time city data for free.</h2>
        <a href="#"><button>Start your research</button></a>
    </section>
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

customElements.define('header-component', Header);
