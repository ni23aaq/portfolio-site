document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const closePopup = document.getElementById('closePopup');
  
    const projects = {
      project1: `<p>This is the detailed description of Project One. It involves...</p>`,
      project2: `<p>This is the detailed description of Project Two. It focuses on...</p>`
    };
  
    document.querySelectorAll('.project-list button').forEach(button => {
      button.addEventListener('click', () => {
        const projectKey = button.getAttribute('data-project');
        popupContent.innerHTML = projects[projectKey] || '<p>No details available.</p>';
        popup.classList.remove('hidden');
        popup.focus();
      });
    });
  
    closePopup.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  });
  