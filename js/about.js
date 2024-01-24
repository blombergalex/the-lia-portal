$(() => {

    function Coder(image, name, email, food, pet, about) {
        this.image = image,
        this.name = name,
        this.email = email,
        this.food = food,
        this.pet = pet,
        this.about = about,
        this.createAbout = function () {
            $(".main-content").append(`
                <div class="about-me">
                    <img class="coder-image" src="${this.image}" height=100px width=100px alt="image of ${this.name}">
                    <h2>${this.name}</h2>
                    <a href="mailto: ${this.email}">${this.email}</a>
                    <p><span>Favourite Food: </span>${this.food}</p>
                    <p><span>Favourite Animal: </span>${this.pet}</p>
                    <p>${this.about}</p>
                </div>
                `
            )
        }
    }

    let darius = new Coder(
        "./images/cat.jpg",
        "Darius Kaya",
        "darius@kaya.com",
        "Good food",
        "Rhino",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti incidunt voluptas magni voluptatem eum, accusantium suscipit fuga sequi laborum minima voluptates maiores sit at sed dolorem temporibus necessitatibus unde deleniti corporis. Nam voluptatibus consequuntur quasi magni error nostrum illo incidunt. Itaque ipsa ab blanditiis. Eius itaque similique mollitia dolorem voluptate dolore animi inventore consequuntur? Tempore laboriosam dolorem porro quis dolore beatae deserunt saepe nobis? Nemo deserunt nisi adipisci quia quae obcaecati numquam quas qui, assumenda fuga temporibus. Tempore ab quis doloremque sit, quo eius similique dolore nemo facilis voluptas voluptatibus quos recusandae adipisci corporis ratione maiores saepe atque optio."
    );

    let shada = new Coder(
        "./images/cat.jpg",
        "Shada Bazger",
        "email",
        "favoritmat",
        "favoritdjur",
        "några meningar om dig själv"
    );

    let maria = new Coder(
        "./images/cat.jpg",
        "Maria Hendricks",
        "email",
        "favoritmat",
        "favoritdjur",
        "några meningar om dig själv"
    );

    let erika = new Coder(
        "./images/cat.jpg",
        "Erika Lundström",
        "email",
        "favoritmat",
        "favoritdjur",
        "några meningar om dig själv"
    );

    let alex = new Coder(
        "./images/otter.png",
        "Alexandra Blomberg",
        "blombergalexandras@gmail.com",
        "Sushi. If that's not available; anything homemade with love",
        "Otter",
        "Alex resonates with the otter. Although intelligent and witty, otters have a tendency to suffer from self-doubt, and fear of failure can prevent them from living up to their true potential. Still, they are a great problem solvers, with the ability to spend endless hours on abstract or practical challenges. As workers, they are dedicated and capable and always eager for a chance to prove themselves. Some might say otters are lazy, but a more fitting description is easily distracted. Life has so many diversions for the otter that it's impossible to predict how it will fill its day. But when an otter gets focused on a problem, its keen intelligence rises to the challenge and it won’t give up until the last nut is cracked."
    );

    const coderArray = [darius, alex, shada, maria, erika];

    $(document).ready(function() {

        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
    
        $(coderArray).each((index, coder) => {
            if (name === coder.name) {
                coder.createAbout();
            } 
        })        
    });

    $(".main-content").append(
        `
        <div class="about-welcome">
            <img class="welcome-image" src="./images/kittens.jpg"
            <p><span>this.webpage</span> was built by Alex, Shada, Erika, Maria, and Darius. Building this webpage filled our souls with joy. Building webpages is more fun than rollercoasters. Here is a coder joke for you:
            <div class="joke">
                <p>Knock Knock!</p>
                <p>Who's there?</p> 
                <p>404</p> 
                <p>HEY! Who's there!?</p> 
            </div>
        </div>
        `
    )

    $(coderArray).each((index, coder) => {
        $(".about-side-bar").append(
            `
            <p class="sidebar-coder">${coder.name}</p>
            `
        )
    })  

});

// links for nav-bars
/* <li><a href="about.html?name=Alex Blomberg">Alex</a></li>
<li><a href="about.html?name=Erika Lundström">Erika</a></li>
<li><a href="about.html?name=Shada Bazger">Shada</a></li>
<li><a href="about.html?name=Maria Hendricks">Maria</a></li>
<li><a href="about.html?name=Darius Kaya">Darius</a></li> */