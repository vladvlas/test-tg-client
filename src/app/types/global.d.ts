import React from "react";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
    const SVG: React.VFC<React.SVGProps<SVGElement>>;
    export default SVG;
}
