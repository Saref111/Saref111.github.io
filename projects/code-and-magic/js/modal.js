'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userAvatar = document.querySelector('.setup-open');
  var closeModalButton = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var dialogHandle = userDialog.querySelector('.upload');
  var form = userDialog.querySelector('.setup-wizard-form');
  var wizards = [];

  var popupEscHandler = function (evt) {
    if (evt.target !== userNameInput) {
      window.util.isEscEvent(evt, hideModal);
    }
  };

  var showModal = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', popupEscHandler);
  };

  var hideModal = function () {
    userDialog.style.top = '80px';
    userDialog.style.left = '50%';
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', popupEscHandler);
  };

  var showWizards = function () {
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var loadHandler = function (data) {
    window.modal.wizards = data;
    window.colorize.update(window.modal.wizards);
  };

  var drawTemplates = function () {
    window.backend.load(loadHandler, errorHandler);

    showWizards();
  };

  drawTemplates();

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      hideModal();
    });

    evt.preventDefault();
  }, errorHandler());

  userAvatar.addEventListener('click', function () {
    showModal();
  });

  userAvatar.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, showModal);
  });

  closeModalButton.addEventListener('click', function () {
    hideModal();
  });

  closeModalButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, hideModal);
  });

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var moveModalHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var dropModalHandler = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', moveModalHandler);
      document.removeEventListener('mouseup', dropModalHandler);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', moveModalHandler);
    document.addEventListener('mouseup', dropModalHandler);
  });

  window.modal = {
    wizards: wizards
  };
})();
