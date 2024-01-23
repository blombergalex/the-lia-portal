$(() => {
    let studentArray = [];
    function Student(name, title, description, skills, location) {
        this.name = name,
        this.title = title,
        this.description = description,
        this.location = location,
        this.skills = skills,
        this.createProfileSmall = function (index) {
            $(".main-content").append(`
                    <div class="${this.name} profile-small" data-index="${index}">
                        <img class="profile-img" src="images/${this.name}.png" height=100px width=100px alt="image of ${this.name}"></img>
                        <h3 class="name">${this.name}</h3>
                        <h4>${this.title}</h4>
                        <p>${this.description}</p>
                        <p class="student-skills">${this.skills}</p>
                        <p class="student-location">&#128205; ${this.location}</p>
                    </div>
                `
            )
        }
        this.createProfileLarge = function () {
            $(".main-content").append(`
                    <div class="${this.name} profile-large">
                        <button id="cancel-btn">&#10006;</button> 
                        <img class="profile-img" src="images/${this.name}.png" height=100px width=100px alt="image of ${this.name}"></img>
                        <h3 class="name">${this.name}</h3>
                        <h4>${this.title}</h4>
                        <p>${this.description}</p>
                        <p class="student-skills">${this.skills}</p>
                        <p class="student-location">&#128205; ${this.location}</p>
                    </div>
                `
            )
        }
    }

    studentArray.push(new Student("mollie", "Frontend dev", "Eager to learn in a new team", ["javascript", "HTML", "React", "Node"], "Gothenburg"));
    studentArray.push(new Student("hamilton", "Frontend dev", "Eager to learn in a new team", ["HTML", "CSS", "React", "Node"], "Luleå"));
    studentArray.push(new Student("felix", "Frontend dev", "Eager to learn in a new team", ["HTML", "CSS", "React", "Node"], "Stockholm"));
    studentArray.push(new Student("lynn", "Frontend dev", "Eager to learn in a new team", ["HTML", "CSS", "React", "Node"], "Jönköping"));    
    $(studentArray).each((index, student) => student.createProfileSmall(index));

    let search_javaScript = studentArray.filter(student => student.skills.includes("CSS")); 
    console.log(search_javaScript);

    $(".profile-small").on("click", function() { 
        let index = $(this).data("index");
        $(".profile-small").addClass("blur");
        $(".main-content").addClass("dark-blur");
        studentArray[index].createProfileLarge();
        $("html, body").animate({ scrollTop: 330 }, "slow");
    });

    $(".main-content").on("click", "#cancel-btn", () => {
        $(".profile-large").hide();
        $(".profile-small").removeClass("blur");
        $(".main-content").removeClass("dark-blur");
    })
   

});2
