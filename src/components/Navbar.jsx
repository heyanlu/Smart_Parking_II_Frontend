import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PAGES } from "../constants";

import Button from "@mui/material/Button";
import { AppBar, Menu, MenuItem, Toolbar } from "@mui/material";
import "./Navbar.css";

const pages = [PAGES.HOME, PAGES.CUSTOMER, PAGES.ADMIN];

function Navbar() {
  // navigate
  const navigate = useNavigate();

  // Menu control
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (page) => {
    setAnchorEl(null);
    navigate(`/${page}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          color="inherit"
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={() => handleClose(page)}>
              {page}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
