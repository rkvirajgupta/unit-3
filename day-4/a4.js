// function storeImages(){

//     let img=document.getElementById('url').value

//     //array of Object

// // let images=JSON.parse(localStorage.getItem("images"))||[];

//     //other method of null 
//     let images=localStorage.getItem("images")

//     if(images===null){
//         images=[]
//     }
//     else{
//       images=JSON.parse(localStorage.getItem("images"))

//     }

//     images.push(img)

//     localStorage.setItem("images",JSON.stringify(images))
// }


//OR


function storeImages(){

    let img=document.getElementById('url').value

    //array of Object

 let images=JSON.parse(localStorage.getItem("images"))||[];
//  let  images=[];   dry run it with
 
    images.push(img)

    localStorage.setItem("images",JSON.stringify(images))
}