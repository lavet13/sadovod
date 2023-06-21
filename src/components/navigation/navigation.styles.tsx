import { styled } from '@mui/material/styles';
import { Box, ButtonBase, keyframes } from '@mui/material';

import Shopping1 from '../../assets/icons/luggages.svg';
import Shopping2 from '../../assets/icons/luggages2.svg';

export const NavigationBackground = styled(Box)(({ theme }) => ({
  background: `url(${Shopping1}) 2% no-repeat, url(${Shopping2}) 98% no-repeat`,
  [theme.breakpoints.down('lg')]: {
    background: `url(${Shopping2}) 98% no-repeat`,
  },
}));

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
}));
