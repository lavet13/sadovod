import { ClipPathGreenBackground, HeroBackground, Image } from './hero.styles';
import WomanWithBaggages from '../../assets/images/womanWithBaggages.png';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';

const Hero = () => {
  return (
    <HeroBackground>
      <ClipPathGreenBackground />
      <Container>
        <Grid container columns={24}>
          <Grid lg={12}>
            <Image src={WomanWithBaggages} />
          </Grid>
          <Grid lg={9} alignSelf={'start'} mt={10}>
            <Stack alignItems={'flex-end'} mb={10}>
              <Typography color='secondary' variant='h3' mb={-2}>
                Доставка товаров с рынка
              </Typography>
              <Typography variant='h1' color='primary'>
                Садовод
              </Typography>
              <Divider
                variant='fullWidth'
                flexItem
                sx={theme => ({
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                })}
              />
              <Typography color='secondary' variant='h2' noWrap>
                Покупай выгодно!!
              </Typography>
              <Typography color='secondary' variant='body1' noWrap>
                доставка по всей РОССИИ • ЛДНР • КРЫМ
              </Typography>
            </Stack>
            <Stack alignItems={'flex-end'}>
              <Button
                href='tel:+7 (949) 516-25-12'
                color='white'
                component={Link}
              >
                +7 (949) 516-25-12
              </Button>
              <Button variant='contained' color='yellow' size='large'>
                Сделать заказ
              </Button>
            </Stack>
          </Grid>
          <Grid lg />
        </Grid>
      </Container>
    </HeroBackground>
  );
};

export default Hero;
