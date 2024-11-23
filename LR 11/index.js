_intit_();

function init(length) {
    const arr = new Array(length || 0),
        n = length;

    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
    }
    return arr;
}

function mul(a, b) {
    const c = init(3);

    for (var k = 0; k < 3; k++) {
        for (var i = 0; i < 3; i++) {
            let temp = 0;
            for (let j = 0; j < 3; j++)
                temp += a[i][j] * b[j][k];
            c[i][k] = temp;
        }
    }

    return c;
}

function run() {
    // Check if the result container exists and remove it
    let existingResultContainer = document.querySelector('.container.a');
    if (existingResultContainer) {
        existingResultContainer.remove();
    }

    const a = init(3);
    const b = init(3);

    // Populate matrices a and b with values from input fields
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            a[i][j] = parseFloat(document.getElementById("a" + (i + 1) + (j + 1)).value) || 0;
        }
    }

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[i].length; j++) {
            b[i][j] = parseFloat(document.getElementById("b" + (i + 1) + (j + 1)).value) || 0;
        }
    }

    const c = mul(a, b);

    let div = document.createElement('div');
    div.className = 'container a';
    document.body.appendChild(div);

    let h = document.createElement('h2');
    h.textContent = 'Результат:';
    div.appendChild(h);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let inp = document.createElement("input");
            inp.setAttribute('value', c[i][j].toString());
            inp.setAttribute('type', 'number');
            inp.setAttribute('style', 'margin-right: 5px;');
            div.appendChild(inp);
        }
        let _br = document.createElement('br');
        div.appendChild(_br);
    }
}



function _intit_() {
    let div = document.createElement('div');
    div.className = 'container';
    document.body.appendChild(div);
    let h = document.createElement('h2');
    h.textContent = 'Матрица А:';
    div.appendChild(h);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let a = i+j;
            let inp = document.createElement("input");
            inp.id = ("a" + (i + 1) + (j + 1).toString());
            inp.setAttribute('value', a.toString());
            inp.setAttribute('type', 'number');
            inp.setAttribute('style', 'margin-right: 5px;');
            div.appendChild(inp);
        }
        let _br = document.createElement('br');
        div.appendChild(_br);
    }

    let div2 = document.createElement('div');
    div2.className = 'container';
    document.body.appendChild(div2);
    let h2 = document.createElement('h2');
    h2.textContent = 'Матрица В:';
    div2.appendChild(h2);
    let a = 1;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let a =i+j;
            let inp = document.createElement("input");
            inp.id = ("b" + (i + 1) + (j + 1).toString());
            inp.setAttribute('value', a.toString());
            inp.setAttribute('type', 'number');
            inp.setAttribute('style', 'margin-right: 5px;');
            div2.appendChild(inp);
        }
        let _br = document.createElement('br');
        div2.appendChild(_br);
    }

    let btn = document.createElement('input');
    btn.value = 'Умножение';
    btn.type = 'button';
    btn.setAttribute('onclick', 'run()');
    btn.id = 'btn';
    div2.appendChild(btn);
    document.getElementById("btn").onclick = run;
}