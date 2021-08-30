import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { styleAlphabet } from "../../assets/alphabet/alphabet";
import FormRow from "../formRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  greed: { margin: "auto" },
}));

export default function NestedGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs spacing={1} className={classes.greed}>
          <FormRow styleLaters={styleAlphabet} {...props} />
        </Grid>
      </Grid>
    </div>
  );
}
