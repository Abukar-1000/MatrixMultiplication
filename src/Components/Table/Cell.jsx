import { TextField } from "@mui/material";
import { memo, useEffect, useState } from "react";
import useArrayContext from "../../Contexts/ArrayContext";


function isCellUnchanged(prevProps, nextProps) {
    return (
        prevProps.value === nextProps.value

    );
}

const Cell = memo(
    ({ row, column, value, disabled, identifier }) => {

        const [_value, setValue] = useState(value);
        
        useEffect(() => {
            setValue(value);
        }, [value]);
        
        const {setMatrixValue} = useArrayContext();

        const updateCell = e => {
            const newValue = e.target.value;
            if (newValue === undefined || newValue === null) {
                return;
            }

            const numericValue = Number(newValue);
            setValue(numericValue);
            setMatrixValue(identifier, row, column, numericValue);
        }
        return (
            <td>
                <TextField 
                    required
                    hiddenLabel
                    value={_value}
                    onChange={updateCell}
                    id={`${row}-${column}`}
                    color="secondary"
                    disabled={disabled}
                    size="small"
                />
            </td>
        );
    },
    isCellUnchanged
);

export default Cell;