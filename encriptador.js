var inLetter = ["e", "i", "a", "o", "u"];
var outLetter = ["enter", "imes", "ai", "ober", "ufat"];

function printText(printText) {
    document.getElementById("outDrawing").style.display = "none";
    document.getElementById("outText").style.display = "block";
    document.getElementById("text").innerHTML = printText;
}

//Verifica que haya texto de entrada y que esté en minúsculas y sin acentos ni caracteres especiales.
function testInput() {
    var text = document.getElementById("inText").value;
    if (text.length == 0) {
        document.getElementById("text").innerHTML = "",
        document.getElementById("outDrawing").style.display = "block";
        document.getElementById("outText").style.display = "none";
        document.getElementById("textWithout1").style.display = "block";
        document.getElementById("textWithout2").style.display = "block";
        document.getElementById("textError1").style.display = "none";
        document.getElementById("textError2").style.display = "none";
    } else {
        for (var letter = 0; letter < text.length; letter++) {
            var result = true;

            if (
                (text.charCodeAt(letter) >= 97 && text.charCodeAt(letter) <= 122) ||
                text.charCodeAt(letter) == 32 ||
                text.charCodeAt(letter) == 10 ||
                text.charCodeAt(letter) == 46
            ) {
                continue;
            } else {
                result = false;
                document.getElementById("text").innerHTML = "",
                document.getElementById("outDrawing").style.display = "block";
                document.getElementById("outText").style.display = "none";
                document.getElementById("textWithout1").style.display = "none";
                document.getElementById("textWithout2").style.display = "none";
                document.getElementById("textError1").style.display = "block";
                document.getElementById("textError2").style.display = "block";
                break;
            }
        }

        if (result) {
            return text;
        }
    }
}

//Función encriptar
function encryptor() {
    var inText = testInput();

    for (var i = 0; i < inLetter.length; i++) {
        inText = inText.replaceAll(inLetter[i], outLetter[i]);
    }

    return printText(inText);
}

//Función desencriptar
function decryptor() {
    var outText = testInput();

    for (var i = 0; i < outLetter.length; i++) {
        outText = outText.replaceAll(outLetter[i], inLetter[i]);
    }

    return printText(outText);
}

function copy() {
    var copyText = document.getElementById("text").innerHTML;
    navigator.clipboard.writeText(copyText).then();
}



