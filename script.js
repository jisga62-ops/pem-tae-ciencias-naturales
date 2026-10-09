const scienceData = {
  biologia: {
    eyebrow: '01 · Vida y conexiones',
    title: 'Biología',
    intro: 'La biología observa cómo funciona la vida, desde una célula diminuta hasta un ecosistema completo.',
    blocks: [
      ['Mira de cerca', 'Seres vivos, células, cuerpo humano, herencia y relaciones entre organismos.'],
      ['Conecta con tu entorno', 'Una huerta escolar, una mascota o un parque pueden convertirse en preguntas investigables.']
    ],
    question: '¿Qué ser vivo de tu comunidad te gustaría observar durante una semana?'
  },
  quimica: {
    eyebrow: '02 · Materia y transformación',
    title: 'Química',
    intro: 'La química ayuda a explicar de qué están hechas las cosas y cómo cambian cuando interactúan.',
    blocks: [
      ['Mira de cerca', 'Materia, propiedades, sustancias, mezclas y transformaciones observables.'],
      ['Conecta con tu entorno', 'Cocinar, limpiar o cuidar el agua son oportunidades para identificar cambios y evidencias.']
    ],
    question: '¿Qué transformación cotidiana podrías describir usando antes, durante y después?'
  },
  fisica: {
    eyebrow: '03 · Energía y movimiento',
    title: 'Física',
    intro: 'La física busca patrones para comprender la energía, el movimiento, la luz y otros fenómenos naturales.',
    blocks: [
      ['Mira de cerca', 'Fuerzas, velocidad, sonido, luz, temperatura y modelos para explicar lo que ocurre.'],
      ['Conecta con tu entorno', 'Una bicicleta, una sombra o una pelota permiten comparar, medir y hacer predicciones.']
    ],
    question: '¿Qué fenómeno físico ves todos los días y todavía te da curiosidad?'
  },
  ecologia: {
    eyebrow: '04 · Biodiversidad y cuidado',
    title: 'Ecología',
    intro: 'La ecología estudia las relaciones entre los seres vivos y el ambiente que comparten.',
    blocks: [
      ['Mira de cerca', 'Biodiversidad, redes de relación, recursos naturales y cambios en los ecosistemas.'],
      ['Conecta con tu entorno', 'Separar residuos, observar polinizadores o mapear zonas verdes son acciones con datos.']
    ],
    question: '¿Qué recurso natural de tu comunidad merece una pregunta y una acción de cuidado?'
  }
};

const experimentData = {
  agua: {
    eyebrow: 'Experimento 01 · Capilaridad',
    title: 'El agua que camina',
    intro: 'Observa cómo el agua coloreada puede desplazarse por un papel absorbente y pasar de un vaso a otro.',
    materials: ['3 vasos transparentes', 'Agua', 'Colorante de alimentos (dos colores)', '2 tiras de papel absorbente'],
    steps: ['Llena los vasos de los extremos con agua. Deja el vaso del centro vacío.', 'Agrega un colorante distinto a cada vaso con agua.', 'Dobla las tiras de papel y coloca un extremo en cada vaso con agua y el otro en el vaso vacío.', 'Espera y observa durante 10–15 minutos. Registra qué ocurre y qué cambia con el tiempo.'],
    explanation: '<strong>¿Qué sucede?</strong> El agua se adhiere a las fibras del papel y también se atrae a sí misma. Esa combinación permite que avance por pequeños espacios: es la capilaridad.',
    safety: 'Usa colorantes aptos para alimentos, protege la mesa y no bebas el agua del experimento.',
    question: '¿Qué crees que cambiaría si el papel fuera más ancho o si los vasos estuvieran más separados?'
  },
  pimienta: {
    eyebrow: 'Experimento 02 · Tensión superficial',
    title: 'La pimienta exploradora',
    intro: 'Una gotita de jabón hace visible un cambio en la superficie del agua.',
    materials: ['Un plato hondo', 'Agua', 'Pimienta molida', 'Jabón líquido', 'Un hisopo o la punta de un dedo'],
    steps: ['Cubre el plato con una capa de agua y espolvorea pimienta en la superficie.', 'Observa cómo los granos quedan flotando y distribuidos.', 'Coloca una pequeña gota de jabón en el centro con el hisopo.', 'Registra hacia dónde se mueven los granos y repite cambiando la cantidad de jabón.'],
    explanation: '<strong>¿Qué sucede?</strong> El jabón modifica la tensión superficial del agua y genera un movimiento que arrastra los granos hacia los bordes.',
    safety: 'No acerques el jabón a los ojos y lava tus manos al terminar.',
    question: '¿Qué variable cambiarías para comparar resultados de forma justa?'
  },
  sombras: {
    eyebrow: 'Experimento 03 · Luz y observación',
    title: 'Detectives de sombras',
    intro: 'Investiga cómo la posición de una fuente de luz modifica el tamaño y la dirección de una sombra.',
    materials: ['Una linterna', 'Un objeto pequeño', 'Una hoja de papel', 'Lápiz y regla', 'Un espacio con luz reducida'],
    steps: ['Coloca el objeto sobre la hoja y enciende la linterna desde un lado.', 'Marca el contorno de la sombra y mide su largo.', 'Mueve la linterna más cerca y luego más lejos, manteniendo el objeto en el mismo lugar.', 'Compara las mediciones y dibuja una conclusión.'],
    explanation: '<strong>¿Qué sucede?</strong> La sombra aparece cuando el objeto bloquea parte de la luz. La distancia y el ángulo de la fuente cambian su tamaño y forma.',
    safety: 'No apuntes la linterna directamente a los ojos y evita usar fuentes de calor.',
    question: '¿Cómo podrías diseñar una regla para predecir el largo de la sombra?'
  }
};

