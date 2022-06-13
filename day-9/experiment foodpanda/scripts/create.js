const createCard =  (data,card) => {
    card.innerHTML="";
    data.map((elem)=>{
       let cardDiv = document.createElement("div");
       cardDiv.id = "cardDiv";
       let img = document.createElement("img");
       img.id = "cardimg"
       img.src = elem.strMealThumb
       let mealName = document.createElement("div");
       mealName.id = "mealName";
       mealName.textContent = elem.strMeal;

       let tags = document.createElement("div");
       tags.id = "tags";

       let tag1 = document.createElement("span");
       tag1.textContent = "#"+elem.strCategory;
       let tag2 = document.createElement("span");
       tag2.textContent = "#"+elem.strArea;
       let tag3 = document.createElement("span");
       tag3.textContent = "#"+elem.strTags;
       cardDiv.addEventListener("click",()=>{
        localStorage.setItem("deBouncedata", JSON.stringify(elem));
        location.href = "recipePage.html";
    })
       tags.append(tag1,tag2,tag3);
       cardDiv.append(img,mealName,tags);
       card.append(cardDiv);
    });
}


function mainAppend(data,mainParent){
    let recipieDiv = document.createElement("div");
    recipieDiv.id="recipieDiv";
    let img = document.createElement("img");
    img.src = data.strMealThumb;
    let divName = document.createElement("div");
    divName.id = "divName";
    divName.textContent = data.strMeal;

    let mainIng = document.createElement("div");
    mainIng.id = "mainIng";
    mainIng.textContent = `Main Ingredient: ${data.strCategory}`;
    let origin = document.createElement("div");
    origin.id = "origin";
    origin.textContent = `origin: ${data.strArea}`;

    let tableDiv = document.createElement("table");
    let theadDiv = document.createElement("thead");
    let trDiv = document.createElement("tr");
    let thDiv = document.createElement("th");
    thDiv.textContent = "Ingredients"

    let tbody = document.createElement("tbody");

    let arr1 = [];
    let arr2 = [];
    let i=0;
    for(let x in data){
        if(x.includes("strMeasure") && data[x] != " "){
            arr1[i] = x;
            i++;
        }
    }
    i=0;
    for(let x in data){
        if(x.includes("strIngredient") && data[x] != ""){
            arr2[i] = x;
            i++;
        }
    }

    for(let j=0; j<arr1.length; j++) {
        let ing = arr1[j];
        let measure = arr2[j];
        if(data[ing] == "" || data[measure]==" "){
            break;
        }
        else {
            let tr1div = document.createElement("tr");
            let td1Div = document.createElement("td")
            console.log(data[ing]);
            td1Div.textContent = data[ing];
            let td2Div = document.createElement("td");
            td2Div.textContent = data[measure];
            tr1div.append(td1Div,td2Div);
            tbody.append(tr1div)
        }
    }
    trDiv.append(thDiv);
    theadDiv.append(trDiv);
    tableDiv.append(theadDiv,tbody);


    var instructionDiv = document.createElement("div");
    instructionDiv.textContent = "Cooking Instruction";
    instructionDiv.id="instructionDiv";

    var strInstructions = document.createElement("div");
    strInstructions.textContent = data.strInstructions;
    strInstructions.id="strInstructions";

    

    recipieDiv.append(img,divName,mainIng,origin,tableDiv,instructionDiv,strInstructions)
    mainParent.append(recipieDiv);
}

const searchDataAppend = async (url) => {
    let res = await fetch(url);
    let data = await res.json();

    return data.meals
}

export {createCard,searchDataAppend,mainAppend};