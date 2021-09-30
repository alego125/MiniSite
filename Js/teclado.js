const d = document;
//Variables que me permitiran controlar el movimiento
let x = 0,
    y = 0; //Inicializamos en 0 ambas por que las vamos a modificar dinamicamente

//Exportamos la funcion encargada de realizar los movimeintos de la bola dentro de su escenario 
export function moveBall(e, ball, stage){
    //Como parameros necesitamos pasarle el evento, el selector de la pelota y el selector del escenario
    //Lo primero que vamos a hacer antes que nada es guardar en constantes los elementos de cada selector
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        //Creamos dos variable que mediante el metodo .getBoundingClientRect() obtenemos los limites del elemento para con estos luego jugar y evitar las coliciones y que el objeto ball sobrepase al elemento stage
        limitBall = $ball.getBoundingClientRect(),
        //Esta funcion o metodo getBoundingClientRect trae un objeto del tipo DOMRect que en su interior trae propiedades de el elemento como separacion con los bordes dedl elemento que lo contiene ancho, alto del elemento asi como tambien su posicion en x y en y. Teniendo estos concepto podemos ahora jugar con ellos
        limitStage = $stage.getBoundingClientRect();
    //Pasamos los console solo para ver la tecla que se esta presionando
    console.log(e.keyCode); 
    console.log(e.key); 
    console.log(limitBall, limitStage); 
    
    //Si queremos prevenir el movimiento default de la barra de scroll para que no se mueva cuando movemos la pelotita devemos uar preventDefault, pero si lo hacemos aca afuera entonces nos apaga todos los eventos por default del teclado y eso no seria muy conveniente, es por esto que lo que hacemos es colocar el metodo dentro de cada case, y solo prevenimos el movimiento default de la barra cuando presionamos las teclas de las flechas
    //e.preventDefault();
    
    //Ahora mediante una estructura switch case evaluamos lo que viene en el parametro keycode y respecto a esto ejecutamos una accion u otra
    switch (e.keyCode) {
        case 37:            
            //Left
            
            //Con las dimensiones extraidas en las variables limitball y limitstage le devimo que mientras el limite izquierdo de la bola sea mayor que el limite izquierdo de la caja contenedora la cual siempre tendra el mimo left entonces reste a x o sea que mueva hacia la izquierda la pelotita. Aplicando este mismo principio hacemos para cada uno de los lados el mismo procedimiento con condicionales
            if(limitBall.left > limitStage.left){
                e.preventDefault();
                x--;
            } 
        break;
        case 38:      
            //up
            //Los ejes cartesianos en los navegadores son inversos por eso es que restamos a y para subir y sumamos para bajar
            if(limitBall.top > limitStage.top) {
                e.preventDefault();
                y--;
            }
            
        break;
        case 39:          
            //Right
            if(limitBall.right < limitStage.right){
                //Solo se cumple el comportamiento por default para cuando se cumplen las condiciones esto hara que cuando colicione con una de las orillas la bola entonces se vuelva a activar el comportamiento por default de la barra haciendo que esta vuelva a funcionar
                e.preventDefault();
                x++;
            }
        break;
        case 40:            
            //Down
            if(limitBall.bottom < limitStage.bottom) {
                e.preventDefault(); 
                y++;
            }
        break;
            default:
            break;
        }
    //Para realizar el movimiento de la pelotita vamos a usar una propiedad llamada transform de css que nos permite realizar el movimiento mas fluido del elemento en diferentes direcciones, a cada factor tanto x como y lo multiplicamos por 10 para que el movimiento no se vea tan despacito si no que sea mas rapido 
    $ball.style.transform = `translate(${x * 10}px, ${y * 10 }px)`;
}

export function shortcuts(e){
    /*
    //En este caso la funcion recibe el evento como parametro
    //Aqui no se ara delegacion de eventos ya que la deteccion de eventos del teclado se debe asignarse al nodo raiz en este caso el document
    console.log(e.type); //Tipo de evento
    console.log(e.key); //Tecla que realiza la accion
    console.log(e.keyCode); //Codigo de tecla que realiza la ccion
    //Las teclas especiales tienen propiedades especiales dentro del evento de teclado, estas son tomadas con valores buleanos, es decir si la presionamos nos devuelve un true, en cambio nos devuelve un false en caso de que no se presione
    console.log(`Ctrl: ${e.ctrlKey}`); 
    console.log(`Shift: ${e.shiftKey}`); 
    console.log(`Alt: ${e.altKey}`); 
    //A partir del conocimiento de esto ya podemos generar nuestros propios shortcuts o atajos de teclado
    */
    //Hacemos que cuando el usuario presione la teclas alt + A se ejecute un alerta, para esto vamos a realizar un condicional, 
    //Para validar la tecla podemos hacerlo con el nombre de la tecla key o con el codigo keycode
    if(e.key === 'p' && e.altKey){
        prompt('Has lanzado un aviso con el teclado');
    }
    if(e.key === 'a' && e.altKey){
        alert('Has lanzado una alerta con el teclado');
    }
    if(e.key === 'c' && e.altKey){
        confirm('Has lanzado un aviso de confirmacion con el teclado');
    }
    //Como podemos ver para cada uno de los atajos vamos a tener que realizar un condicional

}