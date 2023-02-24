# **VARIABLES EN CSS**

En CSS, las propiedades personalizadas (también conocidas como variables) contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas.Por ejemplo, el mismo color se puede utilizar en cientos de lugares diferentes, lo cual requiere buscar y reemplazar globalmente si necesitamos cambiar ese color. Las variables CSS permiten que un valor se almacene en un lugar y luego se haga referencia en varios lugares.

Para declarar propiedades personalizadas (variables) usamos un nombre que comienze con dos guiones (--), y un valor que puede ser cualquier valor válido de CSS. 

Ejemplos de variables:
1. --main-color: red; 
2. --color-oscuro: black;

Las variables se accede por medio de **var**.

Ejemplos de acceso a las variables:
1. color: var (--main-color);
2. background: var(--color-oscuro);


Las variables se deben colocar adentro de **:root{}** en la parte superior del documento CSS, la sintaxis **:root** en CSS se refiere al selector de la raíz del documento, que se utiliza para definir propiedades globales en la hoja de estilos que se aplicarán a todo el documento.

Al definir variables personalizadas dentro del selector **:root**, se asegura que estén disponibles globalmente en toda la hoja de estilos y se pueden usar en cualquier parte del documento.

Ejemplo:

:root{
    --main-color: red;
    --color-oscuro: black;
}

h1{
    color: var(--main-color: red);
}

p{
    color:var(--color-oscuro: black);
}

h2{
    color:var(--main-color: red);
}
 
 
 
 