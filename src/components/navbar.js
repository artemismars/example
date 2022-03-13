import { AppBar, IconButton, Toolbar, useScrollTrigger } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import PropTypes from "prop-types";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

export default function Navbar(props) {
  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
