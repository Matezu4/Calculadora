function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popupOverlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupOverlay').style.display = 'none';
}

const calcular = document.getElementById('calcular');

function temperatura () {
    const temperatura = +document.getElementById('temperatura').value;
    const resultado = document.getElementById('resultado');

    if (temperatura !== 0){
        const tempF = ((temperatura * 1.8)+32).toFixed(1);

        resultado.textContent = `A temperatura em Fahrenheit para ${temperatura}°C é ${tempF}°F`;
    }else{
        resultado.textContent = 'A temperatura em Fahrenheit para 0°C é 32°F';
    }
}

calcular.addEventListener('click', temperatura);