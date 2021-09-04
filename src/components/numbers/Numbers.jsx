import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FormRow from "../formRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  greed: { margin: "auto" },
}));

const Numbers = (props) => {
  const classes = useStyles();
  const { numbers = [] } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs spacing={1} className={classes.greed}>
          <FormRow styleLaters={numbers} {...props} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Numbers;
