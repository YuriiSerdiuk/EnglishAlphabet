import React from "react";
import Card from "./Card";

import { connect } from "react-redux";

const CardContainer = (props) => {
  return <Card {...props} />;
};

const mapStateToProps = ({ settings }) => {
  return {
    soundLoud: settings.soundLoud,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
