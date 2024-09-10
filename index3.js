const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

function applyThemeChange(event) {
  if (event.matches) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

matchDarkMode.addListener(applyThemeChange);
applyThemeChange(matchDarkMode);