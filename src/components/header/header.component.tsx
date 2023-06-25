import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  Toolbar,
  Tooltip,
  alpha,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Navigation from '../navigation/navigation.component';
import SubNavigation from '../sub-navigation/sub-navigation.component';
import Logo from '../logo/logo.component';
import React, { ReactElement, useState } from 'react';
import Shopping2 from '../../assets/icons/luggages2.svg';

type HideOnScrollProps = {
  children: ReactElement;
};

const HideOnScroll = (props: HideOnScrollProps) => {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up('md'));

  const handleListItemClick = (
    _: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {isSmall ? (
        <>
          <Navigation></Navigation>
          <SubNavigation></SubNavigation>
        </>
      ) : (
        <>
          <HideOnScroll>
            <AppBar
              position='fixed'
              sx={{ backgroundColor: theme.palette.white.main }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Tooltip title='Меню' arrow>
                  <IconButton
                    size='large'
                    edge='start'
                    color='primary'
                    aria-label='menu'
                    sx={{ ml: 1 }}
                  >
                    <Menu />
                  </IconButton>
                </Tooltip>
                <Logo />
                <Button
                  sx={{ lineHeight: 3.5 }}
                  color='primary'
                  variant='contained'
                  disableElevation
                >
                  Каталог
                </Button>
              </Stack>
            </AppBar>
          </HideOnScroll>
          <Toolbar />
          <Drawer anchor='left' open={true}>
            <Stack
              sx={{
                width: 230,
                height: '100%',
                background: `url(${Shopping2}) bottom right/8rem no-repeat`,
              }}
            >
              <Divider
                variant='fullWidth'
                sx={theme => ({
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                })}
              />
              <List>
                {['Главная', 'Каталог', 'Оплата и доставка'].map(
                  (text, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={event => handleListItemClick(event, index)}
                      >
                        <ListItemText primary={text} disableTypography />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              {/* @Authenticated user */}
              <List sx={{ mb: 'auto' }}>
                {[
                  'Скидочная карта',
                  'Калькулятор доставки',
                  'Мобильное приложение',
                ].map((text, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} disableTypography />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={theme => ({
                      color: theme.palette.error.main,
                      fontWeight: 700,
                      ':hover': {
                        backgroundColor: alpha(theme.palette.error.main, 0.04),
                      },
                    })}
                  >
                    <ListItemText disableTypography primary='Выход' />
                  </ListItemButton>
                </ListItem>
              </List>
            </Stack>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
