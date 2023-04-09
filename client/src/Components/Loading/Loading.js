import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import "../Loading/Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <h1>LOADING</h1>
      <Box>
        <CircularProgress color="inherit" />
      </Box>
    </div>
  );
}

export default Loading;
