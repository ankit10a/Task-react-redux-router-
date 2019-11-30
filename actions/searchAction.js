import {
  Search_Data,
  Fetch_Data,
  Fetch_Description,
  Add_T0_Favouriate,
  Remove_Object,
  Loading
} from "./types";
import axios from "axios";

export const searchData = text => dispatch => {
  dispatch({
    type: Search_Data,
    payload: text
  });
};

export const fetchData = text => dispatch => {
  axios
    .get(
      `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${text}&format=json`
    )
    .then(response => {
      return dispatch({
        type: Fetch_Data,
        payload: response.data.query.search
      });
    })
    .catch(err => console.log(err));
};
export const fetchDescription = name => dispatch => {
  axios
    .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
    .then(response => {
      return dispatch({
        type: Fetch_Description,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const addtoFavouritate = obj => dispatch => {
  return dispatch({
    type: Add_T0_Favouriate,
    payload: obj
  });
};

export const removefromlist = obj => dispatch => {
  console.log(obj);
  return dispatch({
    type: Remove_Object,
    payload: obj
  });
};
export const setloading = () => {
  return {
    type: Loading
  };
};
