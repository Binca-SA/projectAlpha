<h1>PROYECTO ALPHA - About Binca</h1>

<h2>DESCRIPCIÓN DEL PROYECTO</h2>
    <p><b>One page de presentación personal y profesional. En el que se trata: una breve presentación de la profesional, a qué se dedica y cómo contactarla</b></p>

<h3>HERRAMIENTAS EMPLEADAS</h3>
    <p>Diseño y proptipo en Figma.</p> 
    <ul>Lenguajes empleados: 
        <li> HTML5</li>
        <li> CSS3 </li>
        <li> JAVASCRIPT</li>
    </ul>
    <ul>Preprocesador de CSS:
        <li> SASS</li>
    </ul> 
<h3>Si quieres ver una previsualización del proyecto</h3> 
    <p>[About Binca](https://www.loom.com/share/83ff869e9f134489ad078a530209c509)</p>

<h2>EXPLICACIÓN DE LA ESTRUCTURACIÓN DE LAS CARPETAS</h2>
    <ul>La carpeta raíz: "PROJECT-APLPHA" dentro de ella encontramos:
        <li><b>index.html</b></li>
        <li><b>README.md</b></li>
        <li><b>css</b>-Se encuentra el archivo style.css</li>
        <li><b>Images</b>- Carpeta para los SVG y las imagenes que se utilizan en el proyecto </li>
        <li><b>JS</b>-Realización del cambio de background al cambiar de sección. 
            Cuando "home" está *checked* el background es de color sólido. 
            En el resto de secciones es un gradiente animado.</li> 
        <li><b>sass </b>
            <p>Encontramos las hojas de estilo parciales SCSS y el archivo padre SCSS. </p>
            <ul><b>ORGANIZACIÓN DE LAS CARPETAS</b>
                <ul><b>htmlelements</b> - Elementos del HTML nativos que se le han cambiado los estilos que tenian prederminados: 
                    <li>_buttons.scss</li>
                    <li>_details.scss</li>
                </ul>
                <br>
                <ul><b>layout</b> - Los elemetos que conforman la estrcutura de la web, se ha dividio en secciones: 
                    <li>_about.scss -Sección "sobre mi"</li>
                    <li>_contact.scss -Sección "contacto"</li>
                    <li>_fortalezas.scss -Sección "fortalezas"</li>
                    <li>_home.scss -Sección "home"</li>
                    <li>_navigation.scss -Sección "sobre mi"</li>
                </ul>
                <br>
                <ul><b>_arquitectura.scss -estrcutura base/grid de la página web</ul>
                <br>
                <ul><b>librería</b> - variables y mixins empleados. Todas las variables y mixins están explicadas para qué sirven en sus respectivos archivos
                    <li>_mixins.scss</li>
                    <li>_variables.scss</li>
                </ul>
                <br>
                <ul><b>site</b> - características generales de site
                    <li>_site.scss</li>
                </ul>
                <br>
                <ul><b>theme</b> - 
                    <li>_helpers.scss - background y tipografía base de las secciones</li>
                    <li>_inputs.scss - funcionamiento de la transición de las secciones</li>
                </ul>
            </ul>    
    </ul>    
<h3>SINTAXIS</h3>
    <ul><b>1. Comentarios</b>
        <li>Se escribe en mayúscula el título de las secciones</li>
        <li>Se escribe en minúscula todo el resto, ser lo más explicito posible para evitar perder el tiempo y facilitar la comprensión. </li>
        <li>Sin espaciado entre el código y los comentarios</li>
    </ul>
    <ul><b>2. Tabulación en lugar de espacios en blanco</b></ul>
    <ul><b>3. Se permiten líneas en blanco al pasar a otro selector, tema o categoría.</b></ul>
    <ul><b>4. No se admiten líneas en blanco dentro de los selectores</b></ul>



