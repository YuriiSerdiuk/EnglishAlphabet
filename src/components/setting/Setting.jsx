import React from "react";
import Box from "@material-ui/core/Box";
import SoundControl from "./SoundControl";
const Setting = (props) => {
  return (
    <Box component="div" m={1}>
      <SoundControl {...props} />
    </Box>
  );
};

export default Setting;
