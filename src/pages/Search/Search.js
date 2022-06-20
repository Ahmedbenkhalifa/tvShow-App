import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import SearchList from "./SearchList";
import { useDispatch, useSelector } from "react-redux";
import { DeleteList, getShows } from "../../actions/ShowAction";
const Search = () => {
  const dispatch = useDispatch();
  const isLoadingLocal = useSelector((state) => state.isLoadingLocal);
  const shows = useSelector((state) => state.shows);
  const [queryText, setQueryText] = useState("");
  let delayTimer = null;
  const handleChange = (e) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      setQueryText(e.target.value);
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (queryText) {
    //   console.log(queryText);
    // }
  };
  useEffect(() => {
    if (!queryText) {
      // setSearchResults([]);
      dispatch(DeleteList());
    }
    if (queryText.length > 0) {
      // setSearchResults([]);
      dispatch(DeleteList());

      dispatch(getShows(queryText));
    }
  }, [queryText]);
console.log(shows[0]?.length);
  return (
    <Box component="main">
      <Container
        maxWidth="sm"
        sx={{
          mt: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ textTransform: "uppercase", fontWeight: "500", mb: 1 }}
        >
          Welcome to Tv Show App
        </Typography>
        <Paper
          elevation={10}
          sx={{
            width: "85%",
            borderRadius: "15px",
          }}
        >
          <Box
            component="form"
            sx={{
              borderRadius: "15px",
              display: "flex",
              overflow: "hidden",
            }}
            onSubmit={handleSubmit}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="search ..."
              inputProps={{ "aria-label": "Effectuez une recherche" }}
              onKeyUp={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ p: "10px", color: "white" }}
              aria-label="search"
            >
              <SearchIcon />
            </Button>
          </Box>
          {queryText && shows[0]?.length > 0 && (
            <>
              <Divider sx={{ mr: 3 }} />
              <Box
                sx={{
                  // width: "85%",
                  maxHeight: "70vh",
                  pb: 2,
                  overflowY: "auto",

                  mt: -2,
                  pt: 4,
                }}
              >
                <SearchList />
              </Box>
            </>
          )}
          {isLoadingLocal && (
            <>
              <Divider sx={{ mr: 3 }} />
              <CircularProgress
                sx={{ m: "20px auto", width: "50px", display: "block" }}
                size={30}
                color="secondary"
              />
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Search;
