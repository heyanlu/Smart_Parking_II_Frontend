import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PAGES } from "../constants";

import {
  AppBar,
  MenuItem,
  Toolbar,
  IconButton,
  Switch,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

import {
  StyledIconButton,
  StyledTypography,
  StyledBox,
  StyledSamllScreenBox,
  StyledSamllScreenMenu,
  StyledSamllScreenParkingIcon,
} from "./NavbarStyles";

const pages = Object.keys(PAGES);

function Navbar({ setMode, mode }) {
  const navigate = useNavigate();

  //Menu control
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = (page) => {
    setAnchorNav(null);
    navigate(`/${page}`);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <StyledIconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <LocalParkingIcon />
        </StyledIconButton>
        <StyledTypography variant="h6" component="div">
          Smart Parking
        </StyledTypography>
        <StyledBox>
          {pages.map((page) => (
            <Button color="inherit" key={page} onClick={() => closeMenu(page)}>
              {page}
            </Button>
          ))}
          <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
        </StyledBox>
        {/* responsive for smaller screen */}
        <StyledSamllScreenBox>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <StyledSamllScreenMenu
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            anchorEl={anchorNav}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => closeMenu(page)}>
                {page}
              </MenuItem>
            ))}
            <Switch />
          </StyledSamllScreenMenu>
        </StyledSamllScreenBox>
        <StyledSamllScreenParkingIcon
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
