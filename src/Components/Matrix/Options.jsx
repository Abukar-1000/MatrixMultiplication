import { Chip, Stack, TextField } from "@mui/material";
import { useState } from "react";
import useArrayContext from "../../Contexts/ArrayContext";


export default function Options({ identifier, isSolutionMatrix }) {
    
    const { getMatrix, reshapeMatrix } = useArrayContext();
    const matrix = getMatrix(identifier);
    const [dimensions, setDimensions] = useState({
        rows: matrix.getRows(),
        columns: matrix.getColumns()
    });

    const setRows = e => {
        const newRows = Number(e.target.value);
        matrix.setRows(newRows);
        reshapeMatrix(
            {
                rows: newRows,
                columns: dimensions.columns
            }, 
            identifier
        );
        setDimensions(prev => ({
            ...prev,
            rows: newRows
        }));
    }

    const setCols = e => {
        const newCols = Number(e.target.value);
        matrix.setColumns(newCols);
        reshapeMatrix(
            {
                rows: dimensions.rows,
                columns: newCols
            }, 
            identifier
        )
        setDimensions(prev => ({
            ...prev,
            columns: newCols
        }));
    }



    return (
        <Stack
            direction={"row"}
            gap={2}
        >
            <Chip 
                onClick={e => {}}
                label={matrix.getDimensions()}
                variant="outlined"
                color="secondary"
                size="medium"
            />

            <TextField 
                hiddenLabel
                disabled={isSolutionMatrix}
                onChange={setRows}
                value={dimensions.rows}
                color="secondary"
                size="small"
                sx={{
                    maxWidth: {
                        md: "5dvw"
                    }
                }}
            />

            <TextField 
                hiddenLabel
                disabled={isSolutionMatrix}
                onChange={setCols}
                value={dimensions.columns}
                color="secondary"
                size="small"
                sx={{
                    maxWidth: {
                        md: "5dvw"
                    }
                }}
            />
        </Stack>
    );
}