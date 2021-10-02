//Declaramos las variables de document y window para ahorrarnos escritura en el codigo
const d = document,
    w = window;


export default function scrollTopButton(btn){
    //Creamos la funcionque vamos a exportar en este caso al ser la unica funcion que vamos a usar entonces la exportamos por defecto directamente y com oparametro usamos el selector del boton para cuando lo presionemos
    //Antes de detectar el click del boton debemos detectar el scroll y a que distancia del scroll top de la barra vertical, es decir a que distancia de la parte superior queremos que el boton se muestre en pantalla
    const $scrollBtn = d.querySelector(btn); //Guardamos el elemento button en una variable

    //Para detectar la distancia que se ha movido la barra de scroll podemos hacerlo desde el objeto window o desde la etiqueta html
    //Para esto vamos a tener para window pageYOffset que nos da la distancia de la barra de desplazamiento desde 0px que es el inicio hasta Xpx que es hasta donde queremos llegar y despues para document tenemos documentElement.scrollTop que nos da los pixeles desde el top del document hasta donde queremos llegar

    //Programamos el evento del window que es el relacionado con el sroll
    w.addEventListener('scroll', e=>{
        console.log(w.pageYOffset, d.documentElement.scrollTop); //Solo mostramos lo que es una y otra en la consola
        //Primero nos creamos una variable scrollTop que almacene pageYOffset y generamos un operador tambien ded cortosircuito para el caso de que el navegador no llegase a soportar esta etiqueta entonces con el operador o || le pasamos la otra que es la del cdocument para el caso de que no detecte la primera
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        //Enotces ahora marcamos mediante un condicional a partir de que cantidad de pixeles queremos que se comience a mostrar el boton
        if(scrollTop > 600){
            //En caso de que la distancia de la barra de scroll con el inicio sea mayor a 600px entonces se quita la clase hidden del eleemnto y entonces se hace visible en pantalla
            $scrollBtn.classList.remove("hidden");
        }else{
            //Caso contrario si es menor a 600 entonces se coloca y el elemento queda oculto
            $scrollBtn.classList.add("hidden");
        }
        //Gracias a las transitions que le pusimos en css este aprecera y desaparecera de manera smooth o suave
    });

    //Programamos el evento de click que es el relacionado con el document
    d.addEventListener('click', e=>{
        //Mediante un condicional preguntamos si el objeto que genero el evento, su selector coincide con lo que viene en la variable btn que es la que trae el selector del boton, entonces ejecuta una propiedad del window llamada srollTo, es es un objeto que tiene una serie de parametros importantes por ejemplo
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth", //Comportamiento, es decir como queremos que se comporte ese scoll por ejemplo en este caso smooth suave, es muy similar al scroll behavior de css, que venria siendo su sorrelacionario de css en js
                top:0//El valor a donde queremos que la barra regrese al ejecutar el objeto en este caso a 0 que es el inicio, por ejemplo en el caso de que tuviesemos una barra lateral de desplazamiento y estuviesemos jugando con el pageXOfset por ejemplo entonces tiene otra propiedad que se llama left: que lo que hace es regresar a una posicion en el eje de las x o en la barra lateral
            });
        }
    });
}