import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function ContinuousSlider(props) {
  const { soundLoud, setSoundValue, hide, setShowValue } = props;
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setSoundValue(Number((newValue / 100).toFixed(1)));
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom></Typography>
      {!hide && <h2>Sound Configuration</h2>}
      <Grid
        container
        spacing={2}
        onMouseEnter={() => {
          setShowValue && setShowValue(true);
        }}
        onMouseLeave={() => {
          setShowValue && setShowValue(false);
        }}
      >
        <Grid item>{!hide && <VolumeDown />}</Grid>
        <Grid item xs>
          <PrettoSlider
            value={soundLoud * 100}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>{!hide && <VolumeUp />}</Grid>
      </Grid>
      {/* <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" /> */}
    </div>
  );
}
