import { Chip, Stack, TextField } from "@mui/material";
import { useState } from "react";


export default function Options({ matrix, isSolutionMatrix }) {
    const [dimensions, setDimensions] = useState({
        rows: matrix.getRows(),
        cols: matrix.getColumns()
    });

    const setRows = e => {
        const newRows = e.target.value;
        matrix.setRows(newRows);
        setDimensions(prev => ({
            ...prev,
            rows: newRows
        }));
    }

    const setCols = e => {
        const newCols = e.target.value;
        matrix.setColumns(newCols);
        setDimensions(prev => ({
            ...prev,
            cols: newCols
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
                value={dimensions.cols}
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