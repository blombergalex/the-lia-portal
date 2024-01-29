$(() => {

    let filterLocationArray = [];
    let filterSkillsArray = [];
    let locationsArray = [];
    let skillsArray = [];

    function Company(image, name, location, number, email, website, aboutUsShort, aboutUs, weCanOffer, requiredSkills) {
        this.image = image,
        this.name = name,
        this.location = location,
        this.number = number,
        this.email = email,
        this.website = website,
        this.aboutUsShort = aboutUsShort,
        this.aboutUs = aboutUs,
        this.weCanOffer = weCanOffer,
        this.requiredSkills = requiredSkills,
        this.createCompany = function () {
            $(".info-content").append(`
                <div class="company-card">
                    <img class="card-image" src="${this.image}" height=100px width=100px alt="image of ${this.name}">
                    <h3 class="card-h3">${this.name}</h3>
                    <p class="card-h4">${this.aboutUsShort}</p>
                </div>
                `
            )
        }
    }

    let google = new Company(
        "./images/google.png",
        "Google",
        "Silicon Valley",
        "+1 (0)666 420",
        "google@hotmail.com",
        "www.google.com",
        "Google, a tech powerhouse, offers interns dynamic projects, global impact, innovation, mentorship, and unparalleled opportunities.",
        "Google, a tech titan, revolutionizes the digital landscape with innovative products and services. Renowned for its search engine, Google offers a diverse ecosystem, including Android, Gmail, and YouTube. Beyond technology, the company ventures into AI, cloud computing, and self-driving cars, continually pushing boundaries. Google's mission is to organize the world's information and make it universally accessible and useful, impacting billions worldwide.",
        "Google offers interns unparalleled opportunities for growth, innovation, and impact. Engage in cutting-edge projects, collaborate with diverse teams, and benefit from mentorship. Join a global community that fosters creativity, pushing boundaries, and shaping the future of technology.",
        "JavaScript, CSS, HTML, REACT"
    );

    let microsoft = new Company(
        "./images/microsoft.png",
        "Microsoft",
        "Silicon Valley",
        "+1 (0)555 123",
        "microsoft@gmail.com",
        "www.microsoft.com",
        "Microsoft, a global tech giant, empowers interns with transformative projects, mentorship, and unparalleled opportunities for innovation.",
        "Microsoft, a tech leader, pioneers software, hardware, and services globally. Known for Windows, Office, and Azure, Microsoft's vision extends to AI, gaming, and cloud computing, redefining tech boundaries. Their mission is to empower every person and organization on the planet to achieve more.",
        "Microsoft provides interns unique chances for growth, innovation, and impactful contributions. Engage in cutting-edge projects, collaborate with diverse teams, and benefit from mentorship. Join a worldwide community committed to creativity, pushing tech boundaries, and shaping the future.",
        "JavaScript, C#, HTML, CSS"
    );

    let hm = new Company(
        "./images/hm.png",
        "H&M",
        "Stockholm",
        "+46 8 796 55 00",
        "info@hm.com",
        "www.hm.com",
        "H&M, a global fashion retailer, offers interns creative projects, mentorship, and exciting opportunities for innovation in the fashion industry.",
        "H&M, a trendsetter in the fashion world, operates globally with a commitment to sustainability. Known for affordable and stylish clothing, H&M embraces diversity and sustainability, influencing the fashion landscape. Their mission is to offer fashion and quality at the best price, in a sustainable way.",
        "H&M provides interns unique opportunities to contribute to creative projects, collaborate with diverse teams, and receive mentorship in the dynamic fashion industry.",
        "Java, JavaScript, Typescript, Python"
    );

    let spotify = new Company(
        "./images/spotify.png",
        "Spotify",
        "Stockholm",
        "+46 8 788 51 00",
        "contact@spotify.com",
        "www.spotify.com",
        "Spotify, a global music streaming platform, invites interns to contribute to innovative projects, mentorship, and transformative opportunities in the music industry.",
        "Spotify, a leader in the music streaming industry, connects millions through personalized music experiences. Known for playlists, podcasts, and discovery features, Spotify pioneers music technology, shaping the future of entertainment. Their mission is to unlock the potential of human creativity—by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy it.",
        "Interns at Spotify can engage in groundbreaking projects, collaborate with diverse teams, and receive mentorship in the dynamic music and tech industry.",
        "JavaScript, Python"
    );
    
    let bcg = new Company(
        "./images/bcg.png",
        "Boston Consulting Group",
        "Boston",
        "+1 (0)617 973 1200",
        "info@bcg.com",
        "www.bcg.com",
        "Boston Consulting Group (BCG), a global management consulting firm, offers interns impactful projects, mentorship, and transformative opportunities in strategy and business consulting.",
        "BCG, a leader in management consulting, partners with clients to tackle their most critical challenges. Known for strategy, innovation, and data-driven insights, BCG empowers organizations to thrive in a rapidly changing world. Their mission is to unlock the potential of those who advance the world.",
        "Interns at BCG can contribute to impactful projects, collaborate with diverse teams, and receive mentorship in the dynamic field of strategy consulting.",
        "JavaScript, C#, Typescript"
    );

    let epidemicSound = new Company(
        "./images/epidemicsound.png",
        "Epidemic Sound",
        "Stockholm",
        "+46 8 514 21 200",
        "info@epidemicsound.com",
        "www.epidemicsound.com",
        "Epidemic Sound, a global music company, invites interns to contribute to cutting-edge projects, mentorship, and transformative opportunities in the music and audio industry.",
        "Epidemic Sound pioneers music licensing for content creators worldwide, providing a vast library of high-quality tracks. Known for its innovation in the audio space, Epidemic Sound redefines the music industry. Their mission is to soundtrack the world by making music accessible to everyone.",
        "Interns at Epidemic Sound can engage in cutting-edge projects, collaborate with diverse teams, and receive mentorship in the dynamic music and audio industry.",
        "JavaScript, Python"
    );

    let dhl = new Company(
        "./images/dhl.png",
        "DHL",
        "Berlin",
        "+49 228 182 0",
        "contact@dhl.com",
        "www.dhl.com",
        "DHL, a global logistics company, offers interns dynamic projects, mentorship, and transformative opportunities in the logistics and supply chain industry.",
        "DHL, a leader in logistics and express delivery services, connects businesses worldwide. Known for its extensive network, DHL facilitates global trade, e-commerce, and supply chain solutions, shaping the future of logistics. Their mission is to be the logistics company for the world.",
        "Interns at DHL can contribute to dynamic projects, collaborate with diverse teams, and receive mentorship in the fast-paced logistics and supply chain industry.",
        "JavaScript, CSS, HTML, REACT"
    );

    let tradera = new Company(
        "./images/tradera.png",
        "Tradera",
        "Stockholm",
        "+46 8 120 20 200",
        "info@tradera.com",
        "www.tradera.com",
        "Tradera, a leading online marketplace, invites interns to contribute to innovative projects, mentorship, and transformative opportunities in e-commerce and digital marketplaces.",
        "Tradera revolutionizes online buying and selling, connecting buyers and sellers in a dynamic marketplace. Known for its user-friendly platform, Tradera empowers individuals and businesses in the digital economy. Their mission is to create a sustainable future for online commerce.",
        "Interns at Tradera can engage in innovative projects, collaborate with diverse teams, and receive mentorship in the dynamic field of e-commerce and digital marketplaces.",
        "JavaScript, Python"
    );

    let nokia = new Company(
        "./images/nokia.png",
        "Nokia",
        "Helsinki",
        "+358 (0)10 44 88 000",
        "info@nokia.com",
        "www.nokia.com",
        "Nokia, a global technology company, offers interns dynamic projects, mentorship, and transformative opportunities in telecommunications and digital innovation.",
        "Nokia, a pioneer in telecommunications, connects people and devices globally. Known for its networks, Nokia drives technological advancements in 5G, IoT, and digital health, shaping the future of connectivity. Their mission is to create the technology to connect the world.",
        "Interns at Nokia can contribute to dynamic projects, collaborate with diverse teams, and receive mentorship in the evolving field of telecommunications and digital innovation.",
        "JavaScript, CSS, HTML"
    );

    let companyArray = [google, microsoft, hm, spotify, bcg, epidemicSound, dhl, tradera, nokia]

    $(companyArray).each((index, company) => company.createCompany());

    $(".company-card").on("click", e => {
        let company = $(e.target).closest(".company-card").find("h3").text();
        popup(company);
        let popupHeight = $(".popup").height() + 650;
        $("html, body").animate({ minHeight: popupHeight }, 'fast');
        $(".filter-options").slideUp();
        $(".popup").fadeToggle();
        $(".overlay").fadeToggle();
        $("html, body").animate({ scrollTop: 330 }, "slow");
    })

    $(".info-content").on("click", ".cancel-btn", () => {
        $(".popup").fadeToggle();
        $(".overlay").fadeToggle();
        $("html, body").animate({ 'min-height': "100%" }, 'fast');
    })

    const popup = company => {
        $(companyArray).each((index, y) => {
            if (y.name === company) {
                $(".popup").empty().append(
                    `
                    <button class="cancel-btn">&#10006;</button>
                    <img class="popup-image" src="${y.image}">
                    <h2>${y.name}</h2>
                    <p><span>Office:</span> ${y.location}</p>
                    <p>${y.number}</p>
                    <p>${y.email}</p>
                    <a href="${y.website}">${y.website}</a>
                    <p><span>About Us:</span> ${y.aboutUs}</p>
                    <p><span>What to expect:</span> ${y.weCanOffer}</p>
                    <p><span>Required skills:</span> ${y.requiredSkills}</p>
                    `
                )
            }
        })
    }

    $(companyArray).each((index, company) => {
        if (!locationsArray.includes(company.location)) {
            locationsArray.push(company.location);
        }
    });

    $(companyArray).each((index, company) => {
        let skills = company.requiredSkills.split(", "); 
        $(skills).each((index, skill) => {
            if (!skillsArray.includes(skill)) {
                skillsArray.push(skill);
            }
        });
    });

    $(locationsArray).each((index, location) => {
        $(".filter-location").append(
            `
            <div>
                <label for="${location}">${location}</label>
                <input type="checkbox" id="${location}" name="${location}" value="${location}">
            </div>
            `
        )
    })

    $(skillsArray).each((index, skill) => {
        $(".filter-skills").append(
            `
            <div>
                <label for="${skill}">${skill}</label>
                <input type="checkbox" id="${skill}" name="${skill}" value="${skill}">
            </div>
            `
        )
    })

    $(".filter-btn").on("click", () => {
        $(".filter-options").slideToggle();
    })

    const filter = () => {
        filterLocationArray = [];
        filterSkillsArray = [];
    
        $(".filter-location input").each((index, inputElement) => {
            if ($(inputElement).prop("checked")) {
                filterLocationArray.push($(inputElement).val())
            }
        });
    
        $(".filter-skills input").each((index, inputElement) => {
            if ($(inputElement).prop("checked")) {
                filterSkillsArray.push($(inputElement).val());
            }
        });
    
        let matchFound = false; 
        $(".company-card").fadeOut(1);
        
        $(companyArray).each((index, company) => {

            let skills = company.requiredSkills.split(", ");
            if (
                (filterLocationArray.length === 0 || filterLocationArray.includes(company.location)) &&
                (filterSkillsArray.length === 0 || filterSkillsArray.some(skill => skills.includes(skill)))
            ) {
                $(".company-card").each((index, card) => {
                    if ($(card).find("h3").text() === company.name) {
                        $(card).fadeIn(1);
                        matchFound = true;
                    }
                });
            } 
        });

        if (!matchFound) {
            $(".info-content").append(
            `<div class="no-match-message">
            <img class="card-image" src="./images/shrug.png" height=100px width=100px alt="image of shoulder shrugging emoji">
                <p>Oops! There is no match for your criterias.</p>
            </div>`
            );
        }
    };

    $(".search-btn").on("click", () => {
        filter();
    });  

});