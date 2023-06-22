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
}));

export const Image = styled('img')`
  margin-left: -40%;
  display: block;
  max-width: 150%;
  height: calc(100vh - ${navigationOffset}px);
  object-fit: cover;
`;
