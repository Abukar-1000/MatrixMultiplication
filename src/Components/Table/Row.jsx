import { useEffect } from "react";
import Cell from "./Cell";



export default function Row({ row = undefined, data = new Array(), disabled = false, identifier }) {

    return (
        <tr>
            {
                data.length && (
                    data.map((entry, column) => (
                        <Cell
                            identifier={identifier}
                            disabled={disabled}
                            row={row}
                            column={column}
                            value={entry}
                        />
                    ))
                )
            }
        </tr>
    );
}