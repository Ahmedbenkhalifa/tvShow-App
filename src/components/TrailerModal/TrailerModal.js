import React, { useState } from "react";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";
import YouTube from "react-youtube";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  width: 900,
  MaxHeight: 700,
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(255,255,255,0.5)",
  borderRadius: 2,
  boxShadow: 24,
  backdropFilter: "blur(5px)",
};
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const TrailerModal = ({ trailerUrl, open, handleClose }) => {
  return (
    <MuiModal open={open} onClose={handleClose} sx={{ backdropFilter: "blur(5px)"}}>
      <Box sx={style}>
        <YouTube videoId={trailerUrl} opts={opts} />
      </Box>
    </MuiModal>
  );
};

export default TrailerModal;
