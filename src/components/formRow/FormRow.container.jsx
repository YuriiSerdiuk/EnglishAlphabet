import React from "react";
import FormRow from "./FormRow";

import { connect } from "react-redux";

const SettingContainer = (props) => {
  return <FormRow {...props} />;
};

const mapStateToProps = ({ settings }) => {
  return {
    soundLoud: settings.soundLoud,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
