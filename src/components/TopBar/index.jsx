import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 * @param {Object} props - Props containing context info for TopBar.
 */
function TopBar({ context }) {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit">
          Phạm Văn Chiến
        </Typography>
        <Box>
          <Typography variant="h6" color="inherit">
            {context}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