const quizData = [
  {
    question: '¿Qué estructura se considera la unidad básica de los seres vivos?',
    options: ['El átomo', 'La célula', 'El ecosistema', 'El tejido'],
    answer: 1,
    explanation: 'La célula es la unidad básica de organización y funcionamiento de los seres vivos.'
  },
  {
    question: 'Cuando el hielo se derrite, ¿qué cambio de estado ocurre?',
    options: ['De líquido a gas', 'De gas a líquido', 'De sólido a líquido', 'De líquido a sólido'],
    answer: 2,
    explanation: 'La fusión es el cambio de estado de sólido a líquido, como ocurre cuando el hielo recibe calor.'
  },
  {
    question: '¿Qué describe mejor la energía?',
    options: ['La capacidad de producir cambios', 'El espacio que ocupa un objeto', 'La cantidad de células', 'El color de una sustancia'],
    answer: 0,
    explanation: 'La energía se entiende como la capacidad de producir cambios o realizar trabajo.'
  },
  {
    question: '¿Qué acción favorece la conservación de la biodiversidad?',
    options: ['Eliminar todos los refugios naturales', 'Introducir especies sin evaluar impactos', 'Proteger hábitats y reducir la contaminación', 'Usar más recursos sin planificar'],
    answer: 2,
    explanation: 'Proteger los hábitats y reducir las presiones ambientales ayuda a conservar la diversidad de seres vivos.'
  },
  {
    question: 'En una investigación escolar, ¿para qué sirve una hipótesis?',
    options: ['Para reemplazar la observación', 'Para proponer una explicación que se puede poner a prueba', 'Para asegurar que nunca habrá errores', 'Para decorar el informe'],
    answer: 1,
    explanation: 'Una hipótesis es una explicación o predicción que puede contrastarse con observaciones o datos.'
  }
];

const modal = document.getElementById('contentModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.querySelector('.modal-close');
const toast = document.getElementById('toast');
let toastTimer;

function openModal(html) {
  modalContent.innerHTML = html;
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }
  document.body.classList.add('no-scroll');
}

function closeModal() {
  if (typeof modal.close === 'function') {
    modal.close();
  } else {
    modal.removeAttribute('open');
  }
  document.body.classList.remove('no-scroll');
}

function renderScience(key) {
  const item = scienceData[key];
  if (!item) return;
  openModal(`
    <div class="modal-eyebrow">${item.eyebrow}</div>
    <h2>${item.title}</h2>
    <p>${item.intro}</p>
    <div class="modal-blocks">
      ${item.blocks.map(block => `<div class="modal-block"><h3>${block[0]}</h3><p>${block[1]}</p></div>`).join('')}
    </div>
    <div class="modal-question">✦ <strong>Pregunta para seguir:</strong> ${item.question}</div>
  `);
}

function renderExperiment(key) {
  const item = experimentData[key];
  if (!item) return;
  openModal(`
    <div class="modal-eyebrow">${item.eyebrow}</div>
    <h2>${item.title}</h2>
    <p>${item.intro}</p>
    <div class="modal-blocks">
      <div class="modal-block"><h3>Materiales</h3><ul class="modal-list">${item.materials.map(material => `<li>${material}</li>`).join('')}</ul></div>
      <div class="modal-block"><h3>Precauciones</h3><p>${item.safety}</p></div>
    </div>
    <div class="modal-block" style="margin-top:12px"><h3>Paso a paso</h3><ol class="modal-list">${item.steps.map(step => `<li>${step}</li>`).join('')}</ol></div>
    <div class="modal-question">🔎 ${item.explanation}</div>
    <div class="modal-question">💭 <strong>Para reflexionar:</strong> ${item.question}</div>
  `);
}

