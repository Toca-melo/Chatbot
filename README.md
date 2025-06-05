# 🎮 Chatbot Comercial con PLN: GameZoneBot

**GameZoneBot** es un asistente virtual inteligente para WhatsApp que automatiza la atención al cliente de la tienda de videojuegos **GameZone**. Utiliza técnicas de procesamiento de lenguaje natural (PLN) para responder preguntas frecuentes, sugerir videojuegos, brindar información de horarios y promociones, y mucho más.

<img src="https://github.com/user-attachments/assets/59a7dc4c-9d6f-4b9f-b869-61e6d4841445" alt="gamezonebot" width="140"/>

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

