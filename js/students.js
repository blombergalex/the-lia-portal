$(() => {

    function Student(name, title, description, skills) {
        this.name = name,
        this.title = title,
        this.description = description,
        this.skills = skills,
        this.createProfileSmall = function () {
            $(".main-content").append(`
                    <div class="profile-small">
                        <img class="profile-img" src="../images/${this.name}.png" height=100px width=100px alt="image of ${this.name}"></img>
                        <h3 class="name">${this.name}</h3>
                        <h4>${this.title}</h4>
                        <p>${this.description}</p>
                        <p class="student-skills">${this.skills}</p>
                    </div>
                `
            )
        }
        this.createProfileLarge = function () {
            $(".main-content").append(`
                    <div class="${this.name} profile-large">
                        <img class="profile-img" src="../images/${this.name}.png" height=100px width=100px alt="image of ${this.name}"></img>
                        <h3>${this.name}</h3>
                        <h4>${this.title}</h4>
                        <p>${this.description}</p>
                        <p class="student-skills">${this.skills}</p>
                    </div>
                `
            )
        }
    }

    let mollie = new Student("mollie", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    let hamilton = new Student("hamilton", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    let felix = new Student("felix", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    let lynn = new Student("lynn", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
   
    let studentArray = [mollie, hamilton, felix, lynn];

    $(studentArray).each((index, student) => student.createProfileSmall());
    $(studentArray).each((index, student) => student.createProfileLarge());

    $(".profile-small").on("click", () => {
        console.log("profile card clicked");
        // $(".profile-large").toggle();
        $(".profile-small").css("filter", "blur(2px)");
    });

  

    
});