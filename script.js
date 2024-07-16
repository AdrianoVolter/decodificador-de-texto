
function criptografar() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .toLowerCase()
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
}

function descriptografar() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
}

function copiarTexto() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

function limparCampos() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}
