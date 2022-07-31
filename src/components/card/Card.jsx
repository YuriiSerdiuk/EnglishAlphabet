import React ,{ useState }from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from 'classnames';

import check from '../../assets/icons/check.png';
import cross from '../../assets/icons/cross.png';

import { makeSound, getMediaQuery } from "../../utils/helper";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "row",
    '&:hover': {
      // border: '1px solid red',
    },
  },
  letter: {
    flexGrow: 1,
    width: "100%",
    fontSize: "100px",
    textAlign:"center"
  },

  imgBlock: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    animationName: 'example',

  },
  img: { width: "80%" },


  animation:{
    visibility: "visible",
    opacity: 0,
    width: '100%',
  },


  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      visibility: 'visible',
      transform: "translateY(0)"
    },
    "20%": {
      opacity: 0.2,
      transform: "scale(0.2)"
    },
    "40%": {
      opacity: 0.4,
      transform: "scale(0.4)"
    },
    "100%": {
      opacity: 1,
      transform: "scale(0)"
    }
  },
  activeWinLoseImage: {
    visibility: "hidden",
    opacity: 0,
    animation: "$fadeIn 2s ease-in-out"
  },

  disabledWinLoseImage: {
    visibility: "hidden",
    opacity: 0,
  },

  imgText: {
    fontSize: "1rem",
    color: "black",
    textAlign: "center",
    textShadow: "0 0 0 ",
  },
  phone: {
    width: "100%",
    textAlign: "center",
    fontSize: "3rem",
  },
  number: {
    textAlign: "center",
    width: "100%",
    fontSize: "5rem",
    '&:active': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },
  },
}));

const Card = (props) => {
  const { letter, src, name, audioAlphabet, hideLogo, soundLoud,withWinsIcons, randomLetter, callback, language, audioNumbers } = props;

  const [showAnimation, setShowAnimation] =  useState(false);


  const classes = useStyles();
  const media = {
    phone: useMediaQuery(" (min-width: 200px) and (max-width: 480px)"),
    laptop: useMediaQuery("(min-width: 481px) and (max-width: 979px)"),
    desctop: useMediaQuery("(min-width : 980px)"),
  };

  const result = getMediaQuery(media);
  const phoneValidate = result && result[0] === "phone";
  const isGuessedLetter = randomLetter === letter;

  return (
    <div
        className={classes.card}
        onClick={()=>{
            if(language) {
              makeSound(letter, audioNumbers[language], soundLoud);
            }else {
              setShowAnimation(true)
              setTimeout(()=>{setShowAnimation(false)},1000)
              makeSound(letter, audioAlphabet, soundLoud);
              isGuessedLetter && callback && callback(letter);
            }
        }}

    >
      <div
        className={
          `${hideLogo
            ? classes.number
            : classes[phoneValidate ? "phone" : "letter"]} unselectable`
        }
      >
        {letter}
      </div>
      {withWinsIcons && (
     <div className={classes.imgBlock}>
       <img
           className={classNames(`${ showAnimation && classes.activeWinLoseImage }  ${classes.animation}`) }
           src={ isGuessedLetter  ? check : cross}
           alt={name ? name : "text"}
       />
     </div>
      )}
      {!phoneValidate && !hideLogo && (
        <div className={classes.imgBlock}>
          <img
            className={classes.img}
            src={src ? src : ""}
            alt={name ? name : "text"}
            onClick={(e) => {
              makeSound(name, audioAlphabet, soundLoud);
              e.stopPropagation();
            }}
          />
          <p
            onClick={(e) => {
              makeSound(name, audioAlphabet, soundLoud);
              e.stopPropagation();
            }}
            className={`${classes.imgText} unselectable`}
          >
            {name ? name : "text"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
