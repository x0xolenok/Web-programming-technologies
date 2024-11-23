class MatrixOperations {

    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    getSum() {
        let res = [];

        for(let i = 0; i < this.left.length; i++)
        {
            res[i] = [];
            for(let j = 0; j < this.left[i].length; j++)
            {
                res[i][j] = this.left[i][j] + this.right[i][j];
            }
        }

        return res;
    }

    getProduct() {
        let res = [];

        for(let i = 0; i < this.left.length; i++)
        {
            res[i] = [];
            for(let j = 0; j < this.right[0].length; j++)
            {
                res[i][j] = 0;
                for(let k = 0; k < this.right.length; k++)
                {
                    res[i][j] += this.left[i][k] * this.right[k][j];
                }
            }
        }

        return res;
    }
}
