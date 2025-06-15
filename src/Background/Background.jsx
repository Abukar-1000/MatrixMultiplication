import { Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Background() {

    return (
        <Box
            sx={{
                width: "100dvw",
                height: "100dvh",
                position: "absolute",
                zIndex: -1
            }}
        >
            <Paper
                sx={{
                    borderRadius: "0px",
                    width: "inherit",
                    height: "inherit",
                }}
            >
                <Typography>Yolo</Typography>
            </Paper>
        </Box>
    );
}