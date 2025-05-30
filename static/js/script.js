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








  document.querySelectorAll('.text-blue-600.cursor-pointer').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('taskDetailModal').classList.remove('hidden');
  });
});







// knowledge base

 function openModal(mode) {
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = mode === 'edit' ? 'Edit Document' : 'View Document';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }




// mytask
console.log("✅ script.js loaded");

document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('addTaskButton');
  const newTaskText = document.getElementById('newTaskText');
  const columnSelector = document.getElementById('columnSelector');

  let draggedCard = null;
  const columns = document.querySelectorAll('[id$="Column"]');

  // Make existing tasks draggable
  document.querySelectorAll('.task-card').forEach(makeDraggable);

  columns.forEach(col => {
    col.addEventListener('dragover', e => e.preventDefault());
    col.addEventListener('drop', () => {
      if (draggedCard) col.appendChild(draggedCard);
    });
  });

  function makeDraggable(card) {
    card.addEventListener('dragstart', () => {
      draggedCard = card;
      setTimeout(() => card.style.display = 'none', 0);
    });
    card.addEventListener('dragend', () => {
      setTimeout(() => {
        draggedCard.style.display = 'block';
        draggedCard = null;
      }, 0);
    });
  }

  function addTask() {
    const text = newTaskText.value.trim();
    const columnId = columnSelector.value;

    if (!text) {
      alert('Please enter a task title.');
      return;
    }

    const newCard = document.createElement('div');
    newCard.className = 'task-card';
    newCard.textContent = text;
    newCard.setAttribute('draggable', 'true');

    makeDraggable(newCard);

    document.getElementById(columnId).appendChild(newCard);
    newTaskText.value = '';
  }

  // Attach event listener to the button
  addTaskButton.addEventListener('click', addTask);
});


// profile page

document.addEventListener("DOMContentLoaded", function () {
  function previewProfile(event) {
    const output = document.getElementById('profilePreview');
    output.src = URL.createObjectURL(event.target.files[0]);
  }

  function addTag() {
    const tagInput = document.getElementById('tagInput');
    const tagList = document.getElementById('tagList');
    const tagValue = tagInput.value.trim();

    if (tagValue !== "") {
      const tag = document.createElement('span');
      tag.className = "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm";
      tag.innerText = tagValue;
      tagList.appendChild(tag);
      tagInput.value = "";
    }
  }

  const skillsForm = document.getElementById('skillsForm');
  if (skillsForm) {
    skillsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const skills = document.getElementById('skillsInput').value;
      alert("Skills saved: " + skills);
    });
  }

  // Expose previewProfile and addTag to global scope if needed in HTML
  window.previewProfile = previewProfile;
  window.addTag = addTag;
});


  // user dashboard






  




 

  