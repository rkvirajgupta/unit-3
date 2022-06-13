async function apiCall(url) {


    //add api call logic here
    let res = await fetch(url);
    let data = await res.json();
    return data;


}


function appendArticles(articles, main) {

    //add append logic here
    articles.map((ele)=>{
        let newsbox = document.createElement("div");
        newsbox.setAttribute("id","newsbox");

        let images= document.createElement("img");
        images.src=ele.urlToImage;

        let title = document.createElement("h2");
        title.textContent=ele.title;

        let descp = document.createElement("p");
        descp.textContent=ele.content;

        newsbox.addEventListener("click",()=>{
            localStorage.setItem("article",JSON.stringify(ele));
            window.location.href="news.html";
            console.log(ele);
        });

        newsbox.append(images,title,descp);
        main.append(newsbox);
    });

}

export { apiCall, appendArticles }