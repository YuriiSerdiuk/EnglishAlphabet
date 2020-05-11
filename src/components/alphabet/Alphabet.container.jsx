import React from "react";
import Alphabet from "./Alphabet";
import { audioAlphabet } from "../../assets/alphabet/alphabet";

const AlphabetConteiner = (props) => {
  return <Alphabet {...props} audioAlphabet={audioAlphabet} />;
};

export default AlphabetConteiner;
