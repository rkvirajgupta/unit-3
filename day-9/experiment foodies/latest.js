import { navbar, searchBar } from "./components/components.js";
import { getData } from "./scripts/functions.js";

let header = document.querySelector("header");
header.innerHTML = navbar();

let searchContainer = document.querySelector(".searchContainer");
searchContainer.innerHTML = searchBar();

let container = document.querySelector(".container");

displayData();
async function displayData() {
  let data = await getData("");
  
    container.innerHTML = "";
    
  data.forEach((el) => {
    let card = document.createElement("div");
    card.className = "card";

    let imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";

    let img = document.createElement("img");
    img.src = el.strMealThumb;

    let h = document.createElement("h3");
    h.innerText = el.strMeal;

    let btn = document.createElement("button");
    btn.innerText = "Read More";

    btn.className = " readMore";

    btn.addEventListener("click", () => {
      storeMeal(el);
    });

    imgDiv.append(img);
    card.append(imgDiv, h, btn);

    container.append(card);
  });
}



let storeMeal = (obj) => {
 
    localStorage.removeItem("receipeData");
  localStorage.setItem("receipeData", JSON.stringify(obj));
  window.location.href = "receipe.html";
};


let result = document.getElementById("result");

let getQuery = async () => {
  let query = search.value;

  if (query == "") {
    result.style.display = "none";
  } else {
    let data = await getData(query);
    // console.log('data:', data)

    result.style.display = "block";
    result.innerHTML = "";

    data.forEach((el) => {
      let name = document.createElement("div");

      name.addEventListener("click", () => {
        storeMeal(el);
      });

      let p = document.createElement("p");
      p.innerText = el.strMeal;
      let img = document.createElement("img");
      img.src = el.strMealThumb;

      name.append(img, p);
      result.append(name);
    });
  }

  //   data.forEach(el => {
  //    console.log("el:", el.strMeal);
  // });
};




let timerId;
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    func();
  }, delay);
}

let search = document.getElementById("search");
search.addEventListener("keyup", () => {
  debounce(getQuery, 500);
});
