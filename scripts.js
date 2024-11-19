let seccionActual = 0;
function irSeccion(indice) {
  if (indice > seccionActual + 1) return;
  seccionActual = indice;
  const container = document.getElementById('container');
  container.style.transform = `translateX(-${indice * 100}%)`;
}
function evaluarQuiz() {
  let puntuacion = 0;
  const respuestas = { pregunta1: "Levadura", pregunta2: "Lúpulo", pregunta3: "Agua" };
  for (let pregunta in respuestas) {
    const seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);
    const feedbackElemento = document.querySelector(`.quiz-question-${pregunta}`);
    if (seleccion) {
      if (seleccion.value === respuestas[pregunta]) {
        puntuacion++;
        feedbackElemento.style.color = "green";
        feedbackElemento.insertAdjacentHTML('beforeend', '<p>¡Correcto!</p>');
      } else {
        feedbackElemento.style.color = "red";
        feedbackElemento.insertAdjacentHTML('beforeend', `<p>Incorrecto. La respuesta correcta es: ${respuestas[pregunta]}</p>`);
      }
    }
  }
  const resultado = document.getElementById("quiz-resultado");
  resultado.innerHTML = `<p>Tu puntuación es ${puntuacion}/3.</p>`;
  if (puntuacion >= 2) {
    irSeccion(6);
  } else {
    resultado.innerHTML += '<button onclick="reiniciarQuiz()">Reintentar</button>';
  }
}
function reiniciarQuiz() {
  document.getElementById("quiz-container").innerHTML = quizHTML;
  document.getElementById("quiz-resultado").innerHTML = "";
}
const quizHTML = `
<div class="quiz-question quiz-question-pregunta1">
  <p>1. ¿Cuál es el ingrediente principal para fermentar la cerveza?</p>
  <input type="radio" name="pregunta1" value="Levadura"> Levadura<br>
  <input type="radio" name="pregunta1" value="Azúcar"> Azúcar<br>
</div>
<div class="quiz-question quiz-question-pregunta2">
  <p>2. ¿Qué ingrediente aporta el amargor característico?</p>
  <input type="radio" name="pregunta2" value="Lúpulo"> Lúpulo<br>
  <input type="radio" name="pregunta2" value="Malta"> Malta<br>
</div>
<div class="quiz-question quiz-question-pregunta3">
  <p>3. ¿Qué se mezcla con la malta para comenzar el proceso?</p>
  <input type="radio" name="pregunta3" value="Agua"> Agua<br>
  <input type="radio" name="pregunta3" value="Levadura"> Levadura<br>
</div>
<button onclick="evaluarQuiz()">Enviar Respuestas</button>`;
document.getElementById("quiz-container").innerHTML = quizHTML;
