import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import { Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { themeMUI } from "../page";

const pagesL = [
  {
    name: "sản phẩm",
    href: "#san-pham",
  },
];
const pagesR = [
  {
    name: "giá trị",
    href: "#gia-tri",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const DesktopNavBar = () => {
    return (
      <Stack
        width={"100%"}
        direction='row'
        height={"84px"}
        display={{
          xs: "none",
          md: "flex",
        }}
      >
        <Stack flexBasis={"44.99%"} direction='row' justifyContent={"flex-end"}>
          {pagesL &&
            pagesL?.map((item) => (
              <Button key={item.name}>
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
        </Stack>
        <Stack flexBasis={"10.99%"} height={"auto"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <a href='/'>
            <Stack width={"84px"} height={"84px"}>
              <img src='/logo.png' />
            </Stack>
          </a>
        </Stack>
        <Stack flexBasis={"44.99%"} direction='row'>
          {pagesR &&
            pagesR?.map((item) => (
              <Button key={item.name}>
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
        </Stack>
      </Stack>
    );
  };
  const MobileNavBar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant='h3' sx={{ my: 2, height: "32px" }}>
          KING STAR
        </Typography>
        <Divider />
        <Stack
          sx={{
            width: "80%",
            paddingLeft: 2,
            paddingTop: 2,
          }}
        >
          {pagesL.map((item) => (
            <Button
              key={item.name}
              sx={{
                justifyContent: "flex-start",
              }}
            >
              <a href={item.href}>{item.name}</a>
            </Button>
          ))}
          {pagesR.map((item) => (
            <Button
              key={item.name}
              sx={{
                justifyContent: "flex-start",
              }}
            >
              <a href={item.href}>{item.name}</a>
            </Button>
          ))}
        </Stack>
      </Box>
    );

    return (
      <Stack
        width={"100%"}
        direction='row'
        height={"64px"}
        display={{
          xs: "flex",
          md: "none",
        }}
        pl={1}
        justifyContent={"space-between"}
      >
        <Stack flexBasis={"10.99%"} height={"auto"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <a href='/'>
            <Stack width={"64px"} height={"64px"}>
              <img src='/logo.png' />
            </Stack>
          </a>
        </Stack>
        <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2 }}>
          <MenuIcon
            sx={{
              fill: themeMUI.palette.primary.main,
            }}
          />
        </IconButton>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          anchor='right'
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
          }}
        >
          {drawer}
        </Drawer>
      </Stack>
    );
  };
  return (
    <AppBar
      position='static'
      sx={{
        background: "white",
      }}
    >
      <Toolbar disableGutters>
        <DesktopNavBar />
        <MobileNavBar />
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
