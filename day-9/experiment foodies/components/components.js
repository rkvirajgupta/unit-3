const navbar = () => {
  return `<a href="index.html" class="logo"
        ><i class="material-icons"> restaurant </i>Hungry</a
      >

      <div id="menu-bar" class="fas fa-bars"></div>
          
      
      <nav class="navbar">
        <a href="index.html"><i class="material-icons"> home </i>Home</a>
        <a href="latest.html"
          ><i class="material-icons"> donut_small </i>Latest</a
        >
        <a href="#"><i class="material-icons"> person </i></a>
      </nav>`;
};

const searchBar = () => {
  return `<div class="header_search">
        <form action="" id="inputform" autocomplete='off'>
          <input type="search" name="" id="search" placeholder="Search" />
      
          <button type="submit">
            <i class="material-icons"> search </i>
          </button>
          <div id="result"></div>
        </form>
      </div>`;
};


const receipeOfDay = (random) => {


  let data = random[0];
  console.log("data:", data);

  let { strMeal, strInstructions, strMealThumb } = data;

  // let { }
  return `<div class="receipe_day">
           <h1> <a href='index.html'>Receipe Of The Day</a></h1>
            <div class="receipe">
              <div class="foodImg">
                <img
                  src="${strMealThumb}"
                  alt=""
                />
              </div>
              <div class="foodDiscription">
                <h1>${strMeal}</h1>
                <p>${strInstructions}
                </p>
                <button class="readMore" id='readMore'>Read More</button>
              </div>
            </div>
          </div>`;
};



export { navbar, searchBar, receipeOfDay };
