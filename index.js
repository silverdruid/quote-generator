let btn = document.getElementById('new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

window.addEventListener("load", getQuote())
btn.addEventListener("click", getQuote())

  function getQuote() {
    const url = "https://api.quotable.io/random"

    fetch(url).then((data) = data.json()).then((item) => {
        quote.innerText = item.content
        person.innerText = item.author
    })
}

