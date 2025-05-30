 function applyTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const useDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', useDark);
  }

  // Helper: Toggle and save theme
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Helper: Toggle dropdown visibility
  function toggleDropdown(dropdown) {
    dropdown.classList.toggle('hidden');
  }

  // Helper: Close dropdown if clicked outside
  function closeDropdownOnClickOutside(trigger, dropdown) {
    window.addEventListener('click', (e) => {
      if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  }

  // On DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    // Apply saved or system theme
    applyTheme();

    // Dark mode toggle
    const darkToggle = document.getElementById('dark-toggle');
    darkToggle?.addEventListener('click', toggleTheme);

    // Dropdown logic
    const userMenuButton = document.getElementById('user-menu-button');
    const userDropdown = document.getElementById('user-dropdown');
    if (userMenuButton && userDropdown) {
      userMenuButton.addEventListener('click', () => toggleDropdown(userDropdown));
      closeDropdownOnClickOutside(userMenuButton, userDropdown);
    }
  });




  document.getElementById('todayDate').textContent = new Date().toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
  });



  document.querySelectorAll('.text-blue-600.cursor-pointer').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('taskDetailModal').classList.remove('hidden');
  });
});











// MYtask page

