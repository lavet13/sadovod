import { HeroBackground, Image } from './hero.styles';
import WomanWithBaggages from '../../assets/images/womanWithBaggages.png';
import Grid from '@mui/material/Unstable_Grid2';

const Hero = () => {
  return (
    <HeroBackground>
      <Grid container>
        <Grid xs={0} md={6}>
          <Image src={WomanWithBaggages} />
        </Grid>
        <Grid sm={12} md={6}></Grid>
      </Grid>
    </HeroBackground>
  );
};

export default Hero;
