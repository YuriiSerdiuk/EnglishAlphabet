import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialpadIcon from "@material-ui/icons/Dialpad";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import SettingsIcon from "@material-ui/icons/Settings";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import { Link, withRouter } from "react-router-dom";

import {
  alphabet,
  chooseLenguageAlphabet,
  chooseDrawerNumber,
  chooseDrawerSetting,
  chooseDrawerContacts,
  chooseLenguageData,
} from "../../constants/constant";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  dividerTitle: {
    textAlign: "center",
    padding: "5px",
  },
}));

const Draver = (props) => {
  // console.log(props);
  const { open, setOpen, language } = props;
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Typography className={classes.dividerTitle}>
        {chooseLenguageAlphabet[language]}
      </Typography>
      <List>
        {alphabet.map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              <SortByAlphaIcon />
            </ListItemIcon>
            <Link
              to={`/${text}`}
              onClick={() => {
                // setLanguage(text);
              }}
            >
              <ListItemText
                primary={
                  chooseLenguageData[language] &&
                  chooseLenguageData[language][index]
                }
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography className={classes.dividerTitle}>
        {" "}
        {chooseDrawerNumber[language]}
      </Typography>
      <List>
        {["numbers"].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <DialpadIcon /> : <DialpadIcon />}
            </ListItemIcon>
            <Link
              to={`/${text}`}
              onClick={() => {
                // setLanguage(text);
              }}
            >
              <ListItemText primary={chooseDrawerNumber[language]} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography className={classes.dividerTitle}>{"Games "}</Typography>
      <List>
        {["games"].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <Link to={`/${text}`} onClick={() => {}}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography className={classes.dividerTitle}>
        {" "}
        {chooseDrawerSetting[language]}
      </Typography>
      <List>
        {["setting"].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <Link to={`/${text}`} onClick={() => {}}>
              <ListItemText primary={chooseDrawerSetting[language]} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography className={classes.dividerTitle}>
        {" "}
        {chooseDrawerContacts[language]}
      </Typography>
      <List>
        {["contacts"].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              <ContactPhoneIcon />
            </ListItemIcon>
            <Link to={`/${text}`} onClick={() => {}}>
              <ListItemText primary={chooseDrawerContacts[language]} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default withRouter(Draver);
