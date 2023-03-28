import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

const initialState = {lightMode : localStorage.getItem("lightMode") === "true", };

const themeReducer = (state, action) => {
    switch(action.type){
        case 'toggle':
            return {lightMode : !state.lightMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer (themeReducer, initialState)

    useEffect(() => {
        localStorage.setItem("lightMode", state.lightMode);
      }, [state.lightMode]);

    return(
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}