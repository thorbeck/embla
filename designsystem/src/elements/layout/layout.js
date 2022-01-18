import styles from './layout.module';
import EmblaEvents from '../../events';

class EmblaLayout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add(styles.layout);
    this.classList.add(styles[this.dataset.grid]);

    // Listen for nav toggle event
    this.addEventListener(EmblaEvents.navToggle, (e) => {
      let aside = this.querySelector('aside');
      aside.classList.toggle(styles.open);
    });

    // Use observer to properly detect children changes
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
          let child = mutation.addedNodes[0];
          switch (child.tagName) {
            case 'HEADER':
              child.classList.add(styles.header);
              break;
            case 'ASIDE':
              child.classList.add(styles.aside);
              break;
            case 'MAIN':
              child.classList.add(styles.main);
              break;
          }
        }
      });
    });

    observer.observe(this, { childList: true });
  }
}

customElements.define('embla-layout', EmblaLayout);
