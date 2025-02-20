class ImageText extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'description', 'src', 'alt'];
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
        const textTitle =
            this.getAttribute('title') || `Title information placeholder.`;
        const textDescription =
            this.getAttribute('description') ||
            `Description information placeholder.`;
        const imageUrl =
            this.getAttribute('src') || `https://picsum.photos/205`;
        const imageAlt = this.getAttribute('alt') || `Image alt placeholder.`;

        const imageTextTemplate = document.createElement(`template`);
        imageTextTemplate.innerHTML = `
        <section>
            <img
                src="${imageUrl}"
                alt="${imageAlt}"
            />
            <h3>${textTitle}</h3>
            <p>
                ${textDescription}
            </p>
        </section>
        `;

        shadowDom.innerHTML = ``;
        shadowDom.appendChild(imageTextTemplate.content.cloneNode(true));
    }
}

customElements.define('image-text-component', ImageText);
