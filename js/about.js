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
        "darius@kaya.au",
        "Good food",
        "Rhino",
        "I am a coder who likes to code. When not coding I think of code. My favourite medicin is codeine because it sounds like 'coding'. If code was a person we would get married. Knock knock! Who's there? Code."
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