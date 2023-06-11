import { createContext, useState } from "react";

const NameContext = createContext();

const NameProvider = ({ children }) => {

    const [userName, setUserName] = useState("Ajay");

    return (
        <NameContext.Provider value={{ userName, setUserName }}>
            {children}
        </NameContext.Provider>
    )
}


export { NameContext, NameProvider };