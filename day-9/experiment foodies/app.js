import { navbar, searchBar, receipeOfDay } from "./components/components.js";
import { getRandomData, getData } from "./scripts/functions.js";

let header = document.querySelector("header");
header.innerHTML = navbar();

//   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
let getrandomdata = await getRandomData(
  `https://www.themealdb.com/api/json/v1/1/random.php`
);

document.querySelector(".container").innerHTML = receipeOfDay(getrandomdata);

let searchContainer = document.querySelector(".searchContainer");
searchContainer.innerHTML = searchBar();

const inputform = document.getElementById("inputform");
inputform.addEventListener("submit", (e) => {
  e.preventDefault();
});

let readMoreBtn = document.getElementById("readMore");
readMoreBtn.addEventListener("click", () => {
  storeMeal(getrandomdata);
});

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


window.addEventListener("click", (event) => {
  if (event.target.classNamec != 'form-control') {
      result.style.display = "none";
    }
})