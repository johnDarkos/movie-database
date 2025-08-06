

export const headerElement = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const logo = document.createElement('p')
    
    logo.classList.add("logo_text");
    logo.textContent = 'Best Movies';

    ul.append(logo);

    ['Главная', 'Фильмы', 'Сериалы', 'Жанры'].forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      li.addEventListener('click', () => {
        switch(text){
            case 'Главная': 
             window.location.hash = `#/home`;  
             break;            /*  сделать функция для роутинга */
            case 'Фильмы': 
             window.location.hash = `#/movie/123`;
             break;
            case 'Сериалы': 
             window.location.hash = `#/serial`;
             break;
            case 'Жанры': 
             window.location.hash = `#/home`;
            break;
        }
      });
      ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    header.appendChild(nav);
  
    return header;
  };
  