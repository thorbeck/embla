import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";

export const config: Config = {
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  namespace: "embla",
  outputTargets: [
    {
      type: "dist",
      dir: "./dist",
      esmLoaderPath: "loader",
    },
  ],
};
