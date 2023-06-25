import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    yellow: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    yellow?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    yellow: true;
    white: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
    '3xl': true;
    '4xl': true;
    '5xl': true;
  }
}
