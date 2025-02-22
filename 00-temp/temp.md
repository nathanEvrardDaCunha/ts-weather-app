# Starting Date: 19/02/2025

# Ending Date: 02/03/2025 - 05/05/2025

```css
body {
    font-family: sans-serif;
}
```

-   Add social media Icon in the footer (github / twitter / X / Facebook / Instagram / LinkedIn => choose 2 to 3)
-   Add Icon to address informations

-   Z: Check cross browser visual consistency

-   Rewrite every .js file in .ts if possible (is it possible for web component using native HTML property ?).

-   X: Add font family with fallback

-   Z: Maybe try to add semi opaque background color behind, or to, header

-   Z: Remove the header title margin and put the same as the footer padding on the header

-   Z: Refactor with css variables

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
