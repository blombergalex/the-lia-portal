$(() => {

    let isSubmenuOpen = false;



    

    const createMenu = (className) => {
        let menuContent = `
        <li ${className === '.navbar' ? ' class="navbar-item viewOnDesktop"' : ''}><a href="index.html">Home</a></li>
        <li ${className === '.navbar' ? ' class="navbar-item viewOnDesktop"' : ''}><a href="students.html">Students</a></li>
        <li ${className === '.navbar' ? ' class="navbar-item viewOnDesktop"' : ''}><a href="companies.html">Companies</a></li>
        <li ${className === '.navbar' ? ' class="navbar-item viewOnDesktop"' : ''}><a class="submenu-toggle">About ▼</a>
        <ul class="submenu">
            <li class="submenu-item"><a href="about.html">LIA Portalen</a></li>
            <li class="submenu-item"><a href="about.html?name=Darius Kaya">Darius</a></li>
            <li class="submenu-item"><a href="about.html?name=Alexandra Blomberg">Alexandra</a></li>
            <li class="submenu-item"><a href="about.html?name=Erika Lundström">Erika</a></li>
            <li class="submenu-item"><a href="about.html?name=Shada Bazger">Shada</a></li>
            <li class="submenu-item"><a href="about.html?name=Maria Hendricks">Maria</a></li>
        </ul>
    </li>`;

        if (className === ".sidebar") {
            menuContent = `<li class="closebutton" onclick=hideSidebar()><a><img src="./images/closecross.svg"></a></li>` + menuContent;
        } else if (className === ".navbar") {
            menuContent = `<li class="logo"><a href="index.html"><img class="nav-logo" src="./images/darkmode-logo.png"></a></li>` + menuContent + `<li class="menubutton" onclick=showSidebar()><a><img src="./images/burgermenu.svg"></a></li>`;
        }

        $(className).append(menuContent);
    }

    $(document).ready(function () {
        createMenu(".sidebar");
        createMenu(".navbar");

        const currentPage = window.location.pathname.split("/").pop();
        const currentQuery = decodeURIComponent(window.location.search);
        const currentHash = window.location.hash;
        const currentHref = currentPage + currentQuery + currentHash;
        $(".navbar li:has(a[href='" + currentHref + "']), .sidebar li:has(a[href='" + currentHref + "'])").addClass("active");

        $(".submenu-toggle").on("click", () => {
            isSubmenuOpen = !isSubmenuOpen;
            $(".submenu").toggleClass("open", isSubmenuOpen);
            
            $(".submenu").on("mouseleave", () => {
                isSubmenuOpen = false;
                $(".submenu").removeClass("open");
            });
        });

        $(document).on("click", (event) => {
            if (!$(event.target).closest('.navbar, .sidebar').length) {
                isSubmenuOpen = false;
                $(".submenu").removeClass("open");
            }
        });
    })

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };
    
    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };
    
    window.showSidebar = showSidebar;
    window.hideSidebar = hideSidebar

    let email = "info@edu.cmeducations.se";
 
    $("footer").append(
        `
        <div class="footer-info">
        <a href="mailto:${email}">${email}</a>
        <p>Villkor</p>
        <p>GDPR</p>
        </div>
        <div class="button-container">
            <img class="toggle-darkmode dark-mode-img" src="./images/dark-mode.svg" height="40px">
        </div>
        <div class="footer-social">
            <a class="social-img" href="https://www.instagram.com/" target="_blank"><img src="./images/insta.svg" height= 30px width= 30px></a>
            <a class="social-img" href="https://www.facebook.com/" target="_blank"><img src="./images/facebook.svg" height= 30px width= 30px></a>
            <a class="social-img" href="https://www.snapchat.com/sv-SE" target="_blank"><img src="./images/snap.svg" height= 30px width= 30px></a>
            <a class="social-img" href="https://twitter.com/?lang=sv" target="_blank"><img src="./images/twitter.svg" height= 30px width= 30px></a>
        </div>
        `
        )

    const toggleDarkmode = () => {
        $(".consent-box, .main-content, .container, .text-container, #button-search, .student-search, .search-input, .button-search, .filter-options, button .cancel-btn").toggleClass("darkmode-grey");
        $("nav, footer, .main-search, .profile-small, .profile-large, .clear-filter, .company-card, .popup, .about-side-bar").toggleClass("darkmode-black");
        $(".hero-img").toggleClass("darkmode-gradient");
    }

    $(".toggle-darkmode").on("click", () => {
        
        toggleDarkmode();
        if (window.localStorage.getItem('darkmode') === 'true') {
            window.localStorage.setItem('darkmode', 'false');
        } else {
            window.localStorage.setItem('darkmode', 'true');
        }
         
    });


