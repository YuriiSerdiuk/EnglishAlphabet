import React from "react";
import UkraineAlphabet from "./UkraineAlphabet";

import { connect } from "react-redux";
import { audioRusianAlphabet } from "../../constants/russianAlphabet";

const UkraineAlphabetContainer = (props) => {
  return <UkraineAlphabet {...props} audioAlphabet={audioRusianAlphabet} />;
};

const mapStateToProps = ({ alphabets }) => ({
  alphabet: alphabets.ukraine,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UkraineAlphabetContainer);
