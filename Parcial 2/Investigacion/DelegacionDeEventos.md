# **Delegacion De Eventos**

Delegación de eventos es un mecanismo a través del cual evitamos asignar event listeners a múltiples nodos específicos del DOM, asignando un event listener a solo un nodo padre que contiene el resto de estos nodos.

La ventaja de usar delegación de eventos es que en el caso hipotético de tener n elementos con la clase btn, solo hemos registrado un event listener para todos estos elementos, mientras que sin delegación de eventos debemos registrar n event listeners, es decir uno por cada nodo.


## Hay dos formas de añadir eventos.
 Una desde el html con atributos añadiendo por ejemplo un onClick() en el elemento que queremos que desencadene la acción y otra desde el javascript utilizando el método addEventListener(). No sé si hay una forma mejor u otra peor, pero es mejor separar el javascript del html y evitar el antipatrón de mezclar html y js.

La delegación de eventos consiste en escuchar los eventos en el elemento padre para capturarlo cuando ocurra en sus hijos.