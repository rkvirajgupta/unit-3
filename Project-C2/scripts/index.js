
async function menu(){

    try{
    
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
    
    let data= await res.json();
    showdata(data);
    console.log(data.meals);
    
    
    
    }
    catch(err){
      console.log(err);
    
    }
    
    }
    menu();
    
    function showdata(data){
    
    data.meals.map(function(data){
    
      var div1= document.createElement('div');
      div1.setAttribute("id","div1")
    
      var img=document.createElement('img');
      img.setAttribute("id","poster");
      img.src=data.strMealThumb
    
      var dishname=document.createElement("p")
    
      dishname.setAttribute("id","dishname")
      dishname.innerHTML=`Name:${data.strMeal}`
    
     var dishprice=document.createElement("p");
     dishprice.setAttribute("id","dishprice")
     dishprice.innerHTML=`Price:${Math.round(Math.random()*500)}₹`;
     var button = document.createElement('button')
     button.setAttribute("id","addtocart")
     button.innerHTML="add to cart";
     button.addEventListener("click",function(){
       dishcart(data);
     })
    
    div1.append(img,dishname,dishprice,button)
    document.querySelector("#menu").append(div1)
    
    })
    
    }
    var addtocart =JSON.parse(localStorage.getItem("cart"))||[];
    function dishcart(data){
    
    console.log(data);
    
    addtocart.push(data)
    
    localStorage.setItem("cart",JSON.stringify(addtocart));
    
    alert("added successfully");
    
    var value=document.querySelector("#count")
    value.innerHTML=addtocart.length;
    
    
    }
    