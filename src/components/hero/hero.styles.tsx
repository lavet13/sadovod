import { Divider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const navigationOffset = 95;

export const HeroBackground = styled('div')`
  position: relative;
  overflow: hidden;
  z-index: 100;

  min-height: calc(100vh - ${navigationOffset}px);

  & > .MuiGrid2-root {
    height: calc(100vh - ${navigationOffset}px);
  }

  & > .MuiContainer-root {
    height: calc(100vh - ${navigationOffset}px);
  }
`;

export const ClipPathGreenBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: `calc(100vh - ${navigationOffset}px)`,
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
  clipPath: 'polygon(0 60%, 100% 50%, 100% 100%, 0 100%)',
  zIndex: -100,

  ['@media screen and ((max-height: 700px) or (max-width: 600px))']: {
    clipPath: 'polygon(0 320px, 100% 320px, 100% 100%, 0 100%)',
  },
}));

export const Image = styled('img')(({ theme }) => ({
  marginLeft: '-40%',
  display: 'block',
  maxWidth: '150%',
  height: `calc(100vh - ${navigationOffset}px)`,
  objectFit: 'cover',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '120%',
    marginTop: `${navigationOffset}px`,
    height: `calc(100vh - ${navigationOffset * 2}px)`,
    marginLeft: '-20%',
  },
}));

export const HeroDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  borderWidth: 2,
  marginBottom: 2,

  [theme.breakpoints.down('xl')]: {
    width: '450px',
    alignSelf: 'end',
  },

  [theme.breakpoints.down('md')]: {
    width: '60%',
    alignSelf: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    width: '250px',
  },
}));
