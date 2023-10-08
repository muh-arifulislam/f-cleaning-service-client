import {
  FETCH_REVIEWS,
  FETCH_SERVICES,
  FETCH_SHOWCASES,
  SET_ERROR,
  SET_LOADING,
} from "./actionTypes";

// Define initial state
export const initialState = {
  services: {
    data: [],
    loading: false,
    error: null,
  },
  reviews: {
    data: [],
    loading: false,
    error: null,
  },
  showcases: {
    data: [],
    loading: false,
    error: null,
  },
  apiUrl: "https://api.gocleanix.com/",
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return {
        ...state,
        services: { data: action.payload, loading: false, error: null },
      };
    case FETCH_REVIEWS:
      return {
        ...state,
        reviews: { data: action.payload, loading: false, error: null },
      };
    case FETCH_SHOWCASES:
      return {
        ...state,
        showcases: { data: action.payload, loading: false, error: null },
      };
    case SET_LOADING:
      return {
        ...state,
        [action.target]: {
          ...state[action.target],
          loading: true,
          error: null,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        [action.target]: {
          ...state[action.target],
          error: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default globalStateReducer;
