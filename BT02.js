const toggleSearchButton = document.getElementById('toggleSearchButton');
const searchInput = document.getElementById('searchInput');

let isExpanded = false;

toggleSearchButton.addEventListener('click', () => {
  if (!isExpanded) {
    searchInput.focus();
  }
  isExpanded = !isExpanded;
});