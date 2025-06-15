import Cell from "./Cell";



export default function Row({ row = undefined, data = new Array(), disabled = false }) {

    return (
        <tr>
            {
                data.length && (
                    data.map((entry, column) => (
                        <Cell
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