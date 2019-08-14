const listaTweets = document.getElementById('lista-tweets');

function obtenerTweetsLocalStorage(){
    let tweets;
    if( localStorage.getItem('tweets') === null ){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function agregarTweet(event){
    event.preventDefault();     
    const tweet = document.getElementById('tweet').value;
    const li = document.createElement('li');
    li.innerText = tweet;
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet'; //Añadir clase (Se pudo usar .add()); Esta clase ya tiene CSS
    botonBorrar.innerText = 'X'; //( Se pudo usar .textContent )
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);
    agregarTweetLocalStorage(tweet);
}

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    tweetBorrar = tweet.substring(0,tweet.length-1);
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach( function(tweet, index){
        if( tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(event){
    event.preventDefault();
    if( event.target.className === 'borrar-tweet' ){
        event.target.parentElement.remove();
        borrarTweetLocalStorage(event.target.parentElement.innerText);
    }
}

function localStorageInicializar(){
    let tweets = obtenerTweetsLocalStorage();
    tweets.forEach( function(tweet){
        const li = document.createElement('li');
        li.innerText = tweet;
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    });
}

function eventListeners(){
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    listaTweets.addEventListener('click', borrarTweet);
    document.addEventListener('DOMContentLoaded', localStorageInicializar);
}

eventListeners();