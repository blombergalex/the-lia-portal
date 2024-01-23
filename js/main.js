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

});