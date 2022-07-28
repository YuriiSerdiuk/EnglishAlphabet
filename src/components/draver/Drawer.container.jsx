import React from "react";
import { useSelector } from 'react-redux'

import Drawer from "./Draver";

const DrawerContainer = (props) => {
  const language = useSelector((state) => state.language)

  return <Drawer language={language} {...props}  />;
};

export default DrawerContainer;
