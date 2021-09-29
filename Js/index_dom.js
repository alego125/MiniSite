//EN ESTE ARCHIVO SE VAN A IR CARGANDO E IMPORTANDO TODOS LOS ARCHIVOS
import hamburgerMenu from "./menu_hamburguesa.js";
//Se importa la funcion hamburgerMenu de la carpeta menu_hamburger, importante esta importacion se hace en automatico y se debe realizar el agregado del .js al final 
import {digitalClock,alarm} from "./reloj.js";
//De esta manera importamos dos funciones funtas en una linea {funcion 1, funcion 2}

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburgerMenu(".panel-btn",".panel", ".menu a"); //Como tercer parametro pasamos menu a es decir cualquier enlace dentro de menu
    //Le pasamos a la funcion por parametros los dos selectores que vamos a usar
    digitalClock("reloj","#activar-reloj","#desactivar-reloj");
    //Le pasamos igualmente a alarm los parameros a usar que son la direccion donde se encuentra el sonido y los dos botones o selectores de los botones de iniciar y parar
    alarm("asset/alarma.mp3","#activar-alarma","#desactivar-alarma");
});