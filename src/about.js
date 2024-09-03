import "./css/styles.css";
import "./css/stylesheet.css";
import triforce from "./img/triforce.png";
function Home(){

    const content = document.getElementById('content');

    const contentcontainer = document.createElement("div");
    contentcontainer.classList.add("about-container");

    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');

    const title = document.createElement('h1');
    title.textContent = "About us";

    const aboutUs= document.createElement('p');
    aboutUs.textContent = "Welcome to Triforce Tavern, where the legendary spirit of Hyrule comes alive through every dish we serve. Our restaurant is inspired by the mythical Triforce, the ultimate symbol of courage, wisdom, and power. We blend these timeless virtues into our menu, offering a unique dining experience that honors the rich traditions of Hyrule.";

    const contactUs = document.createElement('h2');
    contactUs.textContent = "Contact Us";

    const contactUsSection = document.createElement('section');
    contactUsSection.classList.add('contact-us-section');

    const sheikahSlate= document.createElement('p');
    sheikahSlate.classList.add("sheikah-slate");
    sheikahSlate.textContent = "Contact us on your Sheikah slate:   ";

    const sheikahSlateNumber= document.createElement('p');
    sheikahSlateNumber.classList.add("sheikah-slate-number");
    sheikahSlateNumber.textContent = "12345678";

    contactUsSection.appendChild(sheikahSlate);
    contactUsSection.appendChild(sheikahSlateNumber);

    const address = document.createElement('h2');
    address .textContent = "Address";


    const addressText= document.createElement('p');
    addressText.classList.add("addressText");
    addressText.textContent = "Hyrule Castle Town, Hyrule";


    const triforceLogo = document.createElement('img');
    triforceLogo.classList.add("triforce");
    triforceLogo.src = triforce;



                            

    // Append elements to about section
    aboutSection.appendChild(title);
    aboutSection.appendChild(aboutUs);
    
    aboutSection.appendChild(contactUs);
    aboutSection.appendChild(contactUsSection);
    aboutSection.appendChild(address);
    aboutSection.appendChild(addressText);
    aboutSection.appendChild(triforceLogo);
    
    // Append about section to content div
    contentcontainer.appendChild(aboutSection);
    content.appendChild(contentcontainer);

}

export default Home;