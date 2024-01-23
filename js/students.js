$(() => {

    function Student(name, title, description, skills) {
        this.name = name,
        this.title = title,
        this.description = description,
        this.skills = skills,
        this.createStudent = function () {
            $(".main-content").append(`
                    <div class="profile-card">
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

    let mollie = new Student("Mollie", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    let hamilton = new Student("Hamilton", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    let felix = new Student("Felix", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
    let lynn = new Student("Lynn", "Frontend dev", "Eager to learn in a new team", "HTML, CSS, React, Node") // TEST OBJECT
   
    let studentArray = [mollie, hamilton, felix, lynn];

    $(studentArray).each((index, student) => student.createStudent());
    
});