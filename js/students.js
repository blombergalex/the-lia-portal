$(() => {
    let students = [];
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

    students.push(new Student("Mollie", "Frontend dev", "Eager to learn in a new team", ["javaScript", "HTML", "React", "Node"]))

    $(students).each((index, student) => student.createStudent());
    
    let search_javaScript = students.find(student => student.skills.includes("javascript"))
    console.log(search_javaScript);
});