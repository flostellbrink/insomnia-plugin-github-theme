// Based on https://github.com/Kong/insomnia/blob/develop/packages/insomnia/src/plugins/misc.ts

export type HexColor = `#${string}`;
export type RGBColor = `rgb(${string})`;
export type RGBAColor = `rgba(${string})`;

export type ThemeColor = HexColor | RGBColor | RGBAColor;

// notice that for each sub-block (`background`, `foreground`, `highlight`) the `default` key is required if the sub-block is present
export interface ThemeBlock {
  background?: {
    default: ThemeColor;
    success?: ThemeColor;
    notice?: ThemeColor;
    warning?: ThemeColor;
    danger?: ThemeColor;
    surprise?: ThemeColor;
    info?: ThemeColor;
  };
  foreground?: {
    default: ThemeColor;
    success?: ThemeColor;
    notice?: ThemeColor;
    warning?: ThemeColor;
    danger?: ThemeColor;
    surprise?: ThemeColor;
    info?: ThemeColor;
  };
  highlight?: {
    default: ThemeColor;
    xxs?: ThemeColor;
    xs?: ThemeColor;
    sm?: ThemeColor;
    md?: ThemeColor;
    lg?: ThemeColor;
    xl?: ThemeColor;
  };
}

export interface StylesThemeBlocks {
  appHeader?: ThemeBlock;
  dialog?: ThemeBlock;
  dialogFooter?: ThemeBlock;
  dialogHeader?: ThemeBlock;
  dropdown?: ThemeBlock;
  editor?: ThemeBlock;
  link?: ThemeBlock;
  overlay?: ThemeBlock;
  pane?: ThemeBlock;
  paneHeader?: ThemeBlock;
  sidebar?: ThemeBlock;
  sidebarHeader?: ThemeBlock;
  sidebarList?: ThemeBlock;

  /** does not respect parent wrapping theme */
  tooltip?: ThemeBlock;

  transparentOverlay?: ThemeBlock;
}

export type ThemeInner = ThemeBlock & {
  rawCss?: string;
  styles?: StylesThemeBlocks | null;
};

export interface PluginTheme {
  /** this name is used to generate CSS classes, and must be lower case and must not contain whitespace */
  name: string;
  displayName: string;
  theme: ThemeInner;
}
