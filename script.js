document.querySelectorAll('details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('details[open]').forEach((openItem) => {
      if (openItem !== item) openItem.open = false;
    });
  });
});
