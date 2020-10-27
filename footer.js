class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <footer>
        <p>Contact me via <a href="mailto:seanrkelly35@gmail.com" target="_blank" rel="noopener noreferrer">e-mail</a> [seanrkelly35 AT gmail DOT com]</p>
        <p>Find me on <a href="https://www.instagram.com/srkellyscope/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);