var canvas, ctx, width, height;

function init() {
    canvas = document.getElementById("canvasID");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    document.getElementById("entete").innerHTML = article;
    document.getElementById("prixneuf").innerHTML += prixneuf + " CHF";
    document.getElementById("occasion").innerHTML +=
        nombreoccasion + " disponible";
    document.getElementById("prixoccasion").innerHTML += prixoccasion + ".-";
    if (nombreoccasion != 1) {
        document.getElementById("occasion").innerHTML += "s";
    }
    initcanvas();
}

function initcanvas() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(170, 390);
    ctx.lineTo(340, 0);
    ctx.closePath();
    ctx.fillStyle = "wheat";
    ctx.fill();
}
