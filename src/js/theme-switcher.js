// The following settings must be set for the functionality to work:
// for light theme
// :root {
//   --bg-color: #f1f2f6;
//   --text-color: : #57606f;
// }
// for a dark theme
// :root[theme='dark'] {
//   --bg-color: #57606f;
//   --text-color: : #f1f2f6;
// }

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

module.exports = { initTheme, switchTheme, isThemeDark };
