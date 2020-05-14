import React from "react";
import FormControl from "./FormControl";
import { connect } from "react-redux";

import { setLanguage } from "../../store/actions/language";
const FormControlContainer = (props) => {
  return <FormControl {...props} />;
};

const mapStateToProps = ({ constants }) => ({
  languages: constants.languages,
});

const mapDispatchToProps = {
  setLanguage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormControlContainer);
