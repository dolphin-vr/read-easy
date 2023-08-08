const initTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('theme');
  }
};

const switchTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.removeAttribute('theme');
    localStorage.removeItem('theme');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
};

const isThemeDark = () => {
  return localStorage.getItem('theme') === 'dark' ? true : false;
};

export { initTheme, switchTheme, isThemeDark };
