import { JSDOM as _JSDOM } from "jsdom";
const JSDOM = _JSDOM;

global.document = new JSDOM(Ques2.html).window.document;


// const form = document.getElementById("searchform")

// form.addEventListener('submit' , function(f){
//     f.preventDefault()

//     const search = document.getElementById("search")
//     const name = search.split(' ').join('')

//     fetch('https://api.github.com/search/repositories?q=' + name).then(response =>response.json())
//     .then(info => {
//         console.log(info)
//     })

// })


