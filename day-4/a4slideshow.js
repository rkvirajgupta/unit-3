// function start(){

//     let images_arr = JSON.parse(localStorage.getItem("images"));
    
//     let slideshow_img = document.getElementById("slideshow_image")
    
//     let i=0
    
//     setInterval(function(){
    
    
//     slideshow_img.src=images_arr[i]
//     i=i+1

//       console.log(i)

//     },2000)
    
    
//  }




// function start(){

//     let images_arr = JSON.parse(localStorage.getItem("images"));
    
//     let slideshow_img = document.getElementById("slideshow_image")
    
//     let i=0
    
//    let x = setInterval(function(){
    

//     // if(i===images_arr.length){
//     //     clearInterval(x)
//     // }

//     if(i===images_arr.length){
        
//         i=0
//     }


    
//     slideshow_img.src=images_arr[i]
//     i=i+1

//       console.log(i)

//     },1000)
    
    
//  }


var x;

function start(){

    let images_arr = JSON.parse(localStorage.getItem("images"));
    
    let slideshow_img = document.getElementById("slideshow_image")
    
    let i=0
    
    x = setInterval(function(){
    
 if(i===images_arr.length){
        
        i=0
    }

    // if(i===images_arr.length){
    //     clearInterval(x)
    // }


    slideshow_img.src=images_arr[i]
    i=i+1

      console.log(i)

    },1000)
    
    
 }

 function stop(){


  clearInterval(x)
    


 }