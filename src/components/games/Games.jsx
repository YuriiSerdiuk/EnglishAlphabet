import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link, Outlet } from 'react-router-dom';
import alphfabet from "../../assets/images/englishAlphabet.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection:"column",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    width:'30%',
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
            <h3> Games</h3>
            <Link
                style={{ display: 'block', margin: '1rem 0' }}
                to={`/games/english-letter-pronunciation`}
                key={'english-letter-pronunciation'}
            >
              <Paper className={classes.paper}>Check letter</Paper>
            </Link>
      <Outlet />
    </div>
  );
}
