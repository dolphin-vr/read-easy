
const buttons = document.querySelectorAll('.page-nav button');

  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      
      buttons.forEach(btn => btn.classList.remove('active-button'));
      
      
      button.classList.add('active-button');
    });
  });