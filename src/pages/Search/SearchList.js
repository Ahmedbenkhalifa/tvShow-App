import React from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchList = () => {
  const Navigate=useNavigate()
  const { shows } = useSelector((state) => state);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {shows?.[0].map((post, key) => (
        <Box
          key={key}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 2,
            p: 0.5,
            cursor: "pointer",
            "&:hover": {
              color: "#76A6F1",
              textDecoration: "underline",
            },
          }}
        >
          {post.poster_path ? (
            <img
              heigth="50px"
              width="50px"
              style={{ marginRight: "12px" }}
              src={`${baseURL}${post?.poster_path}`}
            />
          ) : (
            <SearchIcon fontSize="small" sx={{ m: "2px 10px 0 13px" }} />
          )}
          <Typography
            component={Box}
            // href={`http://localhost:3000/details/${post.id}`}
            // target="_blank"
            onClick={()=>Navigate(`/details/${post.id}`)}
            sx={{
              fontSize: "15px",
            }}
            variant="body2"
          >
            {post.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SearchList;
