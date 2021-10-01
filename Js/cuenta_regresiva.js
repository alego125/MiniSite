const d = document;
//Exportamos por defecto por que es la unica funcion que vamos a tener en nuestro archivo
export default function countdown(id, limitDate, finalMessage, alarmSound, btnAlarm){    
    //Como parametros estaran el id del selector, la defha limite, el mensaje final de la cuenta, la direccion del archivo de sonido de la alarma y el selector del boton para detener la alarma
    //Colocamos el elemento que seleccionamos por id en una constate $countdown
    const $countdown = d.getElementById(id),
    //Luego creamos cotra constante donde se transforma la fecha que le pasamos en parametro a formato Date y a su vez como vamos a realizar un calculo de fechas lo que hacemos es usar el metodo getTime para obtener el tiempo timestamp es decir en milisegundos (ms)
        countdownDate = new Date(limitDate).getTime(),
        //Creamos un elemento de html de audio para reproducir la alarma
        $alarm = d.createElement("audio"),
        //Obtenemos el elemento del boton y lo asociamos a una variable para luego utilizarlo mas adelante
        $btnAlarma = d.getElementById(btnAlarm);
        

    //Realizamos la declaracion de una variable que contenga un setInterval dentro del cual se va realizar la logica del programa y este se va a actualizar cada segundo para asi realizar la cuenta regresiva segundo a segundo
    let countDownTempo = setInterval(()=>{
        //Dentro de este intervalo de tiempo creamos primero una variable que nos detecte el instante actual de teimpo en el que nos encontramos
        let now = new Date().getTime(),
        //Obtenemos la cuenta regresiva mediante la resta, de el instante actual el cual por logica va a ir aumentando a la fecha limite que es una fecha fija, ahora entonces en base a esto podemos calcular todo lo demas a partir de este limitime
            limitTime = countdownDate - now,
            //Creamos la variables para saber los dias, horas, minutos y segundos que nos faltan para llegar a la fecha limite
            //Primero dividimos los milisegundo que quedan para la fecha limite entre los factores de conversion para llegar de milisegundo a dias, siendo 1000 milisegundos 1 segundo, 60 segundos 1 minuto, 60 minutos 1 hora y 24 horas 1 dia
            days = Math.floor(limitTime/(1000* 60 * 60 * 24)), //Para redondear usamos Math.floor por que queremos que valla hacia el numero inmediato hacia abajo
            //Como las horas es el sobrante de los dias entonces lo que tenemos que hacer es en vez de usar la divicion usamos el modulo que nos da el sobrante de los dias y a ese sobrante le debemos ahora si sacar las horas dividiendo toda la operacion por el factor de conversion a horas y asi sucesivamente hasta los milisegundos con cada uno de los sobrantes
            hours = ("0" + Math.floor((limitTime % (1000* 60 * 60 * 24) / (1000 * 60 * 60)))).slice(-2),
            //Como podemos observar arriba lo que hicimos es concatenar un 0 a la cadena esto es para que cuando por ejemplo tengamos horas menores a 10 por ejemplo 9 nos aparezca 09, es decir que mediante la concatenacion con "0" que es cadena de texto convertirmos el math.floor tambien a texto por lo cual ahora juntamos todo en un parentesis y mediante la propiedad de las cadenas slice le indicamos que solo nos muestre 2 elementos por lo cual cuando la cuenta llegue a valores de un digito se mostrara el 0 que le agregamos
            //De igual manera hacemos lo mismo para los minutos aca abajo y lo mismo tambien con los segundo que es el que le sigue
            minutes = ("0" + Math.floor((limitTime % (1000* 60 * 60) / (1000 * 60)))).slice(-2),
            seconds = ("0" + Math.floor((limitTime % (1000* 60) / 1000))).slice(-2);

        //Colocamos el mensaje en el elemento html countdown que sera el siguiente 
        $countdown.innerHTML = `<h3 style="font-size: 30px;">Faltan: ${days} dias ${hours} horas ${minutes} minutos y ${seconds} segundos</h3>`;

        //Por ultimo creamos un condicional mediante el cual vamos a mostrar el mensaje final al llegar la cuenta a cero
        if(limitTime < 0){
            clearInterval(countDownTempo);
            $countdown.innerHTML = `<h3 style="font-size: 30px;">${finalMessage}</h3>`;   
            //Mediante la variable que contiene al botn de la alarma le decimos que agregue la clase que le hace visible y le da estilo  
            $btnAlarma.classList.add("visible");
            //Seteamos el sonido de la alarma a la etiqueta que se va a encargar de ejecutar el sonido
            $alarm.src = alarmSound;
            //Le damos play para que inicie
            $alarm.play();
            $btnAlarma.addEventListener('click',()=>{
                //Cuando en el boton se escucha el evento de click entonces se remueve ese boton 
                    $btnAlarma.classList.remove("visible");
                    //Se pausa la alarma
                    $alarm.pause();
                    //y se vuelve al inicio
                    $alarm.currentTime = 0;
            });
        }                
    }, 1000);
       
}