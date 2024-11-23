document.addEventListener("DOMContentLoaded", () => {
    let parse = /\n(\d{0,3});(\d{0,3})/mg;
    let canvas = document.querySelector("canvas#output");
    let context = canvas.getContext("2d");
    context.font = "normal 30px Arial";
    context.textBaseline = "top";
    context.textAlign = "start";

    document.querySelector("input[name='file']")
        .addEventListener("change", (e) => {
            let input = e.target.files;

            if ((input.length > 0) && (input[0].type.lastIndexOf("text") >= 0)) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    context.fillStyle = "#000";
                    context.beginPath();
                    context.moveTo(
                        document.querySelector("input[name='fileStartPointX']").value,
                        document.querySelector("input[name='fileStartPointY']").value);
                    let match;
                    while ((match = parse.exec(e.target.result.toString())) != null) {
                        context.lineTo(parseInt(match[1]), parseInt(match[2]));
                    }
                    context.stroke();
                }
                reader.readAsText(input[0]);
            } else {
                alert("ОШИБКА ФОРМАТА. Выберите текстовый файл!")
                e.target.value = null;
            }
        }, false);

    document
        .querySelector("button#outputText")
        .addEventListener("click", () => {
            context.fillText(
                document.querySelector("input[name='text']").value,
                document.querySelector("input[name='textStartPointX']").value,
                document.querySelector("input[name='textStartPointY']").value
            )
        }, false);

    document
        .querySelector("button#flushCanvas")
        .addEventListener("click", () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }, false);
});
