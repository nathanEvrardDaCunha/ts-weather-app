class KeyPoint extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'statistic', 'description'];
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

    render(shadowDom) {
        const title = this.getAttribute('title') || `Title placeholder.`;
        const statistic = this.getAttribute('statistic') || `XYZ`;
        const description =
            this.getAttribute('description') || `Description placeholder`;

        const keyPointTemplate = document.createElement(`template`);
        keyPointTemplate.innerHTML = `
        <section>
            <h3>${title}</h3>
            <strong>${statistic}</strong>
            <p>${description}</p>
        </section>
        `;

        shadowDom.innerHTML = ``;
        shadowDom.appendChild(keyPointTemplate.content.cloneNode(true));
    }
}

customElements.define(`key-point-component`, KeyPoint);
