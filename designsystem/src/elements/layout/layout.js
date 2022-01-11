import style from './layout.module.scss';

class EmblaLayout extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'
    const styleTag = document.createElement('style');
    styleTag = style;
    this.shadowRoot.appendChild(styleTag);
  }
}

customElements.define('embla-layout', EmblaLayout);
