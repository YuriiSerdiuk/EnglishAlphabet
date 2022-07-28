import React from "react";
import { useDispatch} from "react-redux";

import Games from "./Games";
import { setSoundValue } from "../../store/actions/setting";


const GamesContainer = (props) => {
  const dispatch = useDispatch()

  return <Games setSoundValue = {dispatch(setSoundValue) } {...props} />;
};

export default GamesContainer;
