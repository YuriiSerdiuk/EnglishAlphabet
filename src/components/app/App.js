import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";



import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EnglishAlphabet from "../alphabet";
import Draver from '../draver'

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
    textAlign:"center",
    padding:"5px"
  },
}));

const PersistentDrawerLeft = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
          <Typography variant="h6" noWrap>
            English Alphabet
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
      <Draver open={open}  setOpen={setOpen}/>
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
            <Route path="/ukrain">
              <p>Ukrain alphabet</p>
            </Route>
            <Route path="/russion">
              <p>Russion alphabet</p>
            </Route>
            <Route path="/german">
              <p>German alphabet</p>
            </Route>
          </Switch>
      </main>
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log("state", state);
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
    handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersistentDrawerLeft);
