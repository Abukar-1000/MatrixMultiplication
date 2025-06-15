import { createContext, useContext, useState } from "react";
import Mat from "../Objects/Matrix";
import config from "./../Components/Matrix/Config"

const ArrayContext = createContext({
    matrixA: undefined,
    matrixB: undefined
});


export function ArrayContextProvider({ children }) {
    const [ matrixData, setMatrixData ] = useState({
        matrixA: {
            width: 3,
            height: 3,
            mat: new Mat(3,3)
        },
        matrixB: {
            width: 3,
            height: 3,
            mat: new Mat(3,3, 2)
        },
    });

    const getMatrix = identifier => {
        if (identifier === config.maxtrixA) {
            return matrixData.matrixA.mat;
        }

        return matrixData.matrixB.mat;
    }

    return (
        <ArrayContext.Provider value={{
            matrixData,
            getMatrix,
            setMatrixData
        }}>
            { children }
        </ArrayContext.Provider>
    );
}

export default function useArrayContext() {
    return useContext(ArrayContext);
}