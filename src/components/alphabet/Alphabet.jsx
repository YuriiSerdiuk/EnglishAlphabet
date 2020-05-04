import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Howl, Howler } from "howler";

import { styleAlphabet, audioAlphabet } from "../../assets/alphabet/alphabet";
import { makeSound } from "../../utils/helper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "start",
    // height: "100px",
    // fontSize: "100px",
    textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.1em black",
    // color: theme.palette.text.secondary,
  },
  card: {
    display: "flex",
    flexDirection: "row",
  },
  letter: { flexGrow: 1, width: "100%", fontSize: "60px" },

  imgBlock: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  img: { width: "50%" },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow({ styleLaters }) {
    return (
      <React.Fragment>
        {styleLaters.map(
          ({ letter, color, src, name, borderColor, backgroundImage }) => {
            return (
              <Grid key={letter} item xs={2} style={{ minWidth: "150px" }}>
                <Paper
                  id={letter}
                  key={letter}
                  onClick={() => {
                    makeSound(letter, Howl, Howler, audioAlphabet);
                  }}
                  className={classes.paper}
                  elevation={3}
                  style={{
                    color: `${color}`,
                    //   backgroundImage: backgroundImage ? backgroundImage : "",
                    //   backgroundPosition: "right",
                    //   backgroundSize: "contain",
                    //   backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={classes.card}>
                    <div className={classes.letter}>{letter}</div>
                    <div className={classes.imgBlock}>
                      <img
                        className={classes.img}
                        src={src ? src : ""}
                        alt={name ? name : "text"}
                      />
                      <p>{name ? name : "text"}</p>
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          }
        )}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs spacing={3}>
          <FormRow styleLaters={styleAlphabet} />
        </Grid>
      </Grid>
    </div>
  );
}
