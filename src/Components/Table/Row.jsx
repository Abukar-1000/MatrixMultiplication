import Cell from "./Cell";



export default function Row({ row = undefined, data = new Array() }) {

    return (
        <tr>
            {
                data.length && (
                    data.map((entry, column) => (
                        <Cell 
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