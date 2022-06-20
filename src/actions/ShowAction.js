import axios from "axios";
import { DELETE_LIST, GET_SHOWS, SET_LOCAL_LOADING } from "../Constants/actionsTypes";
import { API_KEY, BASE_URL } from "../Constants/request";

export const getShows = (queryText) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOCAL_LOADING, payload: true });
    const response = await axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${queryText}`);
    console.log(response.data.results)
    dispatch({ type: GET_SHOWS, payload: response.data.results });
    dispatch({ type: SET_LOCAL_LOADING, payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_LOCAL_LOADING, payload: false });
  }
};

export const DeleteList = () => ({
  type: DELETE_LIST,
});