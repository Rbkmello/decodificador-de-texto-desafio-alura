function btnEncriptar() {
    var texto = document.querySelector('.container-left-form__textarea').value.toLowerCase();
    if (!texto) {
        mostrarMensagemNenhuma();
        return;
    }
    var textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.querySelector('.container-right__result__mensagem').value = textoCriptografado;
    mostrarResultado();
}

function btnDesencriptar() {
    var texto = document.querySelector('.container-left-form__textarea').value;
    if (!texto) {
        mostrarMensagemNenhuma();
        return;
    }
    var textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.querySelector('.container-right__result__mensagem').value = textoDescriptografado;
    mostrarResultado();
}

function mostrarMensagemNenhuma() {
    document.querySelector('.container-right__no-result').style.display = 'block';
    document.querySelector('.container-right__result').style.display = 'none';
}

function mostrarResultado() {
    document.querySelector('.container-right__no-result').style.display = 'none';
    document.querySelector('.container-right__result').style.display = 'block';
}

function showBtnCopiar() {
    var copyText = document.querySelector('.container-right__result__mensagem');
    copyText.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    limparTexto();
}

function limparTexto() {
    document.querySelector('.container-left-form__textarea').value = '';
    mostrarMensagemNenhuma();
}
