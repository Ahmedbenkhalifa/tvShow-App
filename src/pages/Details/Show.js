import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import useShow from "../../hooks/useShow";
import Details from "./Details";
import movieTrailer from "movie-trailer";
import TrailerModal from "../../components/TrailerModal";
import List from "./List";

const Show = () => {
  const [show, isLoading] = useShow();
  const [open, setOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const handleOpen = () => {
    setOpen(true);
    movieTrailer(show?.name || show?.title || "")
      .then((url) => {
        const urlParms = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParms.get("v"));
        console.log("urlparams", urlParms);
        console.log("url", urlParms.get("v"));
      })
      .catch((error) => console.log(error));
  };
  const handleClose = () => setOpen(false);
  console.log(show?.networks[0].name);
  return (
    <Box>
      {!isLoading && show && (
        <Box sx={{ minHeight: "100vh" }}>
          <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
            <Box sx={{ position: "relative", width: "100%" }}>
              <img
                style={{
                  height: "100vh",
                  width: "99.5vw",
                  objectFit: "cover",
                  filter: "brightness(50%) blur(4px)",
                }}
                src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
                alt={""}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  transform: "translateY(10px)",
                  background: "linear-gradient(180deg,transparent 0%,rgb(230, 230, 230) 100%)",
                  width: "100%",
                  height: "200px",
                }}
              ></Box>
            </Box>
          </Box>
          <Container maxWidth="lg">
            <Details
              title={show?.name}
              vote_average={show?.vote_average}
              genres={show?.genres}
              year={show?.first_air_date}
              overview={show?.overview}
              handleOpen={handleOpen}
            />
            <Typography variant="h6" sx={{ color: "white" }}>
              Executive producers:
              {show?.created_by.map((elem) => (
                <span style={{ marginRight: "10px" }}>{elem.name}</span>
              ))}
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              No. of seasons : {show?.number_of_seasons}
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              Original network :{show?.networks[0].name}
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              Original release :{show?.first_air_date}
            </Typography>
            <TrailerModal trailerUrl={trailerUrl} open={open} handleClose={handleClose} />
          </Container>
          <Typography textAlign={"center"} variant="h5" sx={{ color: "white" }}>
            {show?.tagline}
          </Typography>
          <List seasons={show?.seasons} />
        </Box>
      )}
    </Box>
  );
};

export default Show;
