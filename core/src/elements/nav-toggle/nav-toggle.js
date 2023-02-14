import style from "./nav-toggle.shadow.scss";
import EmblaEvents from "../../events.js";

const template = document.createElement("template");
template.id = "embla-nav-toggle";
template.innerHTML = `<style>${style}</style><button type="button" aria-haspopup="true"><span></span><span></span><span></span></button>`;
document.body.appendChild(template);

class NavToggle extends HTMLElement {
  constructor() {
    super();
    // Get template by id
    const template = document.getElementById("embla-nav-toggle");
    // Set template content
    let templateContent = template.content;
    // Add shadowroot and add template content
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }

  connectedCallback() {
    const toggleEvent = new Event(EmblaEvents.navToggle, {
      bubbles: true,
    });
    const button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", () => {
      button.hasAttribute("aria-expanded")
        ? button.removeAttribute("aria-expanded")
        : button.setAttribute("aria-expanded", "true");
      this.dispatchEvent(toggleEvent);
    });
  }
}

customElements.define("embla-nav-toggle", NavToggle);
