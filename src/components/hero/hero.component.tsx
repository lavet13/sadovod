import {
  ClipPathGreenBackground,
  HeroBackground,
  HeroDivider,
  PlaceholderForImage,
} from './hero.styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, Link, Stack, Typography } from '@mui/material';

const Hero = () => {
  return (
    <HeroBackground>
      <ClipPathGreenBackground />
      <Container>
        <Grid container columns={24}>
          <Grid xs={0} md={10} lg={12}>
            <PlaceholderForImage />
          </Grid>
          <Grid md={3} lg xl />
          <Grid xs={24} md={11} lg={9} sx={{ mt: { xs: 10, md: 12 } }}>
            <Stack height={'100%'} spacing={15}>
              <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
                <Typography
                  color='secondary'
                  variant='subtitle1'
                  mb={{ md: -2, sm: -1.2, xs: -1 }}
                  noWrap
                >
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
                    borderWidth: { xs: 1, sm: 2 },
                    mb: { md: 2, xs: 1 },
                  })}
                />
                <Typography color='secondary' variant='h2' noWrap>
                  Покупай выгодно!!
                </Typography>
                <Typography
                  color='secondary'
                  variant='h4'
                  sx={{ mt: { md: 0, sm: 0.5 } }}
                  noWrap
                >
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
                  noWrap
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
                    whiteSpace: 'nowrap',
                    fontSize: { xs: '1.8rem', sm: '2rem' },
                  }}
                >
                  Сделать заказ
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </HeroBackground>
  );
};

export default Hero;
