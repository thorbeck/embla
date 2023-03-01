import styles from "./layout.module.scss";
// import EmblaEvents from "../../events.js";

export class EmblaLayout extends HTMLElement {
  constructor() {
    super();
    // Set up state
    this.state = {
      event: null,
      grid: null,
    };
  }

  // props
  static get observedAttributes() {
    // return all data attributes as an array
    return ["data-event", "data-grid"];
  }

  // prop change
  attributeChangedCallback(name, oldValue, newValue) {
    // remove data- from name
    name = name.replace("data-", "");

    // check if value has changed
    if (oldValue !== newValue) {
      // update state with new value
      this.state[name] = newValue;
    }
  }

  connectedCallback() {
    this.classList.add(styles.layout);
    this.classList.add(styles[this.dataset.grid]);

    // Listen for event
    this.addEventListener(this.state.event, (e) => {
      let aside = this.querySelector("aside");
      aside.classList.toggle(styles.open);
    });
  }
}

customElements.define("embla-layout", EmblaLayout);
