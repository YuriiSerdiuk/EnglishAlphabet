import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link, Outlet } from 'react-router-dom';
import alphfabet from "../../assets/images/englishAlphabet.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 200,
    backgroundColor: "grey",
    backgroundImage:`url(${alphfabet})`,
    backgroundRepeat: "round",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={1}>
        <Grid xs={12} sm={4} spacing={3}>
          <Grid >
            <h3> Games</h3>
            <Paper className={classes.paper}>Check letter</Paper>
            <Link
                style={{ display: 'block', margin: '1rem 0' }}
                to={`/games/english-letter-pronunciation`}
                key={'english-letter-pronunciation'}
            >
              {'english-letter-pronunciation'}
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
}
