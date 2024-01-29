$(() => {
    let studentArray = [];
    function Student(name, title, contact, tagline, description, skills, location) {
        this.name = name,
        this.title = title,
        this.contact = contact,
        this.tagline = tagline, 
        this.description = description,
        this.location = location,
        this.skills = skills,
        this.createProfileSmall = function (index) {
            $(".main-content").append(`
                    <div class="${this.name} profile-small" data-index="${index}">
                        <img class="profile-img" src="images/${this.name}.png" height=100px width=100px alt="image of ${this.name}"></img>
                        <h3 class="name">${this.name}</h3>
                        <h4>${this.title}</h4>
                        <p>${this.tagline}</p>
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
                        <a href="mailto:${this.contact}">${this.contact}</a>
                        <p>${this.description}</p>
                        <p class="student-skills">Skills: ${this.skills}</p>
                        <p class="student-location">&#128205; ${this.location}</p>
                    </div>
                `
            )
        }
    }

    studentArray.push(new Student("mollie", "Frontend dev", "mollie@dev.com", "Eager to learn in a new team!", "Mollie is an enthusiastic and dedicated junior frontend developer actively seeking an apprenticeship to kickstart her career. Proficient in HTML, CSS, JavaScript, and React, she brings a solid foundation to any development project. Eager to contribute her skills and collaborate within a dynamic team environment, Mollie is driven by a passion for creating engaging and user-friendly web experiences. Her adaptability, coupled with a genuine eagerness to learn, makes her an ideal candidate for a thriving and innovative team.", ["javascript", "HTML", "React", "Node"],["stockholm"]));
    studentArray.push(new Student("hamilton", "Backend Developer", "hi@hamilton.com", "Passionate about crafting efficient solutions!", "Hamilton is an aspiring backend developer with a passion for crafting efficient and scalable solutions. Seeking opportunities to enhance his skills in server-side development, he excels in languages like Python and Java. Hamilton thrives in collaborative environments and is eager to contribute to innovative projects.", ["python", "SQL", "Node.js"], ["gothenburg"]));
    studentArray.push(new Student("felix", "Full Stack Developer", "felix@fsd.com", "Driven by creativity and problem-solving!", "Felix is a creative and detail-oriented full-stack developer adept at navigating the entire web development stack. Proficient in languages such as JavaScript, Python, and React, he brings a unique blend of technical expertise and artistic flair to his projects. Eager to take on challenges and deliver exceptional results.", ["Python", "React", "Django"], ["vancouver"]));
    studentArray.push(new Student("lynn", "UX/UI Designer", "lynn@ui.com", "Passionate about creating intuitive user experiences!", "Lynn is a dedicated UX/UI designer with a keen eye for detail and a passion for creating intuitive and visually appealing user experiences. With expertise in tools like Sketch and Figma, she combines creativity with a user-centric approach. Lynn is excited to contribute her design skills to collaborative and innovative projects.", ["Figma", "Adobe XD", "UX Design"], ["rome"]));
    studentArray.push(new Student( "rebecca", "Data Scientist", "reb@data.se", "Analytical thinker with a knack for data insights!", "Rebecca is an analytical and detail-oriented data scientist with a knack for deriving meaningful insights from complex datasets. Proficient in Python, R, and machine learning algorithms, she is eager to apply her skills in a collaborative and data-driven environment. Rebecca is passionate about leveraging data for informed decision-making.", ["R", "Machine Learning", "Data Analysis"], ["boden"]));    
    studentArray.push(new Student( "alma", "Mobile App Developer", "alma@live.com", "Innovative thinker with a focus on mobile technologies!", "Alma is an innovative mobile app developer with a focus on creating seamless and user-friendly experiences for mobile platforms. Proficient in Swift, Kotlin, and React Native, she excels in crafting dynamic and responsive applications. Alma is eager to contribute to the ever-evolving world of mobile technologies.", ["Swift", "React Native", "Mobile Development"], ["chicago"]));
    studentArray.push(new Student( "sofia", "Data Analyst", "sofiabring@analysis.com", "Detail-oriented analyst with a passion for data-driven insights!", "Sofia is a detail-oriented data analyst with a passion for extracting valuable insights from data. Proficient in SQL, Python, and data visualization tools, she combines analytical skills with a curiosity for uncovering patterns. Sofia is excited to contribute her expertise to projects that leverage the power of data.", ["SQL", "Python", "Data Analysis"], ["berlin"]));
    studentArray.push(new Student("christina", "Frontend Developer", "chra@solutions.com", "Creative problem-solver with a focus on user interfaces!", "Christina is a creative and detail-oriented frontend developer with a focus on crafting engaging user interfaces. Proficient in HTML, CSS, JavaScript, and Vue.js, she combines technical expertise with a passion for creating visually appealing and intuitive web experiences. Christina is excited to contribute her skills to collaborative development projects.", ["HTML", "CSS", "Vue.js"], ["oslo"]));
    studentArray.push(new Student("daniel", "Cybersecurity Analyst", "daniel@sec.com", "Security enthusiast with a commitment to safeguarding digital assets!", "Daniel is a dedicated cybersecurity analyst with a commitment to safeguarding digital assets and ensuring secure online environments. Proficient in ethical hacking, network security, and incident response, he brings a comprehensive approach to cybersecurity challenges. Daniel is eager to contribute his skills to protect and defend against evolving cyber threats.", ["Ethical Hacking", "Network Security"], ["amsterdam"])); 

    $(studentArray).each((index, student) => student.createProfileSmall(index));

    $("#button-search").on("click", () => {
        const searchTerm = $("#search-input").val().toLowerCase();
        $(".no").empty()
        $(".main-content").empty()
        
        $(studentArray).each((index, student) => {
            let findSkill = student.skills.find((skill) => {
                return skill.toLowerCase() === searchTerm;
            })
            let findLocation = student.location.find((locations) => {
                return locations.toLowerCase() === searchTerm;
            })
            if(findSkill || findLocation) {
                student.createProfileSmall(index)
            }
        })
        if ($(".main-content").is(":empty")) {
               $(".no").text(` there are no student matching your search`)
               $(studentArray).each((index, student) => student.createProfileSmall(index));
        }


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
   

});
