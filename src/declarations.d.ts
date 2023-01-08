// Allows import of asset files in typescript
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module "*.png" {
  export default "" as string;
}
declare module "*.svg" {
  export default "" as string;
}
declare module "*.jpeg" {
  export default "" as string;
}
declare module "*.jpg" {
  export default "" as string;
}