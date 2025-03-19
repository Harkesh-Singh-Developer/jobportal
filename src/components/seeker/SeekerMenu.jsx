import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

function SeekerMenu() {
  const [menu1El, setMenu1El] = useState(null);
  const [menu2El, setMenu2El] = useState(null);
  const [menu3El, setMenu3El] = useState(null);

  const openMenu1 = Boolean(menu1El);
  const openMenu2 = Boolean(menu2El);
  const openMenu3 = Boolean(menu3El);

  const handleClose = () => {
    setMenu1El(null);
    setMenu2El(null);
    setMenu3El(null);
  };
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box
        onMouseEnter={(e) => setMenu1El(e.currentTarget)}
        onMouseLeave={handleClose}
      >
        <Button color="inherit">Menu 1</Button>
        <Menu
          anchorEl={menu1El}
          open={openMenu1}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={handleClose}>Submenu 1-1</MenuItem>
          <MenuItem onClick={handleClose}>Submenu 1-2</MenuItem>
          <MenuItem onClick={handleClose}>Submenu 1-3</MenuItem>
        </Menu>
      </Box>

      <Box
        onMouseEnter={(e) => setMenu2El(e.currentTarget)}
        onMouseLeave={handleClose}
      >
        <Button color="inherit">Menu 2</Button>
        <Menu
          anchorEl={menu2El}
          open={openMenu2}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={handleClose}>Submenu 2-1</MenuItem>
          <MenuItem onClick={handleClose}>Submenu 2-2</MenuItem>
          <MenuItem onClick={handleClose}>Submenu 2-3</MenuItem>
        </Menu>
      </Box>

      <Box
        onMouseEnter={(e) => setMenu3El(e.currentTarget)}
        onMouseLeave={handleClose}
      >
        <Button color="inherit">Menu 3</Button>
        <Menu
          anchorEl={menu3El}
          open={openMenu3}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={handleClose}>Submenu 3-1</MenuItem>
          <MenuItem onClick={handleClose}>Submenu 3-2</MenuItem>
          <MenuItem onClick={handleClose}>Submenu 3-3</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}

export default SeekerMenu;
