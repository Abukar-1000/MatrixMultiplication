import { Box, Paper } from "@mui/material";
import useArrayContext from "../../Contexts/ArrayContext";
import Table from "../Table/Table";
import { useState } from "react";

export default function Matrix({ identifier }) {
    const { matrixData, getMatrix } = useArrayContext();
    const [isMouseOver, setIsMouseOver] = useState(false);
    let matrix = getMatrix(identifier);

    const headers = matrix.array[0].map((col, i) => `A${i + 1}`);
    return (
        <Box
            onMouseEnter={e => setIsMouseOver(true)}
            onMouseLeave={e => setIsMouseOver(false)}
            sx={{
                maxWidth: "fit-content"
            }}
        >
            <Paper 
                elevation={isMouseOver ? 24 : 1}
                sx={{
                    padding: "1rem"
                }}
            >
                    <Table 
                        rows={matrix.getRows()}
                        columns={matrix.getColumns()}
                        headrs={headers}
                        data={matrix.array}
                    />
            </Paper>
        </Box>
    );
}