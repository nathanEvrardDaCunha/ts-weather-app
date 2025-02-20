class CallToAction extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'href', 'action'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const shadowDom = this.attachShadow({ mode: 'closed' });
        this.render(shadowDom);
    }

    attributeChangeCallback(name, oldValue, newValue) {
        if (this.shadowDom) {
            return this.render(shadowDom);
        }
    }

    // NOTE: Might be a good idea to replace all those fallback magical string with constant (example: NO_TITLE_CONTENT).
    // NOTE: Might be a good idea for missing href to point to 404 or 504 missing page.
    render(shadowDom) {
        const title = this.getAttribute('title') || `Title placeholder`;
        const href = this.getAttribute('href') || `#`;
        const action = this.getAttribute('action') || `Action placeholder`;

        const callToActionTemplate = document.createElement(`template`);
        callToActionTemplate.innerHTML = `
        <article>
            <h2>${title}</h2>
            <a href="${href}"><button>${action}</button></a>
        </article>
        `;

        shadowDom.innerHTML = ``;
        shadowDom.appendChild(callToActionTemplate.content.cloneNode(true));
    }
}

// NOTE: Might be a good idea to document web component guidelines (example: maximum bumber of word less or equal to three).
customElements.define('call-to-action-component', CallToAction);
