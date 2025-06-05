# 🎮 Chatbot Comercial con PLN: GameZoneBot

**GameZoneBot** es un asistente virtual inteligente para WhatsApp que automatiza la atención al cliente de la tienda de videojuegos **GameZone**. Utiliza técnicas de procesamiento de lenguaje natural (PLN) para responder preguntas frecuentes, sugerir videojuegos, brindar información de horarios y promociones, y mucho más.

---

## 🌟 Características Principales

- *Respuestas inteligentes* usando similitud semántica
- *Reconocimiento de lenguaje natural* con Jaro-Winkler
- *Organización modular* del corpus en temas
- *Registro de preguntas desconocidas* para entrenamiento futuro
- *Envío automático de imagen de bienvenida*
- *Ejecutado con WhatsApp Web sin APIs externas*

---

## 🔄 Flujo de Procesamiento

1. **Recepción de mensaje** desde WhatsApp vía `whatsapp-web.js`
2. **Preprocesamiento** del texto: limpieza, minúsculas, acentos
3. **Comparación semántica** con corpus usando Jaro-Winkler (umbral ≥ 0.74)
4. **Clasificación de intención**: diálogo, información o juegos
5. **Generación de respuesta** con mensajes personalizados
6. **Persistencia de preguntas desconocidas** en archivo local

---

# 📦 Estructura del Proyecto

```
    gamezone-bot/
    ├── corpus/
    │   └── corpus.js          # Preguntas y respuestas organizadas
    ├── desconocido.json       # Registro de preguntas no reconocidas
    ├── logo.png               # Imagen enviada como bienvenida
    ├── numeros.js             # Números autorizados
    ├── index.js               # Lógica principal del bot
    ├── package.json           # Dependencias y configuración del proyecto
    └── README.md              # Documentación del proyecto
```


---

## 🛠️ Arquitectura Técnica

### Diagrama de Componentes

```mermaid
flowchart TB
    subgraph WhatsApp
        WAPI[WhatsApp Web API]
    end

    subgraph BotApp
        BOT[Bot Principal - Node.js]
        NLP[Procesamiento de Lenguaje Natural]
        CORPUS[Corpus de Preguntas]
        LOGS[desconocido.json]
    end

    Usuario --> WAPI
    WAPI --> BOT
    BOT --> NLP
    NLP --> CORPUS
    NLP --> BOT
    BOT --> LOGS
    BOT --> WAPI
    WAPI --> Usuario
```

---

#🚀 Instalación y Configuración

-git clone https://github.com/tuusuario/gamezone-bot.git
cd gamezone-bot

-npm install

-npm start

## 🛠️ Dependencias Principales

| Paquete            | Función                                     |
|--------------------|---------------------------------------------|
| `whatsapp-web.js`  | Conexión con WhatsApp Web                   |
| `natural`          | Similitud de texto con Jaro-Winkler         |
| `fs` / `fs-extra`  | Lectura y escritura de archivos locales     |
| `qrcode-terminal`  | Muestra el QR en consola                    |

---

## 📌 Requisitos del Sistema

- ✅ Node.js v16 o superior  
- ✅ NPM v8 o superior  
- ✅ WhatsApp activo en un teléfono móvil  
- ✅ Navegador Chromium instalado  

---

## 💬 Ejemplos de preguntas reconocidas

**🎧 Diálogo**
- Hola
- Gracias
- Buenas tardes

**🏬 Información**
- ¿Dónde están ubicados?
- ¿Tienen servicio de envío?
- ¿Cuáles son los horarios?

**🎮 Juegos**
- ¿Qué videojuego me recomiendas?
- ¿Tienen juegos de carreras?
- ¿Venden videojuegos usados?

---

## 📚 Entrenamiento y Corpus

El archivo `corpus.js` contiene más de **60 preguntas** categorizadas en:
- Diálogo
- Información
- Videojuegos

Además, las preguntas sin coincidencias se almacenan automáticamente en `desconocido.json` para analizarlas y enriquecer el corpus con nuevas entradas.

---



