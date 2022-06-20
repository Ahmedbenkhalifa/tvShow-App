import { Box, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Episodes from "./Episodes";

const List = ({ seasons }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const handleClick=(number)=>{
    // setSelectedSeason()
    setSelectedSeason(number);
  }
  return (
    <Box  sx={{px:3}}>
      <Divider sx={{my:2}} />
      <Typography variant="h5" sx={{ color: "white" }}>
        Seasons :
      </Typography>
      <Box style={{ minHeight: "100vh", backgroundColor: "transparent", paddingLeft: "20px" }}>
        <Box sx={{ display: "flex", padding: "20px", flexWrap: "wrap" }}>
          {seasons.slice(1, seasons.length).map((season,key) => (
            <Box sx={{ backgroundColor:'rgba(0,0,0,0)',
            mb:1.5,
            cursor:'pointer',
            borderRadius: '4px',
            transition:'.2s',
            borderRadius:'4px',
            '&:hover': {
                backgroundColor:'rgba(70,70,70,1)',
                color:'white'
            },}}>
       
            <Box
            key={key}
             onClick={()=>handleClick(season?.season_number)}
              sx={{
                pb:2,
                borderRadius: "5px",
                height: "200px",
                p:1,
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
            
              }}
            >
              <img
                key={season.id}
                style={{
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                  cursor: "pointer",
                  position: "relative",
                  /* margin-bottom: 16px; */
                }}
                src={`${baseURL}${season.poster_path}`}
                alt={season.name}
              />
              <Typography variant="body1" textAlign={'center'} sx={{}}>Season {season.season_number}</Typography>
            </Box>       
            </Box>
          ))}
        <Episodes seasonNumber={selectedSeason}/>
        </Box>
      </Box>
    </Box>
  );
};

export default List;
