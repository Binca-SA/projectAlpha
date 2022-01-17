<h1>PROYECTO ALPHA - About Binca</h1>

<h2>DESCRIPCIÓN DEL PROYECTO</h2>
    <p><br>One page de presentación personal y profesional. En el que se trata: una breve presentación de la profesional, a qué se dedica y cómo contactarla</br></p>

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
        <li>index.html</li>
        <li>README.md</li>
    </ul>
        <ul>css
            Se encuentra el archivo style.css
        </ul>
        <ul>Images
            Carpeta para los SVG y las imagenes que se utilizan en el proyecto 
        </ul>
        <ul>JS
            Realización del cambio de background al cambiar de sección. 
            Cuando "home" está *checked* el background es de color sólido. 
            En el resto de secciones es un gradiente animado. 
        </ul>
        <ul>sass 
            <p>Encontramos las hojas de estilo parciales SCSS y el archivo padre SCSS. </p>
            <ul><br>organización de las carpetas</br>
                <ul><br>htmlelements</br> - Elementos del HTML nativos que se le han cambiado los estilos que tenian prederminados: 
                    <li><br>_buttons.scss</br></li>
                    <li><br>_details.scss</br></li>
                </ul>
                <ul><br>layout</br> - Los elemetos que conforman la estrcutura de la web, se ha dividio en secciones: 
                    <li>_about.scss -Sección "sobre mi"</li>
                    <li>_contact.scss -Sección "contacto"</li>
                    <li>_fortalezas.scss -Sección "fortalezas"</li>
                    <li>_home.scss -Sección "home"</li>
                    <li>_navigation.scss -Sección "sobre mi"</li>
                </ul>
                <ul><br>_arquitectura.scss -estrcutura base/grid de la página web</ul>
                <ul><br>librería</br> - variables y mixins empleados. Todas las variables y mixins están explicadas para qué sirven en sus respectivos archivos
                    <li>_mixins.scss</li>
                    <li>_variables.scss</li>
                </ul>
                <ul><br>site</br> - características generales de site
                    <li>_site.scss</li>
                </ul>
                </ul><br>theme</br> - 
                    <li>_helpers.scss - background y tipografía base de las secciones</li>
                    <li>_inputs.scss - funcionamiento de la transición de las secciones</li>
                </ul>
            </ul>
        </ul>        
<h3>SINTAXIS</h3>
    <ul><br>Comentarios</br>
        <li>Se escribe en mayúscula el título de las secciones</li>
        <li>Se escribe en minúscula todo el resto, ser lo más explicito posible para evitar perder el tiempo y facilitar la comprensión. </li>
        <li>Sin espaciado entre el código y los comentarios</li>
    </ul>
    <ul><br>Tabulación en lugar de espacios en blanco</br></ul>
    <ul><br>Se permiten líneas en blanco al pasar a otro selector, tema o categoría.</br></ul>
    <ul><br>No se admiten líneas en blanco dentro de los selectores</br></ul>



