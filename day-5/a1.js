// function append(s){



//     let script = document.createElement("script")
//     script.src=s
//     document.head.append(script)
//     // console.log(document)
//     // hello()             //say error in console because
//                         //depend on script to get compeletly loaded 
//                         // thats why we are uses promise 
//     //now

//     setTimeout(function(){
//       hello()  
//     },2000)     //now it works
// }

// append('1.js')

/////////////////////////////////////////////////////////////
// promise syntax

// var myPromise = new Promise(function (resolve ,reject){

// // resolve("success");

// reject("nexttime");



// });

// console.log(myPromise)

// function append(s){

//      return new Promise(function(resolve,reject){

//     let script=document.createElement("script");

//     script.src=s;
//     document.head.append(script);

//     script.onload = function () {

//         resolve("script in done");

//         // hello(); we can take it in the .than also
//     }


//     script.onerror = function () {
//         reject("load error");
//     }
// })

// }

// // console.log(append("1.js")); 
// //after that you want to do something than this is the process

// append("1.js")
// .then(function(res){

//     // console.log(res)
//      hello();

//     append('2.js').then(function(res){

//         hi()
//     })
// })
// .catch(function(e){

//     console.log(e)
// })


///////////////////////////////////////////////////


function append(s){

    return new Promise(function(resolve,reject){

   let script=document.createElement("script");

   script.src=s;
   document.head.append(script);

   script.onload = function () {

       resolve("script in done");

       // hello(); we can take it in the .than also
   }


   script.onerror = function () {
       reject("load error");
   }
})

}


async function handlevalue(){

    let res = await append('1.js')
    
    hello();
    console.log(res);
}
handlevalue()