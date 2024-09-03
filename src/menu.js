import "./css/styles.css";
import "./css/stylesheet.css";
import creamyHeartySoup from "./img/creamy-heart-soup.png";
import pumpkinStew from "./img/pumpkin-stew.png";
import monsterCake from "./img/monster-cake.png";
import veggieRiceBalls from "./img/veggie-rice-balls.png";
import rockFood from "./img/rock-food.png";
import steamedFish from "./img/steamed-fish.png";
function Menu(){


    const content = document.getElementById('content');

    const aboutSection = document.createElement('section');
    aboutSection.classList.add('menu-section');

    const menuContainer= document.createElement('div');
    menuContainer.classList.add("menu-container");

    //TITLE

    const title = document.createElement('h1');
    title.textContent = "Our menu";

    //Could probably store the img, titles and text in arrays then make this into a for loop instead of manually making them all.

    //CARD 1

    const card1 = document.createElement('div');
    card1.classList.add("card");

    const card1img = document.createElement('img');
    card1img.classList.add("card-img");
    card1img.src = creamyHeartySoup;

    const card1border = document.createElement('div');
    card1border.classList.add("card-border");

    const card1title = document.createElement('div');
    card1title.classList.add("card-title");
    card1title.innerHTML ="Creamy Heart Soup";

    const card1body= document.createElement('div');
    card1body.classList.add("card-body");
    card1body.innerHTML = "Enjoying this sweet soup with another person will bring you both closer together.";

    card1.appendChild(card1img);
    card1.appendChild(card1border);
    card1.appendChild(card1title);
    card1.appendChild(card1body);

    //CARD 2

    const card2 = document.createElement('div');
    card2.classList.add("card");

    const card2img = document.createElement('img');
    card2img.classList.add("card-img");
    card2img.src = pumpkinStew;

    const card2border = document.createElement('div');
    card2border.classList.add("card-border");

    const card2title = document.createElement('div');
    card2title.classList.add("card-title");
    card2title.innerHTML ="Pumpkin Stew";

    const card2body= document.createElement('div');
    card2body.classList.add("card-body");
    card2body.innerHTML = "Simply simmer a fortified pumpkin to make this dish. A favorite in Kakariko Village.";

    card2.appendChild(card2img);
    card2.appendChild(card2border);
    card2.appendChild(card2title);
    card2.appendChild(card2body);


    //CARD 3

    const card3 = document.createElement('div');
    card3.classList.add("card");

    const card3img = document.createElement('img');
    card3img.classList.add("card-img");
    card3img.src = monsterCake;

    const card3border = document.createElement('div');
    card3border.classList.add("card-border");

    const card3title = document.createElement('div');
    card3title.classList.add("card-title");
    card3title.innerHTML = "Monster Cake";

    const card3body = document.createElement('div');
    card3body.classList.add("card-body");
    card3body.innerHTML = "It's said that once you have a taste of this cake, you'll never forget its sweetness.";

    card3.appendChild(card3img);
    card3.appendChild(card3border);
    card3.appendChild(card3title);
    card3.appendChild(card3body);


    //CARD 4

    const card4 = document.createElement('div');
    card4.classList.add("card");

    const card4img = document.createElement('img');
    card4img.classList.add("card-img");
    card4img.src = veggieRiceBalls;

    const card4border = document.createElement('div');
    card4border.classList.add("card-border");

    const card4title = document.createElement('div');
    card4title.classList.add("card-title");
    card4title.innerHTML = "Veggie Rice Balls";

    const card4body = document.createElement('div');
    card4body.classList.add("card-body");
    card4body.innerHTML = "This home-style dish of Kakariko Village is stuffed with the bounty of the mountains.";

    card4.appendChild(card4img);
    card4.appendChild(card4border);
    card4.appendChild(card4title);
    card4.appendChild(card4body);

    //CARD 5

    const card5 = document.createElement('div');
    card5.classList.add("card");

    const card5img = document.createElement('img');
    card5img.classList.add("card-img");
    card5img.src = steamedFish;

    const card5border = document.createElement('div');
    card5border.classList.add("card-border");

    const card5title = document.createElement('div');
    card5title.classList.add("card-title");
    card5title.innerHTML = "Steamed Fish";

    const card5body = document.createElement('div');
    card5body.classList.add("card-body");
    card5body.innerHTML = "A refined dish made by wrapping a fresh fish in fragrant wild greens and cooking it.";

    card5.appendChild(card5img);
    card5.appendChild(card5border);
    card5.appendChild(card5title);
    card5.appendChild(card5body);

    //CARD 6

    const card6 = document.createElement('div');
    card6.classList.add("card");

    const card6img = document.createElement('img');
    card6img.classList.add("card-img");
    card6img.src = rockFood;

    const card6border = document.createElement('div');
    card6border.classList.add("card-border");

    const card6Ribbon = document.createElement('h4');
    card6Ribbon.classList.add("ribbon-right");
    card6Ribbon.innerHTML = "New";

    const card6title = document.createElement('div');
    card6title.classList.add("card-title");
    card6title.innerHTML = "Rock-Hard Food";

    const card6body = document.createElement('div');
    card6body.classList.add("card-body");
    card6body.innerHTML = "A dish gone awry after adding the wrong ingredient. Chewing your way through this won't be fun, but it will fill you up when you're between a rock and a hard place.";

    card6.appendChild(card6img);
    card6.appendChild(card6border);
    card6border.appendChild(card6Ribbon);
    card6.appendChild(card6title);
    card6.appendChild(card6body);

                            

    // Append elements to about section
    aboutSection.appendChild(title);
    aboutSection.appendChild(menuContainer);
    menuContainer.appendChild(card1);
    menuContainer.appendChild(card2);
    menuContainer.appendChild(card3);
    menuContainer.appendChild(card4);
    menuContainer.appendChild(card5);
    menuContainer.appendChild(card6);
    // Append about section to content div
    content.appendChild(aboutSection);
    


}

export default Menu;