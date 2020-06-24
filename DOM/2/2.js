const openOverlay = document.querySelector('#openOverlay');

openOverlay.addEventListener('click', function () {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const overlayContainer = document.createElement('div');
  overlayContainer.classList.add('overlay__container');

  const deleteBtn = document.createElement('a');
  deleteBtn.classList.add('overlay__close');
  deleteBtn.textContent = 'x';

  const overlayContent = document.createElement('div');
  overlayContent.classList.add('overlay__content');
  overlayContent.textContent = 'Hello, world!';

  overlayContainer.appendChild(deleteBtn);
  overlayContainer.appendChild(overlayContent);
  overlay.appendChild(overlayContainer); 

  document.body.appendChild(overlay);

  overlayContent.addEventListener('click', function() {
    event.stopPropagation();
  })

  overlay.addEventListener('click', function(){
    document.body.removeChild(overlay);
  });
});