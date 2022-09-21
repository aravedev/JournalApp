import { Box, Button, Grid, List, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Navbar, SideBar } from "../components";

const drawerWidth = 300;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth}></Navbar>
      <SideBar drawerWidth={drawerWidth}></SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
