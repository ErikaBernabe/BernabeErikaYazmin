# **VARIABLES EN CSS**

En CSS, las propiedades personalizadas (también conocidas como variables) contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas.Por ejemplo, el mismo color se puede utilizar en cientos de lugares diferentes, lo cual requiere buscar y reemplazar globalmente si necesitamos cambiar ese color. Las variables CSS permiten que un valor se almacene en un lugar y luego se haga referencia en varios lugares.

Ejemplos de variables:
1. --main-color: red; 
2. --color-oscuro: black y se accede como , background: var(--color-oscuro);

Las variables se accede por medio de **var**.

Ejemplos de acceso a las variables:
1. color: var (--main-color);
2. background: var(--color-oscuro);


Las variables se deben colocar en la parte superior del documento CSS, adentro de **:root{}**
 
 
 
 