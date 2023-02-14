import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "embla-router",
  styleUrl: "embla-router.scss",
  shadow: false,
})
export class EmblaRouter {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
