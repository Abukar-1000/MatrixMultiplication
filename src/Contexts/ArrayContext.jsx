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
            rows: config.default.rows, 
            columns: config.default.columns, 
            mat: new Mat(
                config.default.rows,
                config.default.columns
            )
        },
        matrixB: {
            rows: config.default.rows, 
            columns: config.default.columns,
            mat: new Mat(
                config.default.rows,
                config.default.columns
            )
        },
        solution: {
            rows: config.default.rows, 
            columns: config.default.columns,
            mat: new Mat(
                config.default.rows,
                config.default.columns
            )
        },
    });

    const getMatrix = identifier => {
        if (identifier === config.maxtrixSolution) {
            return matrixData.solution.mat;
        }

        if (identifier === config.maxtrixA) {
            return matrixData.matrixA.mat;
        }

        return matrixData.matrixB.mat;
    }

    const setSolutionMatrix = () => {
        const matrixA = getMatrix(config.maxtrixA);
        const maxtrixB = getMatrix(config.maxtrixB);
        const solutionMatrix = matrixA.multiply(maxtrixB);

        setMatrixData(prev => ({
            ...prev,
            solution: {
                rows: solutionMatrix.getRows(),
                columns: solutionMatrix.getColumns(),
                mat: solutionMatrix
            }
        }));
    }

    const reshapeMatrix = (dimensions, identifier) => {
        const matrix = getMatrix(identifier);
        matrix.setRows(dimensions.rows);
        matrix.setColumns(dimensions.columns);

        setMatrixData(prev => ({
            ...prev,
            [identifier]: {
                mat: matrix,
                ...dimensions
            }
        }))
    }

    const setMatrixValue = (identifier, row, column, value) => {
        const matrix = getMatrix(identifier);
        matrix.setValue(row, column, value);

        setMatrixData(prev => ({
            ...prev,
            [identifier]: {
                mat: matrix,
                rows: matrix.getRows(),
                columns: matrix.getColumns()
            }
        }))
    }

    return (
        <ArrayContext.Provider value={{
            matrixData,
            getMatrix,
            setMatrixData,
            reshapeMatrix,
            setSolutionMatrix,
            setMatrixValue
        }}>
            { children }
        </ArrayContext.Provider>
    );
}

export default function useArrayContext() {
    return useContext(ArrayContext);
}