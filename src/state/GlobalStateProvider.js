import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

import gloablStateReducer, { initialState } from "./globalStateReducer.js";
import {
  FETCH_REVIEWS,
  FETCH_SERVICES,
  FETCH_SHOWCASES,
  SET_ERROR,
  SET_LOADING,
} from "./actionTypes.js";

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gloablStateReducer, initialState);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async (target, type, url) => {
      try {
        dispatch({ type: SET_LOADING, target });
        // Fetch data
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: type, payload: data });
      } catch (error) {
        dispatch({ type: SET_ERROR, target, payload: error });
      }
    };

    fetchData("services", FETCH_SERVICES, "http://localhost:9000/services");
    fetchData("reviews", FETCH_REVIEWS, "http://localhost:9000/reviews");
    fetchData("showcases", FETCH_SHOWCASES, "http://localhost:9000/showcases");
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        services: state.services,
        reviews: state.reviews,
        showcases: state.showcases,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to use the context
const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
