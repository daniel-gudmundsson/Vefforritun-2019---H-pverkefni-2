import List from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lecture = new lecture();
    lecture.load();

  } else {
    const list = new List();
    list.init();
    list.load();
  }
});
