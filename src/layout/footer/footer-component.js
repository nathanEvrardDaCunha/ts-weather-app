const footerTemplate = document.createElement(`template`);

footerTemplate.innerHTML = `
<footer>
    <!-- DESIGN: Allow users to contact the compagny. -->
    <address>
        <h2>Corporate Headquarters</h2>
        <ul>
            <li>
                General Inquiries:
                <a href="mailto:contact@weatheradvancedinc.com"
                    >contact@weatheradvancedinc.com</a
                >
            </li>
            <li>
                Technical Support:
                <a href="mailto:technical-support@weatheradvancedinc.com"
                    >technical-support@weatheradvancedinc.com</a
                >
            </li>
            <li>Location: 14 West 23rd Street, New York, NY 10010</li>
            <li>Toll-Free: +1 (800) 752-9987</li>
        </ul>
    </address>

    <!-- DESIGN: Prevent legal copyright cases. -->
    <small>© 2024 WeatherAdvanced Technologies Inc. All rights reserved.</small>
</footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowDom = this.attachShadow({ mode: `closed` });
        shadowDom.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);
