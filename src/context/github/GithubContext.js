import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import React from "react";


// @ts-ignore
const GithubContext = createContext()
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({ children }) =>{
    const initialState = {
        users: [],
        user:{}, //empty object
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

 
    
    return ( 
    <
// @ts-ignore
    GithubContext.Provider
        value={{
        ...state,
        dispatch,
        }} >
        {children}
      </GithubContext.Provider>
      )
       
      
    }



export default GithubContext