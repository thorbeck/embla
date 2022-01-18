import style from './nav-toggle.shadow';
import EmblaEvents from '../../events';

const template = document.createElement('template');
template.id = 'embla-nav-toggle';
template.innerHTML = `<style>${style}</style><button type="button">toggle</button>`;
document.body.appendChild(template);

class NavToggle extends HTMLElement {
  constructor() {
    super();
    // Get template by id
    const template = document.getElementById('embla-nav-toggle');
    // Set template content
    let templateContent = template.content;
    // Add shadowroot and add template content
    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }

  connectedCallback() {
    const catFound = new Event(EmblaEvents.navToggle, {
      bubbles: true,
    });
    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('click', () => {
      this.dispatchEvent(catFound);
    });
  }
}

customElements.define('embla-nav-toggle', NavToggle);
