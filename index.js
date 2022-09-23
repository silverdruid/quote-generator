let btn = document.getElementById('new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)

const url = "https://api.quotable.io/random"

function getQuote() {
      
    fetch(url)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            quote.innerText = data.content
            person.innerText = "- " + data.author
        })
        .catch((err) => {
            console.log(err);
        })
}

setInterval(getQuote(), 10000)
