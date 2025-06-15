import { Box } from "@mui/material";
import Header from "./Header";
import Row from "./Row";


export default function Table({ rows = 3, columns = 3, headrs = [], data = []}) {
    
    return (
        <Box>
            <table>
                <tr>
                    {
                        headrs && (
                            headrs.map(header => (<Header title={header}/>))
                        )
                    }
                </tr>

                {
                    data && (
                        data.map((data, i) => (<Row row={i} data={data}/>))
                    )
                }
            </table>
        </Box>
    );
}