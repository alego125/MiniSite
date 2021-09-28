//EN ESTE ARCHIVO SE VAN A IR CARGANDO E IMPORTANDO TODOS LOS ARCHIVOS
import hamburgerMenu from "./menu_hamburguesa.js";
//Se importa la funcion hamburgerMenu de la carpeta menu_hamburger, importante esta importacion se hace en automatico y se debe realizar el agregado del .js al final 

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburgerMenu(".panel-btn",".panel", ".menu a"); //Como tercer parametro pasamos menu a es decir cualquier enlace dentro de menu
    //Le pasamos a la funcion por parametros los dos selectores que vamos a usar
});