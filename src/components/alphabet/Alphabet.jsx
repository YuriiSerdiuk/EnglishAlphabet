import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow({ laters }) {
    return (
      <React.Fragment>
        {laters.map((later) => {
          return (
            <Grid item xs={2}>
              <Paper className={classes.paper} elevation={3}>
                {later}
              </Paper>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow laters={["A", "B", "C", "D", "E", "F"]} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow laters={["G", "H", "I", "J", "K", "L"]} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow laters={["M", "N", "O", "P", "Q", "R"]} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow laters={["S", "T", "U", "V", "W", "R"]} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow laters={["X", "Y", "Z"]} />
        </Grid>
      </Grid>
    </div>
  );
}
