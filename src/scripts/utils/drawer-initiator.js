const DrawerInitiator = {
  init({ button, main, drawer }) {
    button.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      event.stopPropagation();
    });
    main.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  },
};

export default DrawerInitiator;
