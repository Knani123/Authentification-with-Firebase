import React from "react";
import { Route, Switch,useHistory} from 'react-router-dom';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import EmailIcon from "@material-ui/icons/Email";
import SettingsIcon from "@material-ui/icons/Settings";
import SimpleMenu from "./SimpleMenu";
import Home from "./components/Home";
import Messages from "./components/Messages";
import Settings from "./components/Settings";
import Errors from "./components/Errors";
import Appointments from "./components/Appointments";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const history=useHistory()
const pushURL=(endpoint)=>history.push(`/${endpoint}`)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            NavBar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ClearIcon />
          </IconButton>
        </div>
        <Divider />

        <List>
          {[
            <Typography onClick={()=>pushURL("")}>Home</Typography>,
            <SimpleMenu
              title="Appointments"
              ListofItem={["list ofAppointments"]}
            />,
            <SimpleMenu
              title="Messages"
              ListofItem={["MailBox", "Send Mail"]}
            />,
            <Typography onClick={()=>pushURL("Settings")}>Settings</Typography>,

          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {
                  [
                    <HomeIcon onClick={()=>pushURL("")}/>,
                    <SimpleMenu
                      title={<HowToRegIcon onClick={()=>pushURL("listofAppointments")}/>}
                      ListofItem={["list ofAppointments"]}
                    />,
                    <SimpleMenu
                      title={<EmailIcon onClick={()=>pushURL("MailBox")}/>}
                      ListofItem={["MailBox", "Send Mail"]}
                    />,
                    <SettingsIcon onClick={()=>pushURL("Settings")}/>
                  ][index]
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/listofAppointments" component={Appointments}/>
            <Route path="/SendMail" component={Messages}/>
            <Route path="/MailBox" component={Messages}/>
            <Route path="/settings" component={Settings}/>
            <Route  component={Errors}/>
            </Switch>
      </main>
    </div>
  );
}
