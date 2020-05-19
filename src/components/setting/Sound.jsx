import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinuousSlider(props) {
  const { soundLoud, setSoundValue } = props;
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setSoundValue(Number((newValue / 100).toFixed(1)));
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Sistem Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={soundLoud * 100}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      {/* <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" /> */}
    </div>
  );
}
