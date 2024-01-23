$(() => {

    function Student(name, title, description, skills) {
        this.name = name,
        this.title = title,
        this.description = description,
        this.skills = skills,
        this.createProfileSmall = function (index) {
            $(".main-content").append(`
                    <div class="${this.name} profile-small" data-index="${index}">
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
                        <button id="cancel-btn">&#10006;</button> 
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

    $(studentArray).each((index, student) => student.createProfileSmall(index));
   

    $(".profile-small").on("click", function() { 
        let index = $(this).data("index");
        $(".profile-small").addClass("blur");
        studentArray[index].createProfileLarge();
    });

    $(".main-content").on("click", "#cancel-btn", () => {
        console.log("cancel clicked")
        $(".profile-large").toggle();
        $(".profile-small").removeClass("blur");
    })

});