import axios from "axios";

export const getArtists = ({ page, limit }) => async (dispatch, getState) => {
  let res = await axios.get(`/artists?page=${page}&limit=${limit}`);

  dispatch({
    type: "getArtists",
    payload: { artists: [...res.data], pagination: { page, limit } },
  });
};
