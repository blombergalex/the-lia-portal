$(() => {

    let isSubmenuOpen = false;

    const createMenu = (className) => {
        let menuContent = `
        <li ${className === '.navbar' ? ' class="navbar viewOnDesktop"' : ''}><a href="index.html">Home</a></li>
        <li ${className === '.navbar' ? ' class="navbar viewOnDesktop"' : ''}><a href="students.html">Students</a></li>
        <li ${className === '.navbar' ? ' class="navbar viewOnDesktop"' : ''}><a href="companies.html">Companies</a></li>
        <li ${className === '.navbar' ? ' class="navbar viewOnDesktop"' : ''}><a class="submenu-toggle">About ▼</a>
        <ul class="submenu">
            <li><a href="about.html">LIA Portalen</a></li>
            <li><a href="about.html?name=Darius Kaya">Darius</a></li>
            <li><a href="about.html?name=Alex Blomberg">Alexandra</a></li>
            <li><a href="about.html?name=Erika Lundström">Erika</a></li>
            <li><a href="about.html?name=Shada Bazger">Shada</a></li>
            <li><a href="about.html?name=Maria Hendricks">Maria</a></li>
        </ul>
    </li>`;

        if (className === ".sidebar") {
            menuContent = `<li class="closebutton" onclick=hideSidebar()><a><img src="./images/closecross.svg"></a></li>` + menuContent;
        } else if (className === ".navbar") {
            menuContent = `<li><img class="logo" src="./images/lia-logo2.png"></li>` + menuContent + `<li class="menubutton" onclick=showSidebar()><a><img src="./images/burgermenu.svg"></a></li>`;
        }

        $(className).append(menuContent);
    }

    $(document).ready(function () {
        createMenu(".sidebar");
        createMenu(".navbar");

        const currentPage = window.location.pathname.split("/").pop();
        const currentQuery = window.location.search;
        const currentHash = window.location.hash;
        const currentHref = currentPage + currentQuery + currentHash;
        console.log(currentHref);
        $(".navbar a[href='" + currentPage + "'], .sidebar a[href='" + currentPage + "']").parent().addClass("active");

        $(".submenu-toggle").on("click", function() {
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

});