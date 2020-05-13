import React from "react";
import Numbers from "./Numbers";

import { numbers } from "../../constants/numbers";

const NumbersContainer = (props) => {
  return <Numbers {...props} numbers={numbers} hideLogo={true} />;
};

export default NumbersContainer;
