import {
  ClipPathGreenBackground,
  HeroBackground,
  HeroDivider,
  Image,
} from './hero.styles';
import WomanWithBaggages from '../../assets/images/womanWithBaggages.png';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, Link, Stack, Typography } from '@mui/material';

const Hero = () => {
  return (
    <HeroBackground>
      <ClipPathGreenBackground />
      <Container>
        <Grid container columns={24}>
          <Grid xs={0} md={10} lg={12}>
            <Image src={WomanWithBaggages} />
          </Grid>
          <Grid md={2} lg xl />
          <Grid xs={24} md={10} lg={9} mt={10}>
            <Stack height={'100%'}>
              <Stack
                alignItems={{ xs: 'center', md: 'flex-end' }}
                sx={{ mb: { xs: 10, md: 5 } }}
              >
                <Typography color='secondary' variant='h3' mb={-2} noWrap>
                  Доставка товаров с рынка
                </Typography>
                <Typography variant='h1' color='primary'>
                  Садовод
                </Typography>
                <HeroDivider
                  variant='fullWidth'
                  flexItem
                  sx={theme => ({
                    borderColor: theme.palette.primary.main,
                    borderWidth: 2,
                    mb: 2,
                  })}
                />
                <Typography color='secondary' variant='h2' noWrap>
                  Покупай выгодно!!
                </Typography>
                <Typography color='secondary' variant='body1' noWrap>
                  доставка по всей РОССИИ • ЛДНР • КРЫМ
                </Typography>
              </Stack>
              <Stack
                alignItems={{ xs: 'center', md: 'flex-end' }}
                justifyContent='center'
                spacing={2}
                sx={{ height: '100%' }}
              >
                <Button
                  href='tel:+7 (949) 516-25-12'
                  color='white'
                  component={Link}
                  sx={{
                    px: 2,
                    borderRadius: '3px',
                    lineHeight: 2,
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                  }}
                >
                  +7 (949) 516-25-12
                </Button>
                <Button
                  variant='contained'
                  color='yellow'
                  size='small'
                  sx={{
                    px: 4,
                    borderRadius: `3px`,
                    lineHeight: 2,
                    fontSize: { xs: '1.8rem', sm: '2rem' },
                  }}
                >
                  Сделать заказ
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid md={2} lg xl />
        </Grid>
      </Container>
    </HeroBackground>
  );
};

export default Hero;
