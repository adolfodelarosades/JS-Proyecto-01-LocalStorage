// VARIABLES
// Constante Global
const listaTweets = document.getElementById('lista-tweets');

// FUNCIONES
//Añadir tweet del formulario
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
}

// Event Listeners
function eventListeners(){
    //Listener del formulario cuando se envia.
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}

eventListeners();


