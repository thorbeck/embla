import styles from "./layout.module.scss";
import EmblaEvents from "../../events.js";

export class EmblaLayout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add(styles.layout);
    this.classList.add(styles[this.dataset.grid]);

    // Listen for nav toggle event
    this.addEventListener(EmblaEvents.navToggle, (e) => {
      let aside = this.querySelector("aside");
      aside.classList.toggle(styles.open);
    });
  }
}
