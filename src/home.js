import "./css/styles.css";
import "./css/stylesheet.css";
import swordImg from "./img/sword.png";
function Home(){

    const content = document.getElementById('content');

    const contentcontainer = document.createElement("div");
    contentcontainer.classList.add("home-container");

    const homeSection = document.createElement('section');
    homeSection.classList.add('home-section');

    const title = document.createElement('h1');
    title.className
    title.textContent = "Triforce Tavern";

    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = "Where Courage, Wisdom, and Power Meet on Your Plate";

    const sword= document.createElement('img');
    sword.classList.add('sword');
    sword.src = swordImg;


                            
    homeSection.appendChild(title);
    homeSection.appendChild(slogan);
    homeSection.appendChild(sword);

    contentcontainer.appendChild(homeSection);
    content.appendChild(contentcontainer);

}

export default Home;