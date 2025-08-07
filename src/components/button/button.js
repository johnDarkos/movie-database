
export const buttonElement = (className = 'btn') => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Search';
    button.classList.add(className);
    
    return button;
};