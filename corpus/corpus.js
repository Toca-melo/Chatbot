const dialogo = [
    {
        pregunta: "Hola",
        respuesta: "¡Hola! Bienvenido a GameZone ¿En qué puedo ayudarte hoy?"
    },
    {
        pregunta: "Adios",
        respuesta: "¡Adiós! Gracias por visitar GameZone. ¡Esperamos verte pronto!"
    },
    {
        pregunta: "Ok",
        respuesta: "¡Perfecto! Si tienes alguna otra pregunta o necesitas ayuda, no dudes en decírmelo."
    },
    {
        pregunta: "Gracias",
        respuesta: "¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas o necesitas algo más, no dudes en preguntar."
    },
    {
        pregunta: "Muy buen servicio",
        respuesta: "¡Muchas gracias! Nos alegra saber que estás satisfecho con nuestro servicio. Si necesitas algo más, aquí estamos para ayudarte."
    },
    {
        pregunta: "Buenas tardes",
        respuesta: "¡Buenas tardes! ¿En qué puedo ayudarte hoy?"
    },
    {
        pregunta: "Buenas noches",
        respuesta: "¡Buenas noches! ¿Cómo puedo asistirte hoy?"
    },
    {
        pregunta: "Buenos días",
        respuesta: "¡Buenos días! ¿En qué puedo ayudarte hoy?"
    },
    {
        pregunta: "¿Qué tal?",
        respuesta: "¡Todo bien, gracias! ¿Y tú? ¿En qué puedo ayudarte hoy?"
    },
    {
        pregunta: "¿Cómo estás?",
        respuesta: "Estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?"
    }
];

const informacion = [
    {
        pregunta: "¿Qué es GameZone?",
        respuesta: "Somos una tienda de videojuegos, ofrecemos una amplia variedad de juegos para todos los gustos, desde acción y aventura hasta estrategia y simulación."
    },
    {
        pregunta: "¿Dónde está ubicada GameZone?",
        respuesta: "GameZone está ubicada en el centro comercial Plaza Gamer, en la Avenida de los Videojuegos, número 123."
    },
     {
        pregunta: "¿Dónde están ubicados?",
        respuesta: "Estamos ubicados en el centro comercial Plaza Gamer, en la Avenida de los Videojuegos, número 123."
    },
    {
        pregunta: "¿Cuáles son los horarios de atención de GameZone?",
        respuesta: "Nuestro horario de atención es de lunes a sábado de 10:00 a 20:00 horas y domingos de 11:00 a 18:00 horas."
    },
    {
        pregunta: "¿Cuáles son sus horarios de atención?",
        respuesta: "Nuestro horario de atención es de lunes a sábado de 10:00 a 20:00 horas y domingos de 11:00 a 18:00 horas."
    },
    {
        pregunta: "¿Ofrecen envíos a domicilio?",
        respuesta: "Sí, ofrecemos envíos a domicilio dentro de la ciudad. Puedes realizar tu pedido a través de nuestra página web o llamando a nuestra tienda."
    },
    {
        pregunta: "¿Tienen algún programa de fidelización o descuentos?",
        respuesta: "Sí, contamos con un programa de puntos donde puedes acumular puntos por cada compra y canjearlos por descuentos en futuras compras."
    },
    {
        pregunta: "¿Aceptan tarjetas de crédito y débito?",
        respuesta: "Sí, aceptamos todas las principales tarjetas de crédito y débito, así como pagos en efectivo."
    },
    {
        pregunta: "¿Tienen una política de devoluciones?",
        respuesta: "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original y con el recibo de compra."
    },
    {
        pregunta: "¿Ofrecen garantía en los productos?",
        respuesta: "Sí, todos nuestros productos nuevos tienen una garantía de 1 año. Los productos usados tienen una garantía de 6 meses."
    },
    {
        pregunta: "¿Puedo comprar tarjetas de regalo?",
        respuesta: "Sí, ofrecemos tarjetas de regalo en diferentes denominaciones que puedes usar para comprar cualquier producto en nuestra tienda."
    },
    {
        pregunta: "¿Ofrecen servicios de reparación de consolas?",
        respuesta: "Sí, ofrecemos servicios de reparación para consolas de videojuegos. Puedes traer tu consola a nuestra tienda y nuestro equipo técnico la revisará."
    }
];

