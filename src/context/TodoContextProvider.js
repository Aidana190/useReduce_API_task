import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../helpers/const";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const INIT_STATE = {
    posts: [],
    details: {},
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_POSTS":
        return { ...state, posts: action.payload };
    }
    switch (action.type) {
      case "GET_DETAILS":
        return { ...state, details: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //   ! GET
  const getPost = async () => {
    const { data } = await axios(`${API}/posts`);
    dispatch({
      type: "GET_POSTS",
      payload: data,
    });
  };
  // ! GET DETAILS
  const getDetails = async (id) => {
    const { data } = await axios(`${API}/users/${id}`);
    dispatch({
      type: "GET_DETAILS",
      payload: data,
    });
  };

  const values = {
    getPost,
    posts: state.posts,
    getDetails,
    details: state.details,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
