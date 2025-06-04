const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');
const natural = require('natural');
const fs = require('fs');
const stringSimilarity = natural.JaroWinklerDistance;

const client = new Client();

const corpus = require('./corpus/corpus.js');
const numeros = require('./numeros.js'); // Array de números tipo: ['5219991234567@c.us']
const desconocidoPath = './desconocido.json';

const bienvenida = "¡Bienvenido a GameZone! 🎮 Soy tu asistente virtual en la tienda definitiva para gamers. ¿Qué estás buscando hoy?";
const imagenBienvenida = MessageMedia.fromFilePath('./logo.png');

// Cargar preguntas desconocidas si existen
let desconocido = [];
if (fs.existsSync(desconocidoPath)) {
  desconocido = JSON.parse(fs.readFileSync(desconocidoPath));
}

// Buscar mejor respuesta en el corpus
function buscarRespuesta(inputUsuario) {
  let mejorCoincidencia = { puntuacion: 0.74, respuesta: "No entendí la pregunta." };

  corpus.forEach(item => {
    const puntuacion = stringSimilarity(inputUsuario.toLowerCase(), item.pregunta.toLowerCase());
    if (puntuacion > mejorCoincidencia.puntuacion) {
      mejorCoincidencia = { puntuacion, respuesta: item.respuesta };
    }
  });

  return mejorCoincidencia;
}

// WhatsApp
client.on('qr', qr => qrcode.generate(qr, { small: true }));

client.on('ready', async () => {
  console.log('Cliente listo');

  // Enviar mensaje de bienvenida a todos los números
  for (const numero of numeros) {
    await client.sendMessage(numero, imagenBienvenida, {caption:bienvenida});
    console.log(`Bienvenida enviada a ${numero}`);
  }
});

client.on('message', message => {
  const numero = message.from;
  const { puntuacion, respuesta } = buscarRespuesta(message.body);

  if (puntuacion < 0.75) {
    desconocido.push({ pregunta: message.body });
    console.log(`Pregunta desconocida registrada: ${message.body}`);
    fs.writeFileSync(desconocidoPath, JSON.stringify(desconocido, null, 2));
  }
  setTimeout(() => {
    console.log(`Mensaje recibido de ${numero}: ${message.body}`);
    client.sendMessage(numero, respuesta);
  }, 8000);
});

client.initialize();
