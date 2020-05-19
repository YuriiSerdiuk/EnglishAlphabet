import React from "react";
import Setting from "./Setting";
import { setSoundValue } from "../../store/actions/setting";

import { connect } from "react-redux";

const SettingContainer = (props) => {
  return <Setting {...props} />;
};

const mapStateToProps = ({ settings }) => {
  return {
    soundLoud: settings.soundLoud,
  };
};

const mapDispatchToProps = {
  setSoundValue: setSoundValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
