import React from "react";
import Numbers from "./Numbers";
import { connect } from "react-redux";
import { numbers } from "../../constants/numbers";

const NumbersContainer = (props) => {
  return <Numbers {...props} numbers={numbers} hideLogo={true} />;
};
const mapStateToProps = (state) => {
  return {
    audioNumbers: state.constants.audioNumbers,
    language: state.language,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NumbersContainer);
