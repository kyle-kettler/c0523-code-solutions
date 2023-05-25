const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabController);

function tabController(event) {
  if (event.target.matches('.tab')) {
    for (const tab of $tabs) {
      if (tab === event.target) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }

    const $dataView = event.target.getAttribute('data-view');

    for (const view of $views) {
      if (view.getAttribute('data-view') === $dataView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    }
  }
}
