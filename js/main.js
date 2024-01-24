$(() => {

    const createMenu = (className) => {
        let menuContent = `
        <li ${className === '.navbar' ? ' class="viewOnDesktop"' : ''}><a href="index.html">Home</a></li>
        <li ${className === '.navbar' ? ' class="viewOnDesktop"' : ''}><a href="about.html">About ▼</a>
            <ul class="submenu">
                <li><a href="about.html?name=Alex Blomberg">Alex</a></li>
                <li><a href="about.html?name=Darius Kaya">Darius</a></li>
                <li><a href="about.html?name=Erika Lundström">Erika</a></li>
                <li><a href="about.html?name=Shada Bazger">Shada</a></li>
                <li><a href="about.html?name=Maria Hendricks">Maria</a></li>
            </ul>
        </li>
        <li ${className === '.navbar' ? ' class="viewOnDesktop"' : ''}><a href="students.html">Students</a></li>
        <li ${className === '.navbar' ? ' class="viewOnDesktop"' : ''}><a href="companies.html">Companies</a></li>`;

        if (className === ".sidebar") {
            menuContent = `<li class="closebutton" onclick=hideSidebar()><a href="#"><img src="./images/closecross.svg"></a></li>` + menuContent;
        } else if (className === ".navbar") {
            menuContent = `<li><a href="#"><img class="logo" src="./images/lia-logo2.png"></a></li>` + menuContent + `<li class="menubutton" onclick=showSidebar()><a href="#"><img src="./images/burgermenu.svg"></a></li>`;
        }

        $(className).append(menuContent);
    }

    $(document).ready(function () {
        createMenu(".sidebar");
        createMenu(".navbar")
    })

    window.showSidebar = function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'  }

    window.hideSidebar = function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'  }
   

});