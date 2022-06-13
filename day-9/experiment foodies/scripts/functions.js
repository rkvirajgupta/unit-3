
const getRandomData = async (url) => {
  try {
    let res = await fetch(url);

    let data = await res.json();
    //   console.log("data:", data);

      return data.meals;
  } catch (error) {
    console.log("error:", error);
  }
};


 let getData = async (query) => {
//   console.log('query:', query)
  try {
    
      
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      let data = await res.json();
      // console.log("data:", data.meals);

      return data.meals
  } catch (error) {
    console.log("error:", error);
  }
};
export { getRandomData, getData };