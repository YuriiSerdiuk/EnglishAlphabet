import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import FormControl from "../formControl";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EnglishAlphabet from "../alphabet";
import Draver from "../draver";
import RussianAlphabet from "../russianAlphabet";
import UkraineAlphabet from "../ukraineAlphabet";
import Numbers from "../numbers";
import Contacts from "../contacts";
import Setting from "../setting";
import Games from "../games";
import SoundControl from "../setting";

import { languageTitle } from "../../constants/constant";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100px",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    paddingTop: "70px",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  dividerTitle: {
    textAlign: "center",
    padding: "5px",
  },
  nawMenu: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "10px",
  },
  control: { display: "flex", alignItems: "center" },
}));

const PersistentDrawerLeft = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [showValue, setShowValue] = React.useState(false);
  const { title = "" } = props;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
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
          <Box component="div" className={classes.nawMenu}>
            <h1>{languageTitle[title]}</h1>

            <div className={clsx(classes.control)}>
              {showValue && <SoundControl hide setShowValue={setShowValue} />}
              <VolumeUpIcon
                onMouseEnter={() => {
                  setShowValue(true);
                }}
                onMouseLeave={() => {
                  setShowValue(false);
                }}
              />
              <FormControl />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Router>
        <Draver open={open} setOpen={setOpen} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route exact path="/">
              <EnglishAlphabet />
            </Route>
            <Route exact path="/english">
              <EnglishAlphabet />
            </Route>
            <Route path="/ukraine">
              <UkraineAlphabet />
            </Route>
            <Route path="/russian">
              <RussianAlphabet />
            </Route>
            <Route path="/german">
              <p>German alphabet</p>
            </Route>
            <Route path="/numbers">
              <Numbers />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default PersistentDrawerLeft;
