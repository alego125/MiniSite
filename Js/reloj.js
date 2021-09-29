const d = document;

//Debemos recordar que solamente se puede tener una funcion que exporte por default. En este caso no va  a hacer falta exportar por default ninguna funcion a si que silamente exportamos cada funcion 
export function digitalClock(clock, btnPlay, btnStop){
    //La funcion recibe 3 parametros que son los identificadores de los elementos necesarios del html para interactuar, el reloj como tal es decir donde se imprimira el reloj, el boton play que es el boton de inicio y el boton stop que s el boton de parar reloj
    let clockTempo;
    //Variable que va a almacenar el setInterval que se almacena mas adelante y con esta misma variable la usamos para detener el proceso
    d.addEventListener("click", e => {
        if(e.target.matches(btnPlay)){
            //Cuando presionemos el boton play entonces se va a iniciar el reloj
            //Para esto vamos a usar un setInterval que se ejecute por segundo
            clockTempo = setInterval(() => { //Asignamos el setInterval a clockTempo
                let clockHour = new Date().toLocaleTimeString();
                //Cone esta linea lo que hacemos es imprimir la hora con formato local gracias al metodo tolocaleTimeString()
                //Seguidamente lo que haremos es asignar mediante innerHTML la variable anterior al html
                d.getElementById(clock).innerHTML = `<h3 style="font-size: 50px;">${clockHour}</h3>`;
            }, 1000);
            //Ahora para evitar que una vez iniciado el reloj se puede volver a iniciar y otra y otra vez entonces lo vamos a desactivar al boton para asi evitar un problema de sobrecarga del proceso si el usuario queire volver a presionarlo
            e.target.disabled = true;
            //Agregamos la clase css que quita el boton de pantalla 
            d.querySelector(btnPlay).classList.add("hidde-btn");       
        }
        if(e.target.matches(btnStop)){
            //Para detener el setIterval usamos un clearInterval
            clearInterval(clockTempo);
            d.getElementById(clock).innerHTML = null; //Ponemos el elemento html a null para que desaparezca el html de la pantalla
            //Mediante un querySelector lo que hacemos es al btnPlay seleccionarlo y activarlo nuevamente
            d.querySelector(btnPlay).disabled = false;      
            //Colocamos la el botn nuevamente mediante css      
            d.querySelector(btnPlay).classList.remove("hidde-btn");       
        }
    });
}

export function alarm(sound, btnPlay, btnStop){
    //Para la alarma sonora tendremos 3 parametros el primero que recibe el sonido o archivo de sonido el segundop el boton de inicio y el tercero el boton de parar
    //Creamos una variable vacia que me controle la temporizacion dedl timeout
    let alarmTempo;
    //Creamos mediante createElement una etiqueta del tipo audio para agregar el sonido
    const $alarm = d.createElement('audio');
    //Y a la etiqueta esta le colocamos el atributo src con lo que venga en el atributo de sound que es la ruta del audio que se va a reproducir
    $alarm.src = sound;
    d.addEventListener('click', e =>{
        //Detectamos al evento y luego mediante condicionales detectamos si el evento coincide con el boton que hemos apretado
        if(e.target.matches(btnPlay)){
            //Una vez que apretamos play se ejecuta un setTimeOut que se ejecuta una sola vez luego de haber pasado cierto tiempo 
            alarmTempo = setTimeout(()=>{
                //Entonces aca adentro lo unico que va a hacer es hacer sonar la alarma con el metodo play() y luego de esto dejamos pasar 2 segundo y se ejecuta
                $alarm.play();
            }, 2000);
            //Desactivamos el boton de play para no generar una secuencia de reproduccion en caso de presionar muchas veces el boton, lo cual generaria un problema de rendimiento, para eso desactivamos el boton y solucionamos ese problema ya que no se podra volver a presionar una vez presionado
            e.target.disabled = true;
            //Agregamos la clase css que quita el boton de pantalla 
            d.querySelector(btnPlay).classList.add("hidde-btn");       
        }
        if(e.target.matches(btnStop)){
            //Para parar la alarma solamente limpiamos el settimeout
            clearTimeout(alarmTempo);
            //Y seguido a esto detenemos el sonido para que este no siga ejecutando.
            //Para detener el audio debemos acceder a un metodo que nos da la API de audio del navegador la cual se llama paused() es decir pausamos el sonido, pero si lo dejamos asi una vez que volvamos a reproducir la alarma se comienza a reproducir desde alli, entonces lo que vamos a necesitar es resetarla para eso usamos una propiedad de la API de audio que es currentTime
            $alarm.pause();//Pausamos el audio
            $alarm.currentTime = 0; //Regresamos al origen el audio
            //Volvemos a hacer visible el boton play para poder volver a ejecutar la alarma
            d.querySelector(btnPlay).disabled = false;            
            //Colocamos la el botn nuevamente mediante css      
            d.querySelector(btnPlay).classList.remove("hidde-btn");       
        }        
    });
}