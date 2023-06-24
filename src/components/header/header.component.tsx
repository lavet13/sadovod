import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Navigation from '../navigation/navigation.component';
import SubNavigation from '../sub-navigation/sub-navigation.component';
import Logo from '../logo/logo.component';

const Header = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {isSmall ? (
        <>
          <Navigation></Navigation>
          <SubNavigation></SubNavigation>
        </>
      ) : (
        <AppBar
          position='static'
          sx={{ backgroundColor: theme.palette.white.main }}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <IconButton
              size='large'
              edge='start'
              color='primary'
              aria-label='menu'
              sx={{ ml: 1 }}
            >
              <Menu />
            </IconButton>
            <Logo />
            <Button
              sx={{ lineHeight: 3.5 }}
              color='primary'
              variant='contained'
            >
              Каталог
            </Button>
          </Stack>
        </AppBar>
      )}
    </>
  );
};

export default Header;
