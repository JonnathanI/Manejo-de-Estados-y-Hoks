# Conversión de ADN a ARN

Este script convierte una cadena de ADN en su correspondiente cadena de ARN.

## Interfaz `M`

La interfaz `M` define un tipo de objeto con claves (keys) de tipo string y valores (values) de tipo string. Esto significa que el objeto puede contener cualquier cantidad de claves de tipo string, y cada clave debe tener un valor asociado de tipo string.

## Objeto `Map`

El objeto `Map` contiene un mapeo de las bases nitrogenadas del ADN a sus correspondientes bases nitrogenadas del ARN. Por ejemplo, 'G' en ADN se convierte en 'C' en ARN, 'C' en ADN se convierte en 'G' en ARN, etc.

## Función `toRna`

La función `toRna` toma una cadena de ADN como entrada y devuelve su correspondiente cadena de ARN. Primero verifica si la cadena de ADN contiene algún carácter que no sea 'A', 'C', 'G' o 'T'. Si encuentra alguno, lanza un error indicando que la entrada de ADN es inválida. Luego, utiliza expresiones regulares para reemplazar cada base nitrogenada de la cadena de ADN por su correspondiente base nitrogenada de la cadena de ARN, utilizando el objeto `Map`.

## Exportación de `toRna`

Finalmente, la función `toRna` se exporta como la función predeterminada del módulo, lo que significa que puede ser importada y utilizada en otros archivos de código.

Esta documentación explica cómo funciona el código en su conjunto, desde la definición de la interfaz hasta la exportación de la función de conversión de ADN a ARN. Si necesitas más detalles o explicaciones sobre alguna parte específica, ¡no dudes en preguntar!
