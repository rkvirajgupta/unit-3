function navBar(){
    return `<div id="navbar">
    <div id="navLeft">
        <div id="subDiv">
            <img id="logo" src="https://assets-global.cpcdn.com/assets/logo_circle-b64d2213e198178ddebdc070777b8a499069aa570a6aa12244a441482ae5ed92.png" alt="logo">
            <img id="logoWord" src="https://assets-global.cpcdn.com/assets/logo_text-368daae18951c011f6ec999fcff08f7dd386c2673b7f0e4cda58227138c6b300.png" alt="logoWords">
            <button id="signNav">Sign up</button>
            <button id="loginNav">Log in</button>
        </div>
    </div>
    <div id="navRight">
        <div id="feed">
          <div id="latest">
            <i class="fa-solid fa-arrow-trend-up"></i>
              Latest
            </div>
            <div> 
              <i class="fa-solid fa-address-book"></i>
              Contact
            </div>
            <div>
              <i class="fa-solid fa-comment"></i>
              Feedback
            </div>
        </div>
    </div>
</div>`

}

export default navBar;