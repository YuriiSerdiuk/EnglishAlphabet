import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { styleAlphabet } from "../../assets/alphabet/alphabet";

console.log(styleAlphabet);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    fontSize: "80px",
    // color: theme.palette.text.secondary,
  },
}));
export default function NestedGrid() {
  const classes = useStyles();

  function FormRow({ laters, styleLaters }) {
    return (
      <React.Fragment>
        {styleLaters.map(({ letter, color, borderColor, backgroundImage }) => {
          return (
            <Grid item xs={2}>
              <Paper
                id={letter}
                onClick={() => {
                  alert(letter);
                }}
                className={classes.paper}
                elevation={3}
                style={{
                  color: `${color}`,
                  textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.1em black",
                  backgroundImage: backgroundImage ? backgroundImage : "",
                  backgroundPosition: "40px 40px",
                  backgroundSize: "cover",
                }}
              >
                {letter}
              </Paper>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            laters={["A", "B", "C", "D", "E", "F"]}
            styleLaters={styleAlphabet.slice(0, 6)}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            laters={["G", "H", "I", "J", "K", "L"]}
            styleLaters={styleAlphabet.slice(6, 12)}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            laters={["M", "N", "O", "P", "Q", "R"]}
            styleLaters={styleAlphabet.slice(12, 18)}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            laters={["S", "T", "U", "V", "W", "X"]}
            styleLaters={styleAlphabet.slice(18, 24)}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow laters={["Y", "Z"]} styleLaters={styleAlphabet.slice(24)} />
        </Grid>
      </Grid>
    </div>
  );
}
