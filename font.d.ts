import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    yellow: Pallete['primary'];
  }

  interface PaletteOptions {
    yellow?: PalleteOptions['primary'];
  }
}
