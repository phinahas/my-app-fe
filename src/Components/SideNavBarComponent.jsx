/* eslint-disable import/first */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExpenseTrackerIndexPage from "../Pages/ExpenseTracker/ExpenseTrackerIndexPage";

//import AdminStatisticsPage from "../../Pages/Admin/AdminStatisticsPage";
//import AdminTablePage from "../../Pages/Admin/AdminTablePage";
//import AdminSettingsPage from "../../Pages/Admin/AdminSettingsPage";

// import {
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   Navigate,
//   useLocation,
// } from "react-router-dom";


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
function SideNavBarComponent() {
    
  const menuNames =  [
        {
          text: "Expense",
          icon: <TrendingUpIcon/>,
          path: "/",
        },
        
        {
          text: "Settings",
          icon: <SettingsIcon />,
          path: "/settings",
        },
        {
          text: "LogOut",
          icon: <ExitToAppIcon />,
          path: "/logout",
        },
      ];

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List className="list">
        {menuNames.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              maxWidth: 360,
              marginLeft: 1,
              marginTop: 1,
              borderRadius: 2,
              borderWidth: 1,

              "&:hover": {
                background: "#000075",
              },
            }}
            // onClick={() => {
            //   navigate(item.path);
            // }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText className="list-name" primary={item.text} />
          </ListItem>
        ))}
        <hr />
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <h4 className="admin-pannel"></h4>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="schedule" element={<AdminDateSchedulePage />} />
          <Route path="mail" element={<AdminEmailPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="logout" element={<LogoutRoute/>} />
        </Routes> */}
        <div className="display-div">
           {/* <AdminStatisticsPage/> */}
           {/* <AdminTablePage/> */}
           {/* <AdminSettingsPage/> */}
           <ExpenseTrackerIndexPage/>
              
        </div>
      </div>
    </div>
  );
}
SideNavBarComponent.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default SideNavBarComponent;
