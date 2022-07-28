import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

import App from "./App";
import { init } from "../../store/actions/alphabet";

const AppContainer = ( ) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
  }, [dispatch]);

  return <App  />;
};

export default AppContainer;
