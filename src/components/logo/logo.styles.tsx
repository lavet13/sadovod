import { ButtonBase, keyframes, styled } from '@mui/material';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

export const LogoButton = styled(ButtonBase)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  '&& .MuiTouchRipple-child': {
    backgroundColor: theme.palette.primary.main,
  },
  '&& .MuiTouchRipple-rippleVisible': {
    opacity: 0.5,
    animationName: enterKeyframe,
    animationDuration: '550ms',
    animationTimingFunction: theme.transitions.easing.easeInOut,
  },
  [theme.breakpoints.down('md')]: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    alignSelf: 'stretch',
  },
}));
