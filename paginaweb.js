document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);

    // Código para el menú desplegable
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
window.onload = function () {
    // Obtener el formulario y el contenedor de resultados
    const surveyForm = document.getElementById('surveyForm');
    const resultContainer = document.getElementById('result');
    const refreshButton = document.getElementById('refresh');

    // Manejar el evento de envío del formulario
    surveyForm.onsubmit = function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores seleccionados
        const satisfaction = document.getElementById('satisfaction').value;
        const comments = document.getElementById('comments').value.trim();

        // Generar el mensaje de resultado
        let resultMessage = "Gracias por tu feedback. ";
        resultMessage += `Calificación de satisfacción: ${satisfaction}. `;
        resultMessage += `Comentarios adicionales: ${comments}.`;

        // Mostrar el resultado en la página
        resultContainer.textContent = resultMessage;

        // Manejar el evento de clic en el botón de actualización
    refreshButton.onclick = function() {
        location.reload();
    };
};
    };


