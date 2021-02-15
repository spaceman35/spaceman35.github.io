class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <footer>
        <p>Contact me via <a href="mailto:hello@seankelly.space" target="_blank" rel="noopener noreferrer">e-mail</a> [hello AT seankelly DOT space]</p>
        <p>Find me on <a href="https://www.instagram.com/srkellyscope/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);