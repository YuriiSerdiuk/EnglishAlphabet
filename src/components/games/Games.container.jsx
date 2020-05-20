import React from "react";
import Games from "./Games";
import { setSoundValue } from "../../store/actions/setting";

import { connect } from "react-redux";

const GamesContainer = (props) => {
  return <Games {...props} />;
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  setSoundValue: setSoundValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
