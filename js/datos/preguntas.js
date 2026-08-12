/* Preguntas frecuentes de la portada.
   La respuesta es una lista de bloques: `{ p }` para un párrafo y
   `{ lista }` para una enumeración. Así se pueden mezclar sin escribir
   HTML dentro de los datos. */

export const preguntas = [
    {
        pregunta: '¿Has abandonado la serie?',
        respuesta: [
            { p: 'No. Esta serie requiere tiempo y es normal que el ritmo no sea constante.' }
        ]
    },
    {
        pregunta: '¿En qué versión de Minecraft juegas?',
        respuesta: [
            { p: 'Actualmente estoy en la versión 1.20.' }
        ]
    },
    {
        pregunta: '¿Usas mods en la serie?',
        respuesta: [
            { p: 'En esta serie no uso mods, aunque los he usado anteriormente.' }
        ]
    },
    {
        pregunta: '¿Por qué no usas mods?',
        respuesta: [
            { p: 'Principalmente por dos motivos:' },
            {
                lista: [
                    'Porque me gusta jugar a Minecraft lo más vanilla posible.',
                    'Por fallos, bugs, corrupción de mundos, etc.'
                ]
            },
            { p: 'En resumen: si quiero un mundo para toda la vida, busco la forma más segura y la que más me gusta.' }
        ]
    }
];
