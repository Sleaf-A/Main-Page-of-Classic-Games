// Simple hub JS: keyboard accessibility & optional theme toggle
document.addEventListener("DOMContentLoaded", () => {
  // Make tiles activate on Enter/Space when focused
  document.querySelectorAll('.tile').forEach(tile => {
    tile.setAttribute('tabindex', '0'); // focusable
    tile.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tile.click();
      }
    });
  });

  // Theme toggle (simple: toggles inverted background)
  const themeBtn = document.getElementById('themeToggle');
  themeBtn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    themeBtn.textContent = document.documentElement.classList.contains('light-mode') ? 'Dark' : 'Light';
  });
});
