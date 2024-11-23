document.addEventListener("DOMContentLoaded", () => {
    let svg = $('#graph')[0]
    let width = svg.getAttribute('width').split('px')[0];
    let height = svg.getAttribute('height').split('px')[0];

    svg.innerHTML = '';

    document
        .querySelector("button#Sin")
        .addEventListener("click", () => {
            buildFunction(Math.sin, -width / 2, width / 2, 40)
        }, false);

    document
        .querySelector("button#Cos")
        .addEventListener("click", () => {
            buildFunction(Math.cos, -width / 2, width / 2, 40)
        }, false);

    document
        .querySelector("button#Tan")
        .addEventListener("click", () => {
            buildFunction(Math.tan, -width / 2, width / 2, 40)
        }, false);


    function buildFunction(func, startX, endX, coef) {
        svg.innerHTML = '';

        for (let i = startX; i < endX; i++) {
            drawLine(svg, width / 2 + i, height / 2 - func(1 / coef * i) * coef,
                width / 2 + i + 1, height / 2 - func(1 / coef * (i + 1)) * coef)
        }
    }


    function drawLine(svg, xStart, yStart, xEnd, yEnd) {
        let line = document.createElementNS(svg.getAttribute('xmlns'), 'line');
        line.setAttribute('x1', xStart);
        line.setAttribute('y1', yStart);
        line.setAttribute('x2', xEnd);
        line.setAttribute('y2', yEnd);
        line.setAttribute('stroke', 'black');

        svg.append(line);
    }
})