document.querySelectorAll('[data-science]').forEach(card => {
  card.addEventListener('click', () => renderScience(card.dataset.science));
});
document.querySelectorAll('.js-experiment').forEach(button => {
  button.addEventListener('click', () => renderExperiment(button.dataset.experiment));
});
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.open) closeModal();
});

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mainNav.classList.toggle('open', !isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
  });
});

const themeToggle = document.getElementById('themeToggle');
function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeToggle.querySelector('span').textContent = isDark ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo nocturno');
  themeToggle.setAttribute('title', isDark ? 'Activar modo claro' : 'Activar modo nocturno');
  try { localStorage.setItem('ciencias-theme', isDark ? 'dark' : 'light'); } catch (error) { /* almacenamiento opcional */ }
}
let savedTheme = '';
try { savedTheme = localStorage.getItem('ciencias-theme') || ''; } catch (error) { savedTheme = ''; }
setTheme(savedTheme === 'dark');
themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));

const scrollProgress = document.getElementById('scrollProgress');
const backTop = document.getElementById('backTop');
function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
  backTop.classList.toggle('visible', window.scrollY > 550);
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('currentYear').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3000);
}

const quizForm = document.getElementById('quizForm');
const quizQuestions = document.getElementById('quizQuestions');
const quizResult = document.getElementById('quizResult');
const quizCounter = document.getElementById('quizCounter');
const quizProgressLabel = document.getElementById('quizProgressLabel');
const quizProgress = document.getElementById('quizProgress');

function renderQuiz() {
  quizQuestions.innerHTML = quizData.map((item, index) => `
    <fieldset class="question-block">
      <legend class="sr-only">Pregunta ${index + 1}</legend>
      <h3><span class="question-number">${index + 1}.</span> ${item.question}</h3>
      <div class="options">
        ${item.options.map((option, optionIndex) => `
          <label class="option-label"><input type="radio" name="question-${index}" value="${optionIndex}"><span>${option}</span></label>
        `).join('')}
      </div>
    </fieldset>
  `).join('');
  quizQuestions.querySelectorAll('input').forEach(input => input.addEventListener('change', updateQuizProgress));
  updateQuizProgress();
}

function getSelectedAnswers() {
  return quizData.map((_, index) => {
    const selected = quizQuestions.querySelector(`input[name="question-${index}"]:checked`);
    return selected ? Number(selected.value) : null;
  });
}

function updateQuizProgress() {
  const answers = getSelectedAnswers();
  const answered = answers.filter(answer => answer !== null).length;
  const percent = Math.round((answered / quizData.length) * 100);
  quizProgress.style.width = `${percent}%`;
  quizProgressLabel.textContent = `${percent}%`;
  quizCounter.textContent = answered === quizData.length ? '¡Todas respondidas!' : `Pregunta ${Math.min(answered + 1, quizData.length)} de ${quizData.length}`;
  if (quizResult.hidden === false) quizResult.hidden = true;
}

quizForm.addEventListener('submit', event => {
  event.preventDefault();
  const answers = getSelectedAnswers();
  const firstMissing = answers.indexOf(null);
  if (firstMissing !== -1) {
    showToast(`Te falta responder la pregunta ${firstMissing + 1}.`);
    const target = quizQuestions.querySelectorAll('.question-block')[firstMissing];
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const score = answers.reduce((total, answer, index) => total + (answer === quizData[index].answer ? 1 : 0), 0);
  const messages = score === 5 ? '¡Mente científica en modo brillante!' : score >= 3 ? '¡Muy bien! Sigue conectando ideas.' : 'Cada respuesta abre una nueva pregunta.';
  const review = quizData.map((item, index) => {
    const correct = answers[index] === item.answer;
    return `<div class="review-item ${correct ? 'review-correct' : 'review-wrong'}"><strong>${correct ? '✓' : '↗'} ${index + 1}. ${correct ? 'Respuesta correcta' : `La correcta es: ${item.options[item.answer]}`}</strong>${!correct ? `Tu respuesta: ${item.options[answers[index]]}` : item.options[item.answer]}<em>${item.explanation}</em></div>`;
  }).join('');
  quizResult.innerHTML = `<h3>${score}/5 · ${messages}</h3><p>Revisa cada idea y vuelve a intentarlo cuando quieras.</p><div class="answer-review">${review}</div>`;
  quizResult.hidden = false;
  quizResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('resetQuiz').addEventListener('click', () => {
  quizForm.reset();
  quizResult.hidden = true;
  updateQuizProgress();
  showToast('Quiz reiniciado. ¡Nueva oportunidad para explorar!');
});

renderQuiz();
