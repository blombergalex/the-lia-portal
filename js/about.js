$(() => {

    function Coder(image, name, email, food, pet, about) {
        this.image = image,
        this.name = name,
        this.email = email,
        this.food = food,
        this.pet = pet,
        this.about = about,
        this.createAbout = function () {
            $(".about-container").append(`
                <div class="about-me">
                    <div class="center-content">
                        <img class="coder-image" src="${this.image}" height=100px width=100px alt="image of ${this.name}">
                        <h2>${this.name}</h2>
                        <a href="mailto: ${this.email}">${this.email}</a>
                        <p><span>Favourite Food: </span>${this.food}</p>
                        <p><span>Favourite Animal: </span>${this.pet}</p>
                    </div>
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti incidunt voluptas magni voluptatem eum, accusantium suscipit fuga sequi laborum minima voluptates maiores sit at sed dolorem temporibus necessitatibus unde deleniti corporis. Nam voluptatibus consequuntur quasi magni error nostrum illo incidunt. Itaque ipsa ab blanditiis. Eius itaque similique mollitia dolorem voluptate dolore animi inventore consequuntur? Tempore laboriosam dolorem porro quis dolore beatae deserunt saepe nobis? Nemo deserunt nisi adipisci quia quae obcaecati numquam quas qui, assumenda fuga temporibus."
    );

    let shada = new Coder(
        "./images/harry.jpg",
        "Shada Bazger",
        "shada.bazger@gmail.com",
        "Falafel with Anba souce",
        "Katten Harry",
        "I like to travel and visit historical and religious places. One day I will travel around the whole world :)"
    );

    let maria = new Coder(
        "./images/workaholic.jpg",
        "Maria Hendricks",
        "maria.hendricks26@gmail.com",
        "Tiraminsu and Chicken Tikka Masala!",
        "Tiny rabbits, although I'm allgergic to them",
        "Unfortunately I'm a workaholic, as long as I know what I'm doing and its FUN nothing can really stop me... Well if I start looking like my pic, please SAVE ME thank you ;))"
    );

    let erika = new Coder(
        "./images/cat.jpg",
        "Erika Lundström",
        "erimarilin@outlook.com",
        "Home cooked food!",
        "Do we have to pick one? I like most animals except silver fiskar and tipuloidea!",
        "This will be hard, im often opposite to my self, Im forgetful, even tho i hate forget things, but i can have excellent memories about something I heard or did 10 years ago. I love to do spontaneous things, but i dont like when things never be as expected. I think my strong side is I love to learn new things, dig up information, to discuss why/how things are as they are, and figure out how to solve things and brainstorm in my head and with others, after solutions, Im never out of ideas!"
    );

    let alexandra = new Coder(
        "./images/otter.png",
        "Alexandra Blomberg",
        "blombergalexandras@gmail.com",
        "Sushi. If that's not available; anything homemade with love",
        "Otter",
        "Alex resonates with the otter. Although intelligent and witty, otters have a tendency to suffer from self-doubt, and fear of failure can prevent them from living up to their true potential. Still, they are a great problem solvers, with the ability to spend endless hours on abstract or practical challenges. As workers, they are dedicated and capable and always eager for a chance to prove themselves. Some might say otters are lazy, but a more fitting description is easily distracted. Life has so many diversions for the otter that it's impossible to predict how it will fill its day. But when an otter gets focused on a problem, its keen intelligence rises to the challenge and it won’t give up until the last nut is cracked."
    );

    const coderArray = [darius, alexandra, shada, maria, erika];
    $(coderArray).each((index, coder) => coder.createAbout()) 

        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
    
        $(".about-me").each((index, coder) => {
            if ($(coder).find("h2").text() === name) {
                $(coder).toggle();
                $(".about-welcome").toggle();
            } 
        })

    $(coderArray).each((index, coder) => {
        $(".about-side-bar").append(
            `
            <p class="sidebar-coder">${coder.name}</p>
            `
        )
    })  

    $(".sidebar-coder").on("click", e => {
        $(".about-me").fadeOut(1);
        $(".about-welcome").fadeOut(1);
    
        $(".about-me").each((index, coderInfo) => {
            let h2Text = $(coderInfo).find("h2").text();
    
            if ($(e.target).text() === h2Text) {
                $(coderInfo).toggle();
            }
        });
    
        const anyAboutMeVisible = $(".about-me:visible").length > 0;
    
        if (!anyAboutMeVisible) {
            $(".about-welcome").show();
        }
    });
});