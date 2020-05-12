import React from "react";
import UkraineAlphabet from "./UkraineAlphabet";

import { connect } from "react-redux";
import { audioUkraineAlphabet } from "../../constants/ukraineAlphabet";

const UkraineAlphabetContainer = (props) => {
  return <UkraineAlphabet {...props} audioAlphabet={audioUkraineAlphabet} />;
};

const mapStateToProps = ({ alphabets }) => ({
  alphabet: alphabets.ukraine,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UkraineAlphabetContainer);
