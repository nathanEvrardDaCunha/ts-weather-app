class Header extends HTMLElement {
    static get observedAttributes() {
        return ['style-file'];
    }

    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        this.render();

        const closeBurgerMenu =
            this.shadowDom.getElementById('close-burger-menu');
        if (closeBurgerMenu) {
            closeBurgerMenu.addEventListener('click', () => {
                this.hideBurgerMenu();
            });
        }

        const openBurgerMenu =
            this.shadowDom.getElementById('open-burger-menu');
        if (openBurgerMenu) {
            openBurgerMenu.addEventListener('click', () => {
                this.openBurgerMenu();
            });
        }
    }

    attributeChangeCallback(name, oldValue, newValue) {
        this.render();
    }

    hideBurgerMenu() {
        const openHeader = this.shadowDom.querySelector('.header--open');
        openHeader.style.display = 'none';
        const closeHeader = this.shadowDom.querySelector('.header');
        closeHeader.style.display = 'block';
    }

    openBurgerMenu() {
        const openHeader = this.shadowDom.querySelector('.header--open');
        openHeader.style.display = 'block';
        const closeHeader = this.shadowDom.querySelector('.header');
        closeHeader.style.display = 'none';
    }

    render() {
        const styleFile = this.getAttribute('style-file') || `No style file`;

        const headerTemplate = document.createElement('template');
        headerTemplate.innerHTML = `
        <link rel="stylesheet" href="${styleFile}" />
        <header class="header">
            <!-- DESIGN: Facilitate website navigation. -->
            <nav class="navigation">
                <h1 class="navigation__title">WeatherAdvanced</h1>
                <ul class="navigation__items">
                    <li class="navigation__item"><a class="navigation__link" href="#">Overview</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#">Playground</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#">Company</a></li>
                    <img class="navigation__item header__button" id="open-burger-menu" src="assets/icons/icon-menu.svg" alt="open button for closed burger menu" />
                </ul>
            </nav>
        </header>

        <header class="header--open">
            <nav class="navigation--open">
                <h1 class="navigation__title">WeatherAdvanced</h1>
                <ul class="navigation__items--open">
                    <img class="header__button" id="close-burger-menu" src="assets/icons/icon-close.svg" alt="close button for opened burger menu" />
                    <li><a class="navigation__link" href="#">Overview</a></li>
                    <li><a class="navigation__link" href="#">Playground</a></li>
                    <li><a class="navigation__link" href="#">Company</a></li>
                </ul>
            </nav>
        </header>
        `;

        this.shadowDom.innerHTML = '';
        this.shadowDom.appendChild(headerTemplate.content.cloneNode(true));
    }
}

customElements.define('header-component', Header);
