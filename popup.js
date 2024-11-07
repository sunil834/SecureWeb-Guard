document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const menuButton = document.getElementById('menuButton');
  const menu = document.getElementById('menu');
  const content = document.getElementById('content');
  const activeToggle = document.getElementById('activeToggle');
  const alert = document.getElementById('alert');

  // Load initial states from storage
  chrome.storage.local.get(['isActive', 'darkMode', 'isPhishing'], (result) => {
      // Set Active toggle
      activeToggle.checked = result.isActive !== false; // Default to true

      // Set Dark Mode toggle
      const isDarkMode = result.darkMode;
      if (isDarkMode) {
          content.classList.add('dark');
          content.classList.remove('light');
          themeToggle.checked = true;
      } else {
          content.classList.add('light');
          content.classList.remove('dark');
          themeToggle.checked = false;
      }
      updateTheme(isDarkMode); // Apply the theme to all elements on load

      // Set Phishing Alert status
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
  });

  // Handle theme toggle change
  themeToggle.addEventListener('change', () => {
      const isDarkMode = themeToggle.checked;
      chrome.storage.local.set({ darkMode: isDarkMode });
      content.classList.toggle('dark', isDarkMode);
      content.classList.toggle('light', !isDarkMode);
      updateTheme(isDarkMode);
  });

  // Handle menu button click
  menuButton.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          menu.style.height = 'auto';
          menu.style.opacity = 1;
      } else {
          menu.classList.add('hidden');
          menu.style.height = '0';
          menu.style.opacity = 0;
      }
  });

  // Handle active toggle change
  activeToggle.addEventListener('change', () => {
      const isActive = activeToggle.checked;
      chrome.storage.local.set({ isActive });
  });

  function updateTheme(isDarkMode) {
      const themeClass = isDarkMode ? 'dark' : 'light';
      menu.classList.add(themeClass);
      activeToggle.parentElement.classList.add(themeClass);

      const oppositeThemeClass = isDarkMode ? 'light' : 'dark';
      menu.classList.remove(oppositeThemeClass);
      activeToggle.parentElement.classList.remove(oppositeThemeClass);
  }
});
