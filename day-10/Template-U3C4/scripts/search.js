function storeSearchterm(term) {

    document.querySelector("#searchbar").addEventListener("keypress",(e)=>{
        var search_term = document.querySelector("#searchbar").value
        if(e.key=="Enter" && search_term=="cricket"){
         var search_term = "cricket"
         localStorage.setItem("search_term",JSON.stringify(search_term))
         window.location.href="search.html"
       }
       else if(e.key=="Enter" && search_term!="cricket"){
         var search_term = search_term;
         localStorage.setItem("search_term",JSON.stringify(search_term))
         window.location.href="search.html"
       }
       
      })
      

}

export default storeSearchterm