import { LogoButton, NavigationBackground } from './navigation.styles';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { ReactComponent as LogoSVG } from '../../assets/icons/Logo.svg';

const Navigation = () => {
  return (
    <NavigationBackground>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid xs={4}>
            <Stack
              direction='row'
              justifyContent='end'
              alignItems='center'
              spacing={1}
            >
              <LogoButton focusRipple>
                <LogoSVG />
                <Stack>
                  <Typography color='secondary' variant='h5'>
                    Садовод
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    color='primary'
                    sx={{ textTransform: 'uppercase', textAlign: 'start' }}
                  >
                    Online
                  </Typography>
                </Stack>
              </LogoButton>
            </Stack>
          </Grid>
          <Grid xs={8}>
            <Stack direction='row' justifyContent='center'>
              <ButtonGroup size='large' aria-label='large button group'>
                <Button variant='text'>Главная</Button>
                <Button variant='text' color='secondary'>
                  Оплата и доставка
                </Button>
                <Button variant='text' color='secondary'>
                  Вход
                </Button>
                <Button variant='contained' color='secondary'>
                  Каталог
                </Button>
              </ButtonGroup>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </NavigationBackground>
  );
};

export default Navigation;
