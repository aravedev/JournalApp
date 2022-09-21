import { TurnedInNot, TurnedInOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Jhon Smith
          </Typography>
          <Toolbar>
            <Divider></Divider>
            <List>
              {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary={text}></ListItemText>
                      <ListItemText
                        secondary={"Lorem ipsum dolor sit amet consectetur ."}
                      ></ListItemText>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </Drawer>
      </Box>
    </>
  );
};
