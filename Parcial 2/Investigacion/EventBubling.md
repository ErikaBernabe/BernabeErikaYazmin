# **Event Bubling**

El event bubbling o burbujeo de eventos (por su traducción al español) es un método de propagación de eventos en la API del DOM.

Se da cuando activamos el evento de un elemento, y si su nodo padre tiene registrado otro evento, este último se activará automáticamente y así ira escalando en la jerarquía del DOM.

## Fases del Evento burbujeante
El evento burbujeante pasa por 3 fases bien definidas:

1. Fase de Captura: Se busca el elemento más profundo en el DOM que tenga registrado un evento en su oyente.
2. Fase de Target: Ejecuta el evento del elemento en si.
3. Fase de Burbuja: Verifica si los elementos padre de dicho elemento tienen eventos registrados en sus oyentes, si es así, ejecuta dichos eventos de manera automática.