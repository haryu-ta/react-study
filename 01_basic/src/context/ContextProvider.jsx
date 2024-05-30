import { useContext,createContext,useState } from "react";

export const ContextState = createContext();
export const ContextSetFnc = createContext();

const Context = ({ children }) => {

    const [ theme,setTheme ] = useState('light');

    return (
        <ContextState.Provider value={theme}>
            <ContextSetFnc.Provider value={setTheme}>
                {children}
            </ContextSetFnc.Provider>
        </ContextState.Provider>
    )

}
export default Context;

export const useTheme = () => useContext(ContextState);
export const useThemeFnc = () =>  useContext(ContextSetFnc);