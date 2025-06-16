import { Box } from "@mui/material";
import Header from "./Header";
import Row from "./Row";


export default function Table({ rows = 3, columns = 3, headrs = [], matrix = undefined, disabled = false, identifier}) {
    
    const data = matrix.array;
    return (
        <Box>
            <table key={`Table-${identifier}-${rows}-${columns}`}>
                <tr>
                    {
                        headrs && (
                            headrs.map(header => (<Header title={header}/>))
                        )
                    }
                </tr>

                {
                    data && (
                        data.map((data, i) => (<Row row={i} data={data} disabled={disabled} identifier={identifier}/>))
                    )
                }
            </table>
        </Box>
    );
}