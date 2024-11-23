class InputManager {

    constructor(document) {
        this.document = document
    }

    initSizeInput() {
        let labelInfo = this.document.createElement("span");
        labelInfo.innerText = "A = LeftRows, B = LeftColumns(RightRows), C = RightColumns\n";


        let labelFirst = this.document.createElement("span");
        labelFirst.innerText = "A: ";

        let inputFirst = this.document.createElement("input");
        inputFirst.style.marginTop = "10px";
        inputFirst.id = "inputLeftRows";
        inputFirst.type = "number";
        inputFirst.value = "1";

        let labelSecond = this.document.createElement("span");
        labelSecond.innerText = "B: ";

        let inputSecond = this.document.createElement("input");
        inputSecond.id = "inputLeftColumns";
        inputSecond.type = "number";
        inputSecond.value = "1";


        let labelThird = this.document.createElement("span");
        labelThird.innerText = "C: ";

        let inputThird = this.document.createElement("input");
        inputThird.id = "inputRightColumns";
        inputThird.type = "number";
        inputThird.value = "1";

        let setDimensionsButton = this.document.createElement("button");
        setDimensionsButton.innerText = "Установить";
        setDimensionsButton.onclick = () => { this.setDimensionsOnClick(/*document*/) };


        let div_size_input = this.document.createElement("div");
        div_size_input.id = "div_size_input";
        div_size_input.style.padding = "10px 0";

        div_size_input.appendChild(labelInfo);
        div_size_input.appendChild(this.document.createElement("br"));

        div_size_input.appendChild(labelFirst);
        div_size_input.appendChild(inputFirst);
        div_size_input.appendChild(this.document.createElement("br"));
        div_size_input.appendChild(labelSecond);
        div_size_input.appendChild(inputSecond);
        div_size_input.appendChild(this.document.createElement("br"));
        div_size_input.appendChild(labelThird);
        div_size_input.appendChild(inputThird);
        div_size_input.appendChild(document.createElement("br"));
        div_size_input.appendChild(setDimensionsButton);
        div_size_input.appendChild(document.createElement("br"));
        div_size_input.appendChild(document.createElement("br"));


        this.document.body.appendChild(div_size_input);
    }

    getMatrix(id, MaxX, MaxY) {
        let matrix = [];
        for(let x = 0; x < MaxX; x++)
        {
            matrix[x] = [];
            for(let y = 0; y < MaxY; y++)
            {
                matrix[x][y] = parseInt(document.getElementById(id + "X" + x + "Y" + y).value);
            }
        }
        return matrix
    }

    matrixToOutDiv(matrix) {
        let res_table = this.document.createElement("table");
        for(let x = 0; x < matrix.length; x++)
        {
            let new_table_row = this.document.createElement("tr");
            for(let y = 0; y < matrix[0].length; y++)
            {
                let new_table_data = this.document.createElement("td");
                let new_input = this.document.createElement("input");
                new_input.type = "number";
                new_input.name = new_input.id = "resX" + x + "Y" + y;
                new_input.value = matrix[x][y]
                new_table_data.appendChild(new_input);
                new_table_row.appendChild(new_table_data);
            }
            res_table.appendChild(new_table_row);
        }

        if (this.document.getElementById("div_table_out").childElementCount === 2)  // only buttons
            this.document.getElementById("div_table_out").append(res_table);
        else  // remove existing table, so they don't stack
            this.document.getElementById("div_table_out").lastChild.replaceWith(res_table);
    }

    multiplicationButtonOnClick(leftMaxX, leftMaxY, rightMaxX, rightMaxY) {
        let res = new MatrixOperations(this.getMatrix("A", leftMaxX, leftMaxY), this.getMatrix("B", rightMaxX, rightMaxY)).getProduct();
        this.matrixToOutDiv(res);
    }

    addButtonOnClick(size) {
        let res = new MatrixOperations(this.getMatrix("A", size, size), this.getMatrix("B", size, size)).getSum();
        this.matrixToOutDiv(res);
    }

    setDimensionsOnClick() {
        // remove old if exists
        if (this.document.contains(this.document.getElementById("div_table_in"))) {
            this.document.getElementById("div_table_in").remove();
        }
        if (this.document.contains(this.document.getElementById("div_table_out"))) {
            this.document.getElementById("div_table_out").remove();
        }

        // create new
        let leftRows     = this.document.getElementById("inputLeftRows").value;
        let leftColumns  = this.document.getElementById("inputLeftColumns").value;
        let rightRows    = this.document.getElementById("inputLeftColumns").value;
        let rightColumns = this.document.getElementById("inputRightColumns").value;

        let A_table = this.document.createElement("table");
        for(let x = 0; x < leftRows; x++)
        {
            let new_table_row = this.document.createElement("tr");
            for(let y = 0; y < leftColumns; y++)
            {
                let new_table_data = this.document.createElement("td");
                let new_input = this.document.createElement("input");
                new_input.type = "number";
                new_input.name = new_input.id = "AX" + x + "Y" + y;
                new_input.value = "1"
                new_table_data.appendChild(new_input);
                new_table_row.appendChild(new_table_data);
            }
            A_table.appendChild(new_table_row);
        }

        let B_table = this.document.createElement("table");
        for(let x = 0; x < rightRows; x++)
        {
            let new_table_row = this.document.createElement("tr");
            for(let y = 0; y < rightColumns; y++)
            {
                let new_table_data = this.document.createElement("td");
                let new_input = this.document.createElement("input");
                new_input.type = "number";
                new_input.name = new_input.id = "BX" + x + "Y" + y;
                new_input.value = "1"
                new_table_data.appendChild(new_input);
                new_table_row.appendChild(new_table_data);
            }
            B_table.appendChild(new_table_row);
        }

        let in_div = this.document.createElement("div");
        in_div.id = "div_table_in";

        let p1 = this.document.createElement("span");
        p1.textContent = "Матрица A:";

        let p2 = this.document.createElement("span");
        p2.textContent = "Матрица B:";

        in_div.append(p1, A_table, p2, B_table);

        this.document.body.append(in_div);

        let out_div = this.document.createElement("div");
        out_div.id = "div_table_out";

        let mul_button = this.document.createElement("button");
        mul_button.name = "multiply";
        mul_button.textContent = "Умножить";
        mul_button.onclick = () => { this.multiplicationButtonOnClick(leftRows, leftColumns, rightRows, rightColumns) };

        let add_button = this.document.createElement("button");
        add_button.name = "add";
        add_button.textContent = "Сложить (с отсечением)";
        add_button.onclick = () => { this.addButtonOnClick(Math.min(leftRows, leftColumns, rightRows, rightColumns)) };

        out_div.append(mul_button, add_button);

        this.document.body.append(out_div);
    }
}