if (localStorage.getItem('darkmode') === 'false') {
    $(".darkmode-grey").removeClass("darkmode-black");
    $(".darkmode-black").removeClass("darkmode-black");
    $(".darkmode-gradient").removeClass("darkmode-black");

} else if (localStorage.getItem('darkmode') === 'true') {
    $(".consent-box, .main-content, .container, .text-container, #button-search, .student-search, .search-input, .button-search, .filter-options, button .cancel-btn").addClass("darkmode-grey");
    $("nav, footer, .main-search, .profile-small, .profile-large, .clear-filter, .company-card, .popup, .about-side-bar").addClass("darkmode-black");
    $(".hero-img").addClass("darkmode-gradient")
}        

if ($("footer").hasClass("darkmode-black")) {

    $(".main-content").append(
        `
        <div class="consent-box darkmode-grey">
            <p>Hi there!</p>
            <p>This site uses cookies for a better experience.</p>
            <div class="button-wrapper">
                <button class="deny cookie-btn">Deny</button>
                <button class="allow cookie-btn">Allow</button>
            </div>
        </div>
        `    
    )

} else {
    $(".main-content").append(
        `
        <div class="consent-box">
            <p>Hi there!</p>
            <p>This site uses cookies for a better experience.</p>
            <div class="button-wrapper">
                <button class="deny cookie-btn">Deny</button>
                <button class="allow cookie-btn">Allow</button>
            </div>
        </div>
        `

    
    )
}

const disableCookie = () => {
    console.log("Cookies disabled");
    $(".disable-cookie-button").toggle();
    const now = new Date();
    const expirationDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    document.cookie = "cookie1=; expires=" + expirationDate.toUTCString() + "; path=/;";
    if(document.cookie.includes("cookie2")) {
        document.cookie = "cookie2=; expires=" + expirationDate.toUTCString() + "; path=/;";
    };
};

const allowCookie = () => {
    if(document.cookie.includes("TheLiaPortalCookie")) {
        $(".consent-box").toggle();
        $(".button-container").append(
            `<img class="disable-cookie-button" src="./images/cookie.svg" height="40px">
            `
        )
        $(".disable-cookie-button").on("click", disableCookie);
    } else {
        $(".allow").on("click", () => {
            document.cookie = "cookie1=TheLiaPortalCookie; max-age="+ 60 * 60 * 24 * 7 + "; path=/";
            location.reload();
        });
    }
};
    
$(".cookie-btn").on("click", () => {
    $(".consent-box").toggle();
});

allowCookie();

const identifyUser = () => {
    $(".main-content").append(
        `
        <div class="identify-user">
            <div class="text-wrapper">
                <h3>Welcome!</h3>
                <p>What brings you here?</p>
            </div>
            <div class="button-wrapper">
                <button class="student identifier-button">I'm a student</button>
                <button class="company identifier-button">I represent a company</button>
            </div>
        </div>
        `
    )
}

const homePagePopup = () => {
    if (document.cookie.includes("TheLiaPortalCookie")) {
        (window.location.href.indexOf("index.html") > -1) ? identifyUser() : null;
    }
};

homePagePopup();

const createStudentCookie = () => {
    console.log("User is student");
    $(".identify-user").toggle();
    document.cookie = "cookie2=userIsStudent; max-age="+ 60 * 60 * 24 * 30 + "; path=/";
}

const createCompanyCookie = () => {
    console.log("User is company");
    $(".identify-user").toggle();
    document.cookie = "cookie2=userIsCompany; max-age="+ 60 * 60 * 24 * 30 + "; path=/";
}

$(".student.identifier-button").on("click", createStudentCookie);
$(".company.identifier-button").on("click", createCompanyCookie);

const displayRelevantContent = () => {
    if (document.cookie.includes("userIsStudent")) {
        $(".identify-user").toggle();
        console.log("appending content relevant to student") //add this tomorrow
    } else if (document.cookie.includes("userIsCompany")) {
        $(".identify-user").toggle();
        console.log("appending content relevant to company") //add this tomorrow
    }
};

displayRelevantContent();
 
});