import React from "react";
import Drawer from "./Draver";
import { setLanguage } from "../../store/actions/language";

import { connect } from "react-redux";

const DrawerContainer = (props) => {
  return <Drawer {...props} />;
};

const mapStateToProps = ({ alphabets }) => ({});

const mapDispatchToProps = {
  setLanguage: setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
