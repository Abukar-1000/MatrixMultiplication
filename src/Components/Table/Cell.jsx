import { TextField } from "@mui/material";
import { memo, useState } from "react";


function isCellUnchanged(prevProps, nextProps) {
    return prevProps.value === nextProps.value;
}

const Cell = memo(
    ({ row, column, value }) => {
        const [_value, setValue] = useState(value);
        
        return (
            <td>
                <TextField 
                    required
                    hiddenLabel
                    value={_value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    id={`${row}-${column}`}
                    color="secondary"
                    size="small"
                />
            </td>
        );
    },
    isCellUnchanged
);

export default Cell;