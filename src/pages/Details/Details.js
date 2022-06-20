import React, { useState } from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Grid, useTheme, Paper, Button, Typography, IconButton } from "@mui/material";
import ImdbRating from "../../components/ImdbRatting";

const Details = ({ handleOpen, title, vote_average, genres, year, overview }) => {
  const theme = useTheme();
  const [like, setLike] = useState(false);
  const [unlike, setUnlike] = useState(false);

  return (
    <Grid container spacing={2} style={{ margin: "10vh 0" }}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{ color: "white", letterSpacing: "2px", textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
        }}
      >
        <ImdbRating rating={vote_average} style={{ marginRight: "20px", textShadow: "initial" }} />
        {genres.slice(0, 3).map((elem, k) => (
          <Paper key={k} sx={{ padding: "5px 10px", marginRight: theme.spacing(1) }}>
            {elem.name}
          </Paper>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ color: "white", textShadow: "1px 1px 2px rgb(0 0 0 / 100%)", fontSize: "18px" }}
        >
          {overview.length > 300 ? `${overview.slice(0, 300)}...` : overview}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            backgroundColor: "rgba(109, 109, 110, 0.7)",
            fontWeight: 700,
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(109, 109, 110, 0.4)",
            },
            textTransform: "capitalize",

            height: "50px",
          }}
          variant="contained"
          color="secondary"
          startIcon={<PlayArrowIcon />}
          size="large"
          onClick={handleOpen}
        >
          play Trailer
        </Button>
        <Button
          sx={{
            backgroundColor: "rgba(109, 109, 110, 0.7)",
            fontWeight: 700,
            ml:2,
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(109, 109, 110, 0.4)",
            },
            textTransform: "capitalize",

            height: "50px",
          }}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          size="large"
          // onClick={handleOpen}
        >
          Add to My List
        </Button>
        <IconButton
          sx={{ color: "white" }}
          aria-label="like"
          onClick={() => {
            setUnlike(false);
            setLike(!like);
          }}
        >
          {like ? (
            <ThumbUpIcon sx={{ color: "white" }} />
          ) : (
            <ThumbUpOutlinedIcon sx={{ color: "white" }} />
          )}
        </IconButton>
        <IconButton
          aria-label="like"
          onClick={() => {
            setLike(false);
            setUnlike(!unlike);
          }}
        >
          {unlike ? (
            <ThumbDownIcon sx={{ color: "white" }} />
          ) : (
            <ThumbDownOutlinedIcon sx={{ color: "white" }} />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Details;
