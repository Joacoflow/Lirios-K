const container = document.querySelector('.flowers');

// Lista original de mensajes
const mensajesOriginales = [
  "Te amo, Kyara 💗",
  "Me gustas mucho, Kyara",
  "Me encantas, amorcito",
  "Me gustas demasiado",
  "Me gustan tus ojos",
  "Me gusta tu sonrisa",
  "Me gusta cómo te ríes",
  "Me gusta cómo me miras",
  "Me gusta cómo eres",
  "Me gusta todo de ti",
  "Me gusta cómo te vistes",
  "Te extraño",
  "Quiero verte",
  "Abrázame",
  "Mándame besos",
  "Llámame",
  "Pegame",
  "Quedate conmigo",
  "Celame",
  "Ámame",
  "Golpeame",
  "Cuidame",
  "Esfuerzatemochito",
  "Mandamebesos",
  "Teamodoro",
  "Celáme, amor",
  "Abrázame fuerte",
  "Cuídame",
  "Extrañame"
];

// Copia que se irá vaciando
let mensajesDisponibles = [...mensajesOriginales];

// Música
const music = document.getElementById("bg-music");
let musicStarted = false;

document.addEventListener('click', (e) => {

  // Iniciar música en el primer click
  if (!musicStarted) {
    music.volume = 0.5;
    music.play().catch(() => {});
    musicStarted = true;
  }

  // Si ya no hay mensajes, reiniciar lista
  if (mensajesDisponibles.length === 0) {
    mensajesDisponibles = [...mensajesOriginales];
  }

  // Elegir mensaje sin repetir
  const index = Math.floor(Math.random() * mensajesDisponibles.length);
  const mensaje = mensajesDisponibles.splice(index, 1)[0];

  // Flor
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = `${e.clientX}px`;
  flower.style.top = `${e.clientY}px`;
  flower.textContent = '🌸';

  // Texto
  const text = document.createElement('div');
  text.className = 'love-text';
  text.textContent = mensaje;

  flower.appendChild(text);
  container.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 3000);
});
