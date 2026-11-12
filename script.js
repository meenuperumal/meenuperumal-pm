const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
const dialog = document.querySelector('#demo-dialog');
const openDemo = document.querySelector('#open-demo');
const closeDemo = document.querySelector('#close-demo');
if (dialog && openDemo && closeDemo) {
  openDemo.addEventListener('click', () => dialog.showModal());
  const stopDemo = () => { dialog.querySelector('video')?.pause(); dialog.close(); };
  closeDemo.addEventListener('click', stopDemo);
  dialog.addEventListener('click', event => { if (event.target === dialog) stopDemo(); });
  dialog.addEventListener('close', () => dialog.querySelector('video')?.pause());
}
