import {
  Search_Data,
  Fetch_Data,
  Fetch_Description,
  Remove_Object,
  Loading
} from "../actions/types";

const initialstate = {
  text: "",
  searchresult: [],
  loading: false,
  description: [],
  favouriate: []
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case "Search_Data":
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case "Fetch_Data":
      return {
        ...state,
        searchresult: action.payload,
        loading: false
      };
    case "Fetch_Description":
      return {
        ...state,
        description: action.payload,
        loading: false
      };
    case "Add_T0_Favouriate":
      state.favouriate.push(action.payload);
      return {
        ...state,
        favouriate: state.favouriate,
        loading: false
      };
    case "Remove_Object":
      var arr = state.favouriate.filter(
        obj => obj.pageid != state.favouriate[action.payload].pageid
      );
      return {
        ...state,
        favouriate: [...arr],
        loading: false
      };
    case "Loading":
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
