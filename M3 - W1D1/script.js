 // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

document.addEventListener("DOMContentLoaded", function (){

    document.querySelector(".blog-sidebar .p-4:nth-of-type(3) li:nth-child(2)").style.display = "none"
})


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".


rimuoviPadre = document.querySelector(".font-weight-bold");

rimuoviPadre.addEventListener("click", function (event){

event.preventDefault()   
document.querySelector(".px-0").style.display = "none"
})


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

// let message = querySelectorAll(".blog-post-meta a");

for (let message of document.querySelectorAll(".blog-post-meta a"))

  message.addEventListener("mouseover", function (event){

    alert(event.target.innerText)
})