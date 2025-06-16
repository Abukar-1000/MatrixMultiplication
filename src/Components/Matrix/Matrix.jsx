import { Box, Divider, Paper, Stack } from "@mui/material";
import useArrayContext from "../../Contexts/ArrayContext";
import Table from "../Table/Table";
import { useState } from "react";
import config from "./Config";
import Options from "./Options";

export default function Matrix({ identifier }) {
    const { matrixData, getMatrix } = useArrayContext();
    const [isMouseOver, setIsMouseOver] = useState(false);
    const matrix = getMatrix(identifier);

    const headers = matrix.array[0].map((col, i) => `A${i + 1}`);
    const isSolutionMatrix = identifier === config.maxtrixSolution;
    
    return (
        <Box
            key={`${identifier}-${matrix.getRows()}-${matrix.getColumns()}`}
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
                    <Stack
                        gap={1}
                    >
                        <Table
                            identifier={identifier}
                            disabled={isSolutionMatrix} 
                            rows={matrix.getRows()}
                            columns={matrix.getColumns()}
                            headrs={headers}
                            matrix={matrix}
                        />
                        <Divider />
                        <Box
                            display={"flex"}
                            justifyContent={"start"}
                            alignContent={"start"}
                        >
                            <Options 
                                identifier={identifier}
                            />
                        </Box>
                    </Stack>
            </Paper>
        </Box>
    );
}