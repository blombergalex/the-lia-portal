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
            menuContent = `<li class="logo"><a href="index.html"><img class="nav-logo" src="./images/lia-logo2.png"></a></li>` + menuContent + `<li class="menubutton" onclick=showSidebar()><a><img src="./images/burgermenu.svg"></a></li>`;
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

    let email = " kontakt:info@edu.cmeducations.se";
 
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
        $(".main-content, .container, .text-container, #button-search, .student-search, .search-input, .button-search, .filter-options, button .cancel-btn").toggleClass("darkmode-grey");
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
    // $(".main-content, .container, .text-container, .sidebar, .submenu, #button-search, .student-search, .search-input, .button-search, .filter-options, button .cancel-btn").removeClass("darkmode-grey");
    // $("nav, .navbar, footer, .logo a, .main-search, .profile-small, .profile-large, .nav-logo, .clear-filter, .company-card, .popup, .about-side-bar").removeClass("darkmode-black");
    // $(".hero-img").removeClass("darkmode-gradient");
    $(".darkmode-grey").removeClass("darkmode-black");
    $(".darkmode-black").removeClass("darkmode-black");
    $(".darkmode-gradient").removeClass("darkmode-black");

} else if (localStorage.getItem('darkmode') === 'true') {
    // toggleDarkmode();

    
   
    $(".main-content, .container, .text-container, #button-search, .student-search, .search-input, .button-search, .filter-options, button .cancel-btn").addClass("darkmode-grey");
    $("nav, footer, .main-search, .profile-small, .profile-large, .clear-filter, .company-card, .popup, .about-side-bar").addClass("darkmode-black");
    $(".hero-img").addClass("darkmode-gradient")
}        

    
//  let darkmode;

//     if ($(".main-content").hasClass("darkmode-grey")) {
//         darkmode = true;
//         return darkmode;
//     } else {
//         darkmode = false;
//         return darkmode;
//     }
   
    // console.log(darkmode);

    // const params = new URLSearchParams(window.location.search);
    // const darkmodeOnOff = params.get('darkmode');

    // if (darkmodeOnOff === 'true') {
    //     darkmode = true; // If 'true' is passed in the URL, set darkmode to true
    //     toggleDarkmode(); // Call the function to toggle dark mode
    //     return darkmode;
    // }

    


    // const params = new URLSearchParams(window.location.search);
    // const darkmodeOnOff = params.get('darkmode');

    // console.log(darkmodeOnOff);

    // if (darkmodeOnOff) {
    //     $(".main-content, .container, .text-container, .sidebar, .submenu, #button-search, .student-search, .search-input, .button-search, .filter-options, button .cancel-btn").addClass("darkmode-grey");
    //     $("nav, .navbar, footer, .logo a, .main-search, .profile-small, .profile-large, .nav-logo, .clear-filter, .company-card, .popup, .about-side-bar").addClass("darkmode-black");
    //     $(".hero-img").addClass("darkmode-gradient");
    // }

    // let darkmodeOnOff = darkmode;

    // const params = new URLSearchParams(window.location.search);
    // darkmodeOnOff = params.get('darkmode');

    // console.log(darkmodeOnOff); // Check if darkmodeOnOff is correctly retrieved

    

    // if (darkmodeOnOff === undefined) {
    //     darkmode = false;
    // } else if (darkmodeOnOff === true) {
    //     darkmode = true;
    // } else {
    //     darkmode = false;
    // }

    // if (darkmodeOnOff === 'true') {
    //     toggleDarkmode(); // Call the function to toggle dark mode
    // }

});

