function kali() {
    var x = document.getElementsByName("xlord")[0].value;
    var y = document.getElementsByName("ylord")[0].value;
    var result = x * y;
    document.getElementById("resultXY").innerHTML = (result);
}
function bagi() {
    var x = document.getElementsByName("xlord")[0].value;
    var y = document.getElementsByName("ylord")[0].value;
    var result = x / y;
    document.getElementById("resultXY").innerHTML = (result);
}
function tambah() {
    var x = document.getElementsByName("xlord")[0].value;
    var y = document.getElementsByName("ylord")[0].value;
    var result = parseInt(x)+parseInt(y);
    document.getElementById("resultXY").innerHTML = (result);
}
function kurang() {
    var x = document.getElementsByName("xlord")[0].value;
    var y = document.getElementsByName("ylord")[0].value;
    var result = x - y;
    document.getElementById("resultXY").innerHTML = (result);
}