import { Stack, Typography } from '@mui/material';
import { ReactComponent as LogoSVG } from '../../assets/icons/Logo.svg';
import { LogoButton } from './logo.styles';

const Logo = () => {
  return (
    <LogoButton focusRipple>
      <LogoSVG />
      <Stack>
        <Typography color='secondary' variant='h5'>
          Садовод
        </Typography>
        <Typography
          variant='subtitle2'
          color='primary'
          sx={{
            textTransform: 'uppercase',
            textAlign: 'start',
          }}
        >
          Online
        </Typography>
      </Stack>
    </LogoButton>
  );
};

export default Logo;
