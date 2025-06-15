import { Box, Paper } from "@mui/material";
import useArrayContext from "../../Contexts/ArrayContext";
import Mat from "../../Objects/Matrix";

export default function Matrix() {
    const { matrixData } = useArrayContext();
    // console.log(matrixData)

    let matrixA = new Mat(3,3,2);
    let matrixB = new Mat(3,3,3);
    let matrixC = matrixA.multiply(matrixB);
    console.log(matrixC.array);

    return (
        <Box>
            <Paper>
                
            </Paper>
        </Box>
    );
}