
function codificar() {
    const inputText = document.getElementById('inputText').value;
    const encodedText = btoa(inputText); // Codifica para Base64
    document.getElementById('outputText').value = encodedText;
}

function decodificar() {
    const encodedText = document.getElementById('outputText').value;
    const decodedText = atob(encodedText); // Decodifica de Base64
    document.getElementById('inputText').value = decodedText;
}