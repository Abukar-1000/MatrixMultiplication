import { Box, Button } from "@mui/material";
import useArrayContext from "../../Contexts/ArrayContext";




export default function SolveButton({}) {

    const { getMatrix, setSolutionMatrix } = useArrayContext();
    
    const computeSolution = (e) => {
        setSolutionMatrix();
    }

    return (
        <Box
            display={"flex"}
            justifyContent={"end"}
            alignContent={"end"}
            maxWidth={{
                md: "50dvw"
            }}
        >
            <Button
                onClick={computeSolution}
                color="secondary"
                variant="contained"
            >
                Compute
            </Button>
        </Box>
    );
}