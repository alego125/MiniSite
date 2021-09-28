export default function hamburgerMenu(panelBtn, panel, menuLink){
    //Como parametros le pasamos los elementos que va a suar uno es el boton que genera las acciones y el otro es el panel que se va a mostrar o esconder, como tercer parametro ponemos un link del menu el cual se usara para tambien cerrar la seccion
    const d = document;
    //Simplificamos el codigo para no tener que andar usando siempre document si no directamente d
    d.addEventListener('click', (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            //Le decimos si el selector coincide con lo que tenemos en la variable panelBtn o con cualquier selector que se encuentre dentro de la clase panelBtn (panelBtn * con el asterisco queremos decir que selecciona todo lo que esta dentro del elemento panelBtn), es decir si presionamos el boton del panel entonces se ejecute lo siguiente
            d.querySelector(panel).classList.toggle("is-active");
            //Entocnes se entra al elemento con el selector de panel y denro de este mediante classList se agrega o se quita segun la tenga o no mediante toggle de classList el selector is-active que es el que quita todo el menu de pantalla
            d.querySelector(panelBtn).classList.toggle("is-active");
            //Le agregamos al panelBtn tambien la clase is-active para que se animen las lineas del botn 
        }
        
        //Creamos un condicional aparte para ver si el objeto que origino el evento uno de los link del menu nav
        if(e.target.matches(menuLink)){
            //Entonces si el selector coincide con lo que viene en la variable menuLink
            //Removemos la clase is-active tanto del panel para que este se oculte nuevamente, como del boton para que este vuelva a la forma de lineas de hamburguesa
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }

    });
}