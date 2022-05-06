export type BuildModeConfig = {
  isPreview: boolean;
  isLanding: boolean;
  isMissingEnv: boolean;
};

export enum BuildMode {
  Preview = 'preview',
  Landings = 'landings',
}
