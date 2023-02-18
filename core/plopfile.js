module.exports = (plop) => {
  // Helpers
  plop.setHelper("pascalCase", (name) => {
    return name
      .split("-")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      })
      .join("");
  });

  plop.setHelper("lowerCase", (name) => {
    return name.toLowerCase();
  });

  // Element generator
  plop.setGenerator("customelement", {
    description: "Create a new custom element.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name:",
      },
      {
        type: "confirm",
        name: "extend",
        message: "Extend HTML element?",
      },
      {
        type: "input",
        name: "extendElement",
        message: "What HTMLElement are we extending? (E.g. 'button')",
        when: (response) => {
          return response.extend;
        },
      },
      {
        type: "input",
        name: "extendTag",
        message: "What is the tag for this HTMLElement?",
        when: (response) => {
          return response.extend;
        },
      },
      {
        type: "confirm",
        name: "useShadowDOM",
        message: "Use Shadow DOM?",
        when: (response) => {
          return !response.extend;
        },
      },
    ],
    actions: (data) => {
      var actions = [];
      const filename = data.extend ? "_" : "";
      // Custom element
      actions.push({
        type: "add",
        path: `src/elements/${filename}{{lowerCase name}}/{{lowerCase name}}.js`,
        templateFile: "templates/custom-element/custom-element.js.hbs",
      });
      // SCSS & HTML
      if (data.useShadowDOM) {
        actions.push({
          type: "add",
          path: "src/elements/{{lowerCase name}}/{{lowerCase name}}.shadow.scss",
          templateFile: "templates/custom-element/custom-element.scss.hbs",
        });
        actions.push({
          type: "add",
          path: "src/elements/{{lowerCase name}}/{{lowerCase name}}.html",
          templateFile: "templates/custom-element/custom-element.html.hbs",
        });
      } else {
        actions.push({
          type: "add",
          path: `src/elements/${filename}{{lowerCase name}}/{{lowerCase name}}.module.scss`,
          templateFile: "templates/custom-element/custom-element.scss.hbs",
        });
      }
      return actions;
    },
  });
};
