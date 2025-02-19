const footerTemplate = document.createElement(`template`);

footerTemplate.innerHTML = `
<footer>
    <!-- DESIGN: Allow users to contact the compagny. -->
    <address>
        <h2>Compagny address.</h2>
        <ul>
            <li>
                Contact:
                <a href="mailto:contact@watinc.com"
                    >contact@watinc.com</a
                >
            </li>
            <li>
                Issue:
                <a href="mailto:technical-support@watinc.com"
                    >technical-support@watinc.com</a
                >
            </li>
            <li>Location: 14 St NYC - US</li>
            <li>Phone: (800-752-9987)</li>
        </ul>
    </address>

    <!-- DESIGN: Prevent legal copyright cases. -->
    <small>© 2024 WatInc. All rights reserved.</small>
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
