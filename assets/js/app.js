// VARIABLES
// Constante Global
const listaTweets = document.getElementById('lista-tweets');

// FUNCIONES

// Obtener Tweets del Local Storage
function obtenerTweetsLocalStorage(){
    let tweets;

    //Revisamos los valores de Local Storage
    if( localStorage.getItem('tweets') === null ){
        tweets = [];
    }else{
        //JSON.parse convierte una cadena JSON ({"result":true, "count":42}) a un objeto.
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Agregar Tweets al Local Storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    
    // Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de arreglo a string para Local Storage (pq solo puede aceptar Strings)
    //JSON.stringify() convierte un object JS o value a JSON string.
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Añadir Tweet
function agregarTweet(event){
    // Detiene el action por default
    event.preventDefault(); 
    
    // Recuperar el valor del textarea
    const tweet = document.getElementById('tweet').value;

    // Crear elemento li (tweet)
    const li = document.createElement('li');
    li.innerText = tweet;

    // Crear botón eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet'; //Añadir clase (Se pudo usar .add()); Esta clase ya tiene CSS
    botonBorrar.innerText = 'X'; //( Se pudo usar .textContent )

    //Añadir botón eliminar al tweet
    li.appendChild(botonBorrar);

    //Añadir tweet a la lista (A pesar que se declaro con const)
    listaTweets.appendChild(li);

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

//Eliminar Tweet del listado
function borrarTweet(event){
    /*
    Esta función se dispara cuando pulso en cualquier elemento de la lista.
    Para eso se usa Delegation, para saber exactamente en cual de todos los 
    elementos de la lista se ha pulsado.

    .classList => Regresa un arreglo con todas las class asociadas al elemento
    .className => Regresa todas las clases que haya (ideal si solo hay una)
    */

    //console.log('Diste click en la lista');
    event.preventDefault();

    //Delegation
    if( event.target.className === 'borrar-tweet' ){
        //console.log('Diste click en eliminar');
        //Elimino el padre del botón (li)
        event.target.parentElement.remove();
        alert('Tweet Eliminado');
    }else{
        //console.log('Diste click en otra parte');
    }
}

// Event Listeners
function eventListeners(){
    //Listener del formulario cuando se envia.
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Lister de la lista de Tweets
    listaTweets.addEventListener('click', borrarTweet);
}

eventListeners();


