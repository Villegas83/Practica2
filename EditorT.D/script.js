const textarea = document.getElementById('texto');
const boton = document.getElementById('aplicar');
const resultadoDiv = document.getElementById('resultado');
const contador = document.getElementById('contador');


textarea.addEventListener('input', () => {
    const textoLength = textarea.value.length;
    contador.textContent = `Caracteres: ${textoLength}`;
});


boton.addEventListener('click', () => {
    const texto = textarea.value;
    resultadoDiv.textContent = texto; 
});
