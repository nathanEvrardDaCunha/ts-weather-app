class Footer extends HTMLElement {
    static get observedAttributes() {
        return ['style-file'];
    }

    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangeCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const styleFile = this.getAttribute('style-file');
        const footerTemplate = document.createElement('template');

        footerTemplate.innerHTML = `
        <link rel="stylesheet" href="${styleFile}" />
        <footer class="footer">
            <!-- DESIGN: Allow users to contact the compagny. -->
            <address class="address">
                <h2 class="address__title">Corporate Headquarters</h2>
                <ul class="address__items">
                    <li class="address__item">
                        General Inquiries: </br>
                        <a class="address__email-link" href="mailto:contact@weatheradvancedinc.com"
                            >contact@weatheradvancedinc.com</a
                        >
                    </li>
                    <li class="address__item">
                        Technical Support: </br>
                        <a class="address__email-link" href="mailto:technical-support@weatheradvancedinc.com"
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

        this.shadowDom.innerHTML = '';
        this.shadowDom.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('footer-component', Footer);
