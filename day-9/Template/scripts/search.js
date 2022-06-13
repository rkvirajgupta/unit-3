function storeSearchterm(term) {

localStorage.setItem("search_term",JSON.stringify(term));

}

export default storeSearchterm