import { GET_SHOWS, SET_LOCAL_LOADING,DELETE_LIST } from "../Constants/actionsTypes";

const initialState = {
  shows: [],
  isLoadingLocal: false,
};

const ShowReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOWS:
      return { ...state, shows: [...state.shows, payload] };
    case DELETE_LIST:
      return { ...state, shows: [] };
    case SET_LOCAL_LOADING:
      return { ...state, isLoadingLocal: payload };
    default:
      return state;
  }
};


export default ShowReducer;
