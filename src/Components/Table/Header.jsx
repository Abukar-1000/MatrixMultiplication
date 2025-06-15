import { Typography } from "@mui/material";



export default function Header({ title }) {

    return (
        <td>
            <Typography 
                variant="body2"
                textAlign={"center"}
            >
                {title}
            </Typography>
        </td>
    );
}