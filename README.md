# 🤖 GameZone Bot - Asistente Virtual para WhatsApp

Bienvenido a **GameZone Bot**, un asistente virtual desarrollado con Node.js que se conecta a WhatsApp Web para responder preguntas frecuentes utilizando procesamiento de lenguaje natural (PLN).

---

## 🧠 Descripción General

GameZone Bot es un chatbot que responde automáticamente a mensajes de clientes utilizando una base de conocimientos (corpus). Usa técnicas simples de PLN para encontrar la respuesta más parecida a la pregunta enviada. Además, aprende de nuevas preguntas al registrarlas si no encuentra una respuesta adecuada.

---

## 🧱 Arquitectura Físico-Técnica

### 📌 Componentes Principales

| Componente | Descripción |
|------------|-------------|
| **WhatsApp Web** | Plataforma a la que se conecta el bot usando `whatsapp-web.js` para enviar y recibir mensajes. |
| **Bot en Node.js** | Lógica principal del sistema: procesamiento de mensajes, similitud, respuestas y aprendizaje. |
| **Corpus (`corpus.js`)** | Archivo con pares pregunta-respuesta para responder automáticamente. |
| **Archivo de preguntas desconocidas (`desconocido.json`)** | Registra preguntas nuevas que no fueron respondidas. |
| **Librería `natural`** | Utiliza la distancia Jaro-Winkler para medir similitud entre preguntas. |
| **Imagen de bienvenida (`logo.png`)** | Imagen enviada a los usuarios al iniciar sesión. |
| **Lista de números (`numeros.js`)** | Lista de contactos a los que se les envía un mensaje inicial. |

---

### 🖼️ Diagrama Lógico

```plaintext
+---------------------------+
|    Usuario en WhatsApp   |
+-----------+---------------+
            |
            v
+---------------------------+
|     WhatsApp Web API      |  <-- (a través de whatsapp-web.js)
+---------------------------+
            |
            v
+---------------------------+
|     Bot Node.js App       |
|  - Procesamiento de msg   |
|  - Comparación con corpus |
|  - Lógica de respuestas   |
+-----------+---------------+
            |
    +-------+-------+
    |               |
    v               v
Corpus (JS)    desconocido.json
(Preguntas)    (Aprendizaje pasivo)

           +--------------------+
           |  Librería "natural"|
           | (Jaro-Winkler)     |
           +--------------------+
