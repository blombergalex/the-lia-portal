$(() => {
    let studentArray = [];
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
                        <h3 class="name">${this.name}</h3>
                        <h4>${this.title}</h4>
                        <p>${this.description}</p>
                        <p class="student-skills">${this.skills}</p>
                    </div>
                `
            )
        }
    }

    // let mollie = new Student("mollie", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    // let hamilton = new Student("hamilton", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    // let felix = new Student("felix", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    // let lynn = new Student("lynn", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
   
    // let studentArray = [mollie, hamilton, felix, lynn];

    //$(studentArray).each((index, student) => student.createProfileSmall());
    studentArray.push(new Student("mollie", "Frontend dev", "Eager to learn in a new team", ["javascript", "HTML", "React", "Node"]));
    studentArray.push(new Student("hamilton", "Frontend dev", "Eager to learn in a new team", ["HTML", "css", "React", "Node"]));
    studentArray.push(new Student("felix", "Frontend dev", "Eager to learn in a new team", ["HTML", "css", "React", "Node"]));
    studentArray.push(new Student("lynn", "Frontend dev", "Eager to learn in a new team", ["HTML", "css", "React", "Node"]));    
    $(studentArray).each((index, student) => student.createProfileSmall());

    let search_javaScript = studentArray.filter(student => student.skills.includes("css")); 
    console.log(search_javaScript);
   
    //console.log(studentArray[0].skills)

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