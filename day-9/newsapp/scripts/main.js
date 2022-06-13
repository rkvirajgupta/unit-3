async function apiCall(url) {


    try{
        let res=await fetch(url);

        let data = await res.json();

        return data
    }
    catch(e){
        console.log(e)
    }



}


function appendArticles(articles, main) {

articles.map((data)=>{


let div1 = document.createElement("div");
div1.id="div1"

let image = document.createElement('img');
image.id="poster"
image.src=data.urlToImage

let title= document.createElement('h5');
title.id="p"
title.innerHTML=`TOP NEWS::>>${data.title}`

div1.append(image,title);

div1.addEventListener("click",function(){

showdata(data)
   
});

main.append(div1)


})

}

var arr=[]
var showdata= (data)=>{
    arr.push(data)
    localStorage.setItem("article",JSON.stringify(arr))

    window.location.href="news.html"


}
export { apiCall, appendArticles }