const juegos = [
    {
        pregunta: "¿Qué tipos de videojuegos ofrecen?",
        respuesta: "Ofrecemos una amplia variedad de videojuegos, incluyendo acción, aventura, deportes, estrategia, simulación y más. Tenemos títulos para todas las plataformas como PlayStation, Xbox, Nintendo Switch y PC."
    },
    {
        pregunta: "¿Tienen videojuegos para todas las edades?",
        respuesta: "Sí, contamos con videojuegos para todas las edades, desde juegos para niños hasta títulos para adultos. Cada juego tiene una clasificación por edad para ayudarte a elegir el adecuado."
    },
    {
        pregunta: "¿Puedo reservar un videojuego antes de su lanzamiento?",
        respuesta: "Sí, puedes reservar videojuegos antes de su lanzamiento. Simplemente visita nuestra tienda o nuestra página web para realizar la reserva."
    },
    {
        pregunta: "¿Ofrecen videojuegos en formato digital?",
        respuesta: "Sí, ofrecemos una selección de videojuegos en formato digital que puedes descargar directamente a tu consola o PC."
    },
    {
        pregunta: "¿Tienen videojuegos de segunda mano?",
        respuesta: "Sí, contamos con una sección de videojuegos de segunda mano a precios reducidos. Todos los juegos usados son revisados y garantizados en buen estado."
    },
    {
        pregunta: "¿Puedo intercambiar videojuegos usados?",
        respuesta: "Sí, aceptamos intercambios de videojuegos usados. Puedes traer tus juegos a nuestra tienda y recibir un crédito que puedes usar para comprar otros juegos."
    },
    {
        pregunta: "¿Tienen videojuegos exclusivos o ediciones especiales?",
        respuesta: "Sí, ofrecemos videojuegos exclusivos y ediciones especiales que incluyen contenido adicional, coleccionables y más. Consulta nuestra tienda para ver las últimas novedades."
    },
    {
        pregunta: "¿Ofrecen soporte técnico para videojuegos?",
        respuesta: "Sí, ofrecemos soporte técnico para ayudarte con cualquier problema relacionado con los videojuegos que compres en nuestra tienda."
    },
    {
        pregunta: "¿Puedo comprar tarjetas de regalo para videojuegos?",
        respuesta: "Sí, tenemos tarjetas de regalo disponibles en diferentes denominaciones que puedes usar para comprar videojuegos en nuestra tienda o en línea."
    },
    {
        pregunta: "¿Tienen videojuegos en oferta o descuentos?",
        respuesta: "Sí, regularmente ofrecemos ofertas y descuentos en videojuegos. Puedes consultar nuestra sección de ofertas en la tienda o en nuestra página web para ver las promociones actuales."
    },
    {
        pregunta: "¿Puedo probar un videojuego antes de comprarlo?",
        respuesta: "Sí, en nuestra tienda tenemos estaciones de juego donde puedes probar algunos de los videojuegos antes de decidirte a comprarlos.",
    },
    {
        pregunta: "¿Tienen videojuegos de realidad virtual?",
        respuesta: "Sí, ofrecemos una selección de videojuegos de realidad virtual para plataformas compatibles. Consulta con nuestro personal para más detalles sobre los títulos disponibles."
    },
    {
        pregunta: "¿Ofrecen servicios de reparación de consolas de videojuegos?",
        respuesta: "Lo sentimos, pero  actualmente no ofrecemos servicios de reparación de consolas de videojuegos."
    },
    {
        pregunta: "¿Puedo comprar accesorios para videojuegos?",
        respuesta: "Sí, ofrecemos una amplia gama de accesorios para videojuegos, incluyendo controladores, auriculares, cargadores y más. Puedes encontrarlos en nuestra tienda o en línea."
    },
    {
        pregunta: "¿Tienen videojuegos multijugador en línea?",
        respuesta: "Sí, contamos con una variedad de videojuegos multijugador en línea que puedes disfrutar con amigos o jugadores de todo el mundo. Consulta nuestra selección en la tienda o en nuestra página web."
    },
    {
        pregunta: "¿Ofrecen videojuegos educativos o para aprender?",
        respuesta: "Sí, tenemos una selección de videojuegos educativos que pueden ayudar a aprender habilidades como matemáticas, ciencias, idiomas y más. Consulta nuestra sección de juegos educativos en la tienda."
    },
    {
        pregunta: "¿tienen videjuegos para Play Station?",
        respuesta: "Sí, ofrecemos una amplia variedad de videojuegos para PlayStation, incluyendo títulos exclusivos y populares. Puedes encontrar juegos para todas las versiones de PlayStation, desde PS4 hasta PS5."
    },
    {
        pregunta: "¿tienen videojuegos para Xbox?",
        respuesta: "Sí, contamos con una amplia selección de videojuegos para Xbox, incluyendo títulos exclusivos y populares. Puedes encontrar juegos para todas las versiones de Xbox, desde Xbox One hasta Xbox Series X."
    },
    {
        pregunta: "¿tienen videojuegos para Nintendo Switch?",
        respuesta: "Sí, ofrecemos una variedad de videojuegos para Nintendo Switch, incluyendo títulos exclusivos y populares. Puedes encontrar juegos que aprovechan al máximo las características únicas de la consola."
    },
    {
        pregunta: "¿tienen videojuegos para PC?",
        respuesta: "Sí, contamos con una amplia selección de videojuegos para PC, incluyendo títulos populares y de última generación. Puedes encontrar juegos en formato físico y digital.",
    },
    {
        pregunta: "¿tienen videojuegos de deportes?",
        respuesta: "Sí, ofrecemos una variedad de videojuegos de deportes que incluyen fútbol, baloncesto, béisbol, hockey y más. Puedes encontrar títulos populares y simulaciones realistas."
    },
    {
        pregunta: "¿tienen videojuegos de acción y aventura?",
        respuesta: "Sí, contamos con una amplia selección de videojuegos de acción y aventura que ofrecen emocionantes historias y jugabilidad dinámica. Desde juegos de mundo abierto hasta plataformas, tenemos algo para todos los gustos."
    },
    {
        pregunta: "¿tienen videojuegos de estrategia?",
        respuesta: "Sí, ofrecemos una variedad de videojuegos de estrategia que desafían tus habilidades tácticas y de planificación. Puedes encontrar juegos en tiempo real y por turnos para disfrutar."
    },
     {
        pregunta: "Quiero un videojuego",
        respuesta: "Claro, tenemos una amplia selección de videojuegos. ¿Tienes algún título específico en mente o prefieres que te recomendemos algunos?"
    },
    {
        pregunta: "Qué videojuego me recomiendas",
        respuesta: "Claro, ¿qué tipo de videojuego te gusta? Tenemos acción, aventura, deportes, estrategia y más. Puedo recomendarte algunos basados en tus preferencias."
    },
    {
    pregunta: "Recomiéndame un juego de aventura",
    respuesta: "Si te gustan las aventuras, podrías probar The Legend of Zelda, Uncharted o Red Dead Redemption."
  },
  {
    pregunta: "Recomiéndame un juego de acción",
    respuesta: "¡Perfecto! Para acción, algunos favoritos son God of War, Call of Duty y Devil May Cry."
  },
  {
    pregunta: "Qué juego de terror me recomiendas",
    respuesta: "Te pueden interesar títulos como Resident Evil, Outlast o The Evil Within."
  },
  {
    pregunta: "Qué juego de carreras me recomiendas",
    respuesta: "Si buscas juegos de carreras, te recomiendo Forza Horizon, Gran Turismo o Mario Kart."
  },
  {
    pregunta: "Qué juego de estrategia me recomiendas",
    respuesta: "En estrategia, Age of Empires, Civilization y Starcraft son grandes opciones."
  },
  {
    pregunta: "Qué juego multijugador recomiendas",
    respuesta: "Depende si buscas online o local. Fortnite, Apex Legends o Rocket League son populares."
  },
  {
    pregunta: "Qué juego puedo jugar con mi pareja",
    respuesta: "¡Qué buena idea! Te recomiendo It Takes Two, Overcooked o Unravel Two."
  },
  {
    pregunta: "Me recomiendas un juego para niños",
    respuesta: "Sí, opciones como Minecraft, Mario Odyssey o LEGO son muy divertidas y seguras para niños."
  },
  {
    pregunta: "Qué juego está de moda ahora",
    respuesta: "Algunos de los más populares ahora son Helldivers 2, Elden Ring y el nuevo Call of Duty."
  }
];



const corpus = [
    ...dialogo,
    ...informacion,
    ...juegos
]

module.exports = corpus;
