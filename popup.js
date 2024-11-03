document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const alert = document.getElementById('alert');
  const menuButton = document.getElementById('menuButton');
  const menu = document.getElementById('menu');
  const content = document.getElementById('content');
  const header = document.getElementById('header');

  chrome.storage.local.get(['isPhishing', 'darkMode'], (result) => {
    if (result.isPhishing) {
      alert.textContent = '⚠️ This site is flagged as a phishing site!';
      alert.classList.add('phishing');
      alert.classList.remove('safe');
      alert.classList.remove('hidden');
    } else {
      alert.textContent = '✅ This site is safe.';
      alert.classList.add('safe');
      alert.classList.remove('phishing');
      alert.classList.remove('hidden');
    }

    if (result.darkMode) {
      content.classList.add('dark');
      content.classList.remove('light');
      themeToggle.checked = true;
    } else {
      content.classList.add('light');
      content.classList.remove('dark');
      themeToggle.checked = false;
    }
  });

  themeToggle.addEventListener('change', () => {
    const isDarkMode = themeToggle.checked;
    chrome.storage.local.set({ darkMode: isDarkMode });
    content.classList.toggle('dark', isDarkMode);
    content.classList.toggle('light', !isDarkMode);
  });

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});
