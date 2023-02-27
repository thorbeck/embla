import styles from "./button.module.scss";

export class EmblaButton extends HTMLButtonElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  // When element is added to DOM
  connectedCallback() {
    this.classList.add(styles.button);
  }
}

customElements.define("embla-button", EmblaButton, { extends: "button" });
