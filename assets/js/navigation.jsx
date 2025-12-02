import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';

const pages = [
  { name: 'Homepage', href: 'https://lyszt.net', icon: <HomeIcon /> },
  { name: 'Contact', href: `mailto:${'jluis.kaldwin'}@${'gmail'}.com`, icon: <EmailIcon /> },
  { name: 'New Website [WIP]', href: 'https://lyszt.net/scarlett-citadel', icon: <LanguageIcon /> },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/lyszt', icon: <GitHubIcon /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/lyszt/', icon: <LinkedInIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/kaldwin__/', icon: <InstagramIcon /> },
  { name: 'CV', href: 'https://drive.google.com/file/d/1yEAZPgopRYWOElEYl4y3Mi0A1oyE5U2D/view?usp=sharing', icon: <DescriptionIcon /> },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Typography variant="h6" sx={{ my: 2, px: 2 }}>
        Navigation
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              component="a"
              href={page.href}
              disabled={page.disabled}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle2" sx={{ my: 2, px: 2, fontWeight: 'bold' }}>
        Reach out to me
      </Typography>
      <List>
        {socialLinks.map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'Lexend',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  color: 'cyan',
                }
              }}
            >
              LYSZT
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    href={page.href}
                    disabled={page.disabled}
                    sx={{ 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      '&:hover': {
                        color: 'cyan',
                        backgroundColor: 'rgba(0, 255, 255, 0.1)',
                      }
                    }}
                  >
                    {page.icon}
                    {page.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}

export default Navigation;
