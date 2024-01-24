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
                    <a href="">${this.email}</a>
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
        "./images/cat.jpg",
        "Alexandra Blomberg",
        "email",
        "favoritmat",
        "favoritdjur",
        "några meningar om dig själv"
    );

    const coderArray = [darius, ];

    $(document).ready(function() {

        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
    
        $(coderArray).each((index, coder) => {
            if (name === coder.name) {
                coder.createAbout();
            } 
        })        
    });

});