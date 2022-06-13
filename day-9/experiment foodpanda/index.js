import navBar from "./components/navBar.js"
import {createCard,searchDataAppend} from "./scripts/create.js"


let parent = document.querySelector("#navBarParent")
parent.innerHTML = navBar();
let timerId;
async function main(){
    let response = await getData();
    if(response === false) {
        return false;
    }
    else {
        response.map((elem)=>{
            try{
                
                appendDebounce(elem);
            }
            catch(err){
                alert(err);
            }
        });
    }
   
}
document.querySelector("form>input").addEventListener("input",function() {
    
    if(timerId){
        clearTimeout(timerId);      //this is the most importnat concept remeber it
    }                                //line 26 to line 35
    timerId = setTimeout(()=>{
        main(); 
    },1000);   
    
});


async function getData(){
    let searchWord = document.querySelector("#input").value;
    if(searchWord == ""){
        deBounceResult.innerHTML=null;
        deBounceResult.style.height = "0px"
    }
    else {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`;
        let res = await fetch(url);
        let data = await res.json();
        // console.log("response",data)
        if(data.meals == null || data.meals == undefined) {
            return false;
        }
        else {
            return data.meals;
        }
    }

}
let deBounceResult = document.querySelector("#resultBox")
function appendDebounce(res){
    deBounceResult.style.height = "150px"
    deBounceResult.style.backgroundColor = "white"
    deBounceResult.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    let p = document.createElement("p");
    p.textContent = res.strMeal;
    p.style.cursor = "pointer"
    p.addEventListener("click",()=>{
        localStorage.setItem("deBouncedata", JSON.stringify(res));
        location.href = "recipePage.html";
    })
    
    deBounceResult.append(p);
}
window.onclick = function(){
    deBounceResult.innerHTML=null;
    deBounceResult.style.height = "0px"
    deBounceResult.style.backgroundColor = "#F8F6F2"
}

async function recipeOfDay(){
    try{

        let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let data = await res.json();

        createCard(data.meals,card);


    }catch(err){
        alert(err);
    }
}
recipeOfDay();

let card = document.querySelector("#card")
let searchDivs = document.querySelector("#searchDivs")

 //this is the most importnat concept remeber it
//line no 102 to 119 why we use async here because its a promise and in promise we always use 
//async function that why look line no 103



document.querySelector("form>button").addEventListener("click",async (elem)=>{
    elem.preventDefault();
    let searchWord = document.querySelector("#input").value;
    if(searchWord.length == 0){
        alert("Enter Search Keyword")
    }
    else {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`;
        let res = await searchDataAppend(url);
        createCard(res,searchDivs);
        searchDivs.style.display="grid";
        searchDivs.style.gridTemplateColumns = "repeat(4,1fr)";
    }
    
});
document.querySelector("#latest").addEventListener("click",()=>{
    location.href = "latest.html"
})