$(() => {
    $(document).ready(function () {
        function createNavbar() {
            $(".nav-menu").append(`
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about.html">
                    About
                        <ul>
                            <li><a href="about.html?name=Alex Blomberg">Alex</a></li>
                            <li><a href="about.html?name=Erika Lundström">Erika</a></li>
                            <li><a href="about.html?name=Shada Bazger">Shada</a></li>
                            <li><a href="about.html?name=Maria Hendricks">Maria</a></li>
                            <li><a href="about.html?name=Darius Kaya">Darius</a></li>
                        </ul>
                    </a></li>
                    <li><a href="./students.html">Students</a></li>
                    <li><a href="./companies.html">Companies</a></li>
                </ul>`);
        }
    
        createNavbar();
    });

});