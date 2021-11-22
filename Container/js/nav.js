const creatNav = () => {
    let nav = document.querySelector('.navBar');

    nav.innerHTML = `
    <div class="navBarContainer">
            <img src="img/fashionlogo.png" alt="logo" id="navLogo">
            <div class="navItems">
                <div class="searchSection">
                    <input type="text" class="searchBox" placeholder="search for brand, products">
                    <button class="searchBtn">search</button>
                </div>
                <!--32px png image-->
                <a href="#"><img src="img/user1.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="linksContainer">
            <li class="listItems"><a href="index.html" class="linkList">home</a></li>
            <li class="listItems"><a href="#" class="linkList">clothing</a></li>
            <li class="listItems"><a href="#" class="linkList">shoes</a></li>
            <li class="listItems"><a href="#" class="linkList">Kids</a></li>
            <li class="listItems"><a href="#" class="linkList">accessories</a></li>
        </ul>
        `
}

creatNav();