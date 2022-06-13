import { navbar, receipeOfDay } from "./components/components.js";

let header = document.querySelector("header");
header.innerHTML = navbar();

let container = document.querySelector(".container");
// container.innerHTML = receipeOfDay();

let receipeData = JSON.parse(localStorage.getItem("receipeData"));

const displayReceipe = (data) => {
  let el;
  if (data.strMeal ==undefined) {
    el = data[0];
  }
  else {
    el = data;
  }
  



  let recipe = document.querySelector(".receipe_day");
  recipe.innerHTML = `<h1>${el.strMeal}</h1>
        <div class="receipe">
          <div class="foodImg">
            <img src="${el.strMealThumb}" alt="" />
          </div>
          <div class="foodDiscription">

            <h3>Category : ${el.strCategory} </h3>

            <p>${el.strInstructions}</p>
          </div>
        </div>`;

  for (let key in el) {
    let tr = document.createElement("div");
    tr.className = "tdata";

    let ingre = document.querySelector(".ingrediant");
    let measure = document.querySelector(".measure");

    if (key.includes("strIngredient")) {
      if (el[key].trim()) {
        var td1 = document.createElement("p");
        td1.innerText = el[key];
        ingre.append(td1);
      }
    }
    if (key.includes("strMeasure")) {
      if (el[key].trim()) {
        var td2 = document.createElement("p");
        td2.innerText = el[key];
        measure.append(td2);
      }
    }
  }
    let video = document.getElementById("ytplayer");
 
    video.href = el.strYoutube;


};

displayReceipe(receipeData);
