$(() => {
    $(document).ready(function () {
        function createNavbar() {
            $(".nav-menu").append(`
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./students.html">Students</a></li>
                    <li><a href="./companies.html">Companies</a></li>
                </ul>`);
        }
    
        createNavbar();
    });
});