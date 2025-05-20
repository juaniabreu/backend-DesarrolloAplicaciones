Formato del Proyecto:

assets/
Contiene recursos estáticos como imágenes, íconos, fuentes personalizadas y sonidos que se usan dentro de la aplicación.

components/
Incluye todos los componentes reutilizables de la interfaz de usuario, como botones personalizados, inputs, headers, etc. Estos componentes son independientes y se pueden usar en varias pantallas.

screens/
Contiene las pantallas principales de la app. Cada pantalla representa una vista específica, como LoginScreen, HomeScreen, ProfileScreen, etc. Se pueden agrupar en subcarpetas si hay varios flujos (por ejemplo, recetas, perfil, ajustes).

navigation/
Incluye toda la lógica relacionada a la navegación de la app, normalmente utilizando React Navigation. Aquí se configuran los stacks, tabs y navegadores anidados según los flujos de la aplicación.

services/
Contiene la lógica de acceso a datos externos, como APIs o Firebase. Por ejemplo, funciones para hacer login, registrarse, obtener datos de recetas, etc.

context/
Define contextos globales con React Context API, como el estado de autenticación, tema claro/oscuro, usuario actual, etc. Permite compartir estado entre componentes sin necesidad de pasar props.

hooks/
Contiene custom hooks para encapsular lógica reutilizable, como useAuth, useFetch, useTheme, entre otros. Mejoran la organización del código y evitan duplicación.

constants/
Incluye constantes utilizadas en toda la app, como colores, estilos, tamaños de fuente, textos fijos, etc. Esto ayuda a mantener la coherencia visual y textual.

utils/
Contiene funciones utilitarias que se pueden usar en distintas partes de la aplicación, como formatear fechas, validar emails, calcular descuentos, etc.


Colores del figma:

E5731A naranja
1D1A31 violeta fondo
FFFFFF blanco texto

branch santi