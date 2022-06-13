async function apiCall(url) {


    try{
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
        return(data)
            }
            catch(err){
              return(err)
            }


}


function appendArticles(articles, main) {

    data.map(function(data){
        var div = document.createElement("div")
        div.setAttribute("id","news")
        div.addEventListener("click",function(){
          myfunction(data)
        })
        var content = document.createElement("h2")
        content.innerHTML=data.description
        var img = document.createElement("img")
        img.src=data.urlToImage
        div.append(img,content)
        document.querySelector("#main").append(div)
      })

}

export { apiCall, appendArticles }