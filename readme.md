#PROYECTO ALPHA - About Binca

##DESCRIPCIÓN DEL PROYECTO
    **One page de presentación personal y profesional. En el que se trata: una breve presentación de la profesional, a qué se dedica y cómo contactarla**

###HERRAMIENTAS EMPLEADAS
    Diseño y proptipo en Figma. 
    Lenguajes empleados: 
        * HTML5
        * CSS3 
        * JAVASCRIPT
    Preprocesador de CSS: 
        * SASS

###Si quieres ver una previsualización del proyecto: 
    [About Binca](https://www.loom.com/share/83ff869e9f134489ad078a530209c509)

##EXPLICACIÓN DE LA ESTRUCTURACIÓN DE LAS CARPETAS
    La carpeta raíz: "PROJECT-APLPHA" dentro de ella encontramos: 
        *index.html
        *README.md
        >css
            *Se encuentra el archivo style.css
        >Images
            *Carpeta para los SVG y las imagenes que se utilizan en el proyecto 
        >JS
            *Realización del cambio de background al cambiar de sección. 
            Cuando "home" está *checked* el background es de color sólido. 
            En el resto de secciones es un gradiente animado. 
        >sass 
            *Encontramos las hojas de estilo parciales SCSS y el archivo padre SCSS. 
            **organización de las carpetas**
                **htmlelements** - Elementos del HTML nativos que se le han cambiado los estilos que tenian prederminados: 
                    *_buttons.scss
                    *_details.scss
                **layout** - Los elemetos que conforman la estrcutura de la web, se ha dividio en secciones: 
                    *_about.scss -Sección "sobre mi"
                    *_contact.scss -Sección "contacto"
                    *_fortalezas.scss -Sección "fortalezas"
                    *_home.scss -Sección "home"
                    *_navigation.scss -Sección "sobre mi"
                    *_arquitectura.scss -estrcutura base/grid de la página web
                **librería** - variables y mixins empleados. Todas las variables y mixins están explicadas para qué sirven en sus respectivos archivos
                    *_mixins.scss
                    *_variables.scss
                **site** - características generales de site
                    *_site.scss
                **theme** - 
                    *_helpers.scss - background y tipografía base de las secciones
                    *_inputs.scss - funcionamiento de la transición de las secciones
                
###SINTAXIS
    *Comentarios
        *Se escribe en mayúscula el título de las secciones
        *Se escribe en minúscula todo el resto, ser lo más explicito posible para evitar perder el tiempo y facilitar la comprensión. 
        *Sin espaciado entre el código y los comentarios
    *Tabulación en lugar de espacios en blanco
    *Se permiten líneas en blanco al pasar a otro selector, tema o categoría.
    *No se admiten líneas en blanco dentro de los selectores



