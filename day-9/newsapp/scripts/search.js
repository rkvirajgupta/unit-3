function storeSearchterm(term) {



}

export default storeSearchterm

let searchitem=localStorage.getItem("search_term");
console.log(searchitem)

import { apiCall, appendArticles } from "/scripts/main.js"

let url=` https://shrouded-earth-23381.herokuapp.com/api/search/?q=${searchitem}`

let articles = await apiCall(url)

console.log(articles);

let main = document.getElementById("main")

appendArticles(articles, main)