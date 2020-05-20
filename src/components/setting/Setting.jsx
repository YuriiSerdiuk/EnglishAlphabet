import React from "react";
import Box from "@material-ui/core/Box";
import Sound from "./Sound";
const Setting = (props) => {
  return (
    <Box component="div" m={1}>
      <h4>Sound configured</h4>
      <Sound {...props} />
    </Box>
  );
};

export default Setting;
