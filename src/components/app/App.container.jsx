import React, { useEffect } from "react";
import { connect } from "react-redux";

import App from "./App";
import { init } from "../../store/actions/alphabet";

const AppContainer = ({ initLanguage, otherProps, title }) => {
  useEffect(() => {
    initLanguage();
  }, [initLanguage]);
  return <App {...otherProps} title={title} />;
};

const mapStateToProps = (state) => {
  return { title: state.language };
};

const mapDispatchToProps = {
  initLanguage: init,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
