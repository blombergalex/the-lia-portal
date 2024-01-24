$(() => {    
    const contentContainer = document.getElementById('content');

    const data = {
      sv: [
        { title: 'Välkommen', content: 'Detta är startsidan på svenska.' },
        { title: 'Om oss', content: 'Vi är ett svenskt företag som erbjuder olika tjänster.' }
      ],
      en: [
        { title: 'Welcome', content: 'This is the homepage in English.' },
        { title: 'About Us', content: 'We are a company based in Sweden offering various services.' }
      ]
    };
    
    function changeLanguage(lang) {
      contentContainer.innerHTML = '';
    
      data[lang].forEach(item => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');
    
        title.textContent = item.title;
        content.textContent = item.content;
    
        article.appendChild(title);
        article.appendChild(content);
        contentContainer.appendChild(article);
      });
    }
       
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
            
            </ul>
        `);
    }
    
    createNavbar();
});

