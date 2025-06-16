

export default class Mat {

    constructor(rows = 3, cols = 3, fillValue = 0) {
        this.rows = rows;
        this.cols = cols;
        this.fillValue = fillValue;
        this.array = new Array(rows);
        this.#buildArray(fillValue);
    }

    #buildArray(fillValue = 0) {
        for (let i = 0; i < this.rows; ++i) {
            this.array[i] = new Array(this.cols).fill(fillValue);
        }
    }

    getRows() {
        return this.rows;
    }

    getColumns() {
        return this.cols;
    }

    getDimensions() {
        return `${this.rows}x${this.cols}`;
    }

    getRow(_row = undefined) {
        if (_row === undefined || _row < 0) {
            throw new Error(`Must provide a positive row arguement. Got ${_row}`);
        }

        return this.array[_row];
    }

    getColumn(_col = undefined) {
        if (_col === undefined || _col < 0) {
            throw new Error(`Must provide a positive column arguement. Got ${_col}`);
        }
        
        let column = new Array(this.col).fill(0);
        
        for (let i = 0; i < this.rows; ++i) {
            column[i] = this.array[i][_col];
        }

        return column;
    }

    setValue(row, col, value) {
        if (row >= this.rows) {
            throw new Error(`Row ${row} is out of bounds.`);
        }

        if (col >= this.cols) {
            throw new Error(`Column ${col} is out of bounds.`);
        }

        const isInvalidValueType = typeof(value) !== "number";
        if (isInvalidValueType) {
            throw new Error(`Must enter numeric values. ${value} is invalid`);
        }

        this.array[row][col] = value;
    }

    setRows(_rows = 3) {
        if (_rows < 0) {
            throw new Error(`Must provide a positive row arguement. Got ${_rows}`);
        }

        let difference = _rows - this.rows;
        if (difference > 0) {
            for (let i = 0; i < difference; ++i) {
                const newRow = new Array(this.cols).fill(this.fillValue);
                this.array.push(newRow);
            }
        }
        else if (difference < 0) {
            difference *= -1;
            for (let i = 0; i < difference; ++i) {
                this.array.pop();
            }
        }

        this.rows = _rows;
    }
    
    setColumns(_cols = 3) {
        if (_cols < 0) {
            throw new Error(`Must provide a positive column arguement. Got ${_cols}`);
        }
        
        let difference = _cols - this.cols;
        if (difference > 0) {
            for (let i = 0; i < this.rows; ++i) {
                for (let j = 0; j < difference; ++j) {
                    this.array[i].push(this.fillValue);
                }
            }
        }
        
        else if (difference < 0) {
            difference *= -1;
            for (let i = 0; i < this.rows; ++i) {
                for (let j = 0; j < difference; ++j) {
                    this.array[i].pop();
                }
            }
        }
        
        this.cols = _cols;
    }

    #isValidMultiplication(matrixB) {
        return this.cols === matrixB.getRows();
    }

    #multiplyHelper(row, col, matrixA, matrixB) {
        let _row = matrixA.getRow(row);
        let _col = matrixB.getColumn(col);
        let result = 0;

        let rowValue = 0;
        let colValue = 0;
        for (let i = 0; i < this.rows; ++i) {
            rowValue = _row[i];
            colValue = _col[i];
            result += ( rowValue * colValue );
        }

        return result;
    }

    multiply(matrixB = undefined) {
        if (matrixB === undefined) {
            throw new Error("Must provide a second matrix to multiply");
        }

        if (!this.#isValidMultiplication(matrixB)) {
            throw new Error(`Can not multiple ${this.getDimensions()} and ${matrixB.getDimensions()}`);
        }

        let value = 0;
        let i = 0;
        let j = 0;
        let maxRows = this.getRows();
        let maxCols = matrixB.getColumns();
        let newMatrix = new Mat(maxRows, maxCols);

        while (j < maxRows) {
            if (i >= maxRows) {
                i = 0;
                j += 1;
                continue;
            }

            value = this.#multiplyHelper(i, j, this, matrixB);
            newMatrix.setValue(i, j, value);
            i += 1;
        }

        return newMatrix;
    }
}