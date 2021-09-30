//EN ESTE ARCHIVO SE VAN A IR CARGANDO E IMPORTANDO TODOS LOS ARCHIVOS
import hamburgerMenu from "./menu_hamburguesa.js";
//Se importa la funcion hamburgerMenu de la carpeta menu_hamburger, importante esta importacion se hace en automatico y se debe realizar el agregado del .js al final 
//Las funciones que no se exportan por default debemos usar la destructuracion descrucuring {} para hacer la importacion de las funciones
import {digitalClock,alarm} from "./reloj.js";
//De esta manera importamos dos funciones funtas en una linea {funcion 1, funcion 2}
import { shortcuts, moveBall } from "./teclado.js";
//Importamos de el archivo de teclado la funcion de shortcuts

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburgerMenu(".panel-btn",".panel", ".menu a"); //Como tercer parametro pasamos menu a es decir cualquier enlace dentro de menu
    //Le pasamos a la funcion por parametros los dos selectores que vamos a usar
    digitalClock("reloj","#activar-reloj","#desactivar-reloj");
    //Le pasamos igualmente a alarm los parameros a usar que son la direccion donde se encuentra el sonido y los dos botones o selectores de los botones de iniciar y parar
    alarm("asset/alarma.mp3","#activar-alarma","#desactivar-alarma");
});

//Para los movimientos con el teclado vamos a tener 3 tipos de eventos (cuando presiono, cuando suelto y cuando dejo presionado), todos los vamos a aplicar a el documento o nodo raiz
//cuando se use los eventos del teclado para generar movimientos como sera el caso este se debe asignar el evento al document, pero hay que saber que tambien se pueden asignar a elementos como elementos de un formulario en caso de que este no implique movimientos
d.addEventListener('keydown', e=>{ //Este evento se ejecuta inmediatamente cuando presiono la tecla (Es el mas usado)
    //Cuadno detecta el evento de keydown entonces ejecuta la funcion shortcut que recibe el evento y programamos en el otro archivo js
    shortcuts(e);
    //Mandamos a llamar a la funcion encargada de realizar el movimeinto de la bola 
    moveBall(e, ".ball", ".stage");
});
//Dentro del evento vamos a ver propiedades de este y una de estas propiedades es keycode: donde estara el codigo numerico correspondiente a la tecla, ya que cada una teine un codigo unico que la identifica

/* d.addEventListener('keyup', e =>{//Este evento se ejecuta inmediatamente despues pero de soltar la tecla
    shortcuts(e);
});


d.addEventListener('keypress', e =>{//Este evento se ejecuta mientras mantenga presionada la tecla
    shortcuts(e);
}); */