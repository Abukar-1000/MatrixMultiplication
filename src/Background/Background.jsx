import { Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Background({children}) {

    return (
        <Box
            sx={{
                width: "100dvw",
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
                {children}
            </Paper>
        </Box>
    );
}