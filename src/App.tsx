import { Divider } from '@mui/material';
import Hero from './components/hero/hero.component';
import Navigation from './components/navigation/navigation.component';
import SubNavigation from './components/sub-navigation/sub-navigation.component';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <SubNavigation></SubNavigation>
      <Hero></Hero>
      <Divider
        variant='fullWidth'
        color='secondary'
        sx={theme => ({
          borderColor: theme.palette.secondary.main,
          borderWidth: 10,
          boxShadow: theme.shadows[1],
        })}
      />
    </>
  );
}

export default App;
