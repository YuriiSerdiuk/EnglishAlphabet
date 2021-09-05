import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "../card";
import { makeSound, getMediaQuery } from "../../utils/helper";

const useStyles = makeStyles((theme) => {
  const defaultStyle = {
    padding: theme.spacing(2),
    textAlign: "start",
    textShadow: "5px 1px 3px #969eb1",
    color: theme.palette.text.secondary,
  };
  return {
    root: {
      flexGrow: 1,
    },
    pointer:{ cursor:"pointer"},
    paper: { ...defaultStyle },
    phone: { ...defaultStyle, backgroundColor: "#ffff0042" },
    laptop: { ...defaultStyle, backgroundColor: "#ffff0042" },
    desctop: { ...defaultStyle, backgroundColor: "#ffff0042" },
  };
});

function FormRow(props) {
  const { soundLoud } = props;
  const {
    styleLaters,
    audioAlphabet,
    hideLogo,
    language,
    audioNumbers,
  } = props;
  const classes = useStyles();
  const media = {
    phone: useMediaQuery(" (min-width: 200px) and (max-width: 480px)"),
    laptop: useMediaQuery("(min-width: 481px) and (max-width: 979px)"),
    desctop: useMediaQuery("(min-width : 980px)"),
  };

  const result = getMediaQuery(media);

  return (
    <React.Fragment>
      {styleLaters.map(({ letter, color, src, name }) => {
        return (
          <Grid key={letter} item xs={4} sm={3} md={2} lg={2}>
            <Paper
              key={letter}
              onClick={() => {
                language &&
                  makeSound(letter, audioNumbers[language], soundLoud);
                !hideLogo && makeSound(letter, audioAlphabet, soundLoud);
              }}
              className={`${classes[result && result[0]]} ${classes.pointer} `}
              elevation={3}
              style={{
                color: `${color}`,
              }}
            >
              <Card
                letter={letter}
                src={src}
                name={name}
                audioAlphabet={audioAlphabet}
                hideLogo={hideLogo}
              />
            </Paper>
          </Grid>
        );
      })}
    </React.Fragment>
  );
}

export default FormRow;
