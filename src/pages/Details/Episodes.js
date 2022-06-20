import { CircularProgress, Divider, Grid, ListItem, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../Constants/request";

const Episodes = ({ seasonNumber }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  const getEpisodeDetails = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`
      );
      setEpisodes(data.episodes);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEpisodeDetails();
  }, [seasonNumber]);
  return (
    <>
      {isLoading && <><Divider/><CircularProgress  sx={{ m: "50px auto", display: "block" }} /></>}
      {!isLoading &&
        episodes?.map((elem, key) => (
          <ListItem key={key} alignItems="center" button>
            <Grid container spacing={1} alignItems="center" sx={{ py:2,background: "rgb(230,230,230)" ,borderRadius:'4px'}}>
              <Grid item xs={1}>
                <Typography color="textPrimary" variant="h4" style={{ textAlign: "center" }}>
                  {elem.episode_number}
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={3}>
                    <img
                      alt="Remy Sharp"
                      src={`https://image.tmdb.org/t/p/w300${elem.still_path}`}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h5" color="textPrimary">
                      {elem.name}
                    </Typography>

                    <Typography variant="body2" color="textPrimary">
                      {elem.overview.length > 300
                        ? `${elem.overview.slice(0, 300)}...`
                        : elem.overview}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
        ))}
    </>
  );
};

export default Episodes;
