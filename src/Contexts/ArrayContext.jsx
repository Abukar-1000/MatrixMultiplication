import { createContext, useContext, useState } from "react";


const ArrayContext = createContext({
    matrixA: undefined,
    matrixB: undefined
});


export function ArrayContextProvider({ children }) {
    const [ matrixData, setMatrixData ] = useState({
        matrixA: "hi",
        matrixB: "hi",
    });

    return (
        <ArrayContext.Provider value={{
            matrixData,
            setMatrixData
        }}>
            { children }
        </ArrayContext.Provider>
    );
}

export default function useArrayContext() {
    return useContext(ArrayContext);
}