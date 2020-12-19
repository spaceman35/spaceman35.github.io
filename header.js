class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <a href="./index.html">Home</a>
          <a href="./about.html">About</a>
          <a href="./apollo.html">Apollo</a>
          <a href="./astrophotography.html">Astrophotography</a>
          <a href="./cyberdeck.html">Cyberdeck</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);