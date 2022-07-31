import React from "react";
import Card from "./Card";
import {useSelector} from "react-redux";

const CardContainer = (props) => {
  const soundLoud =  useSelector(({settings}) => settings.soundLoud);
  return <Card  soundLoud={soundLoud} {...props} />;
};

export default CardContainer;
