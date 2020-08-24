'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardCoat = userDialog.querySelector('.wizard-coat');
  var wizardEyes = userDialog.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball');
  var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
  var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = userDialog.querySelector('input[name="fireball-color"]');
  var lastTimeout;

  wizardCoat.addEventListener('click', function (evt) {
    var newCoatColor = window.util.getRandomColor(window.util.WIZARD_COATS);
    evt.target.style.fill = newCoatColor;
    wizardCoatInput.value = newCoatColor;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      updateWizards(window.modal.wizards);
    }, 500);
  });

  wizardEyes.addEventListener('click', function (evt) {
    var newEyesColor = window.util.getRandomColor(window.util.WIZARD_EYES);
    evt.target.style.fill = newEyesColor;
    wizardEyesInput.value = newEyesColor;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      updateWizards(window.modal.wizards);
    }, 500);
  });

  wizardFireball.addEventListener('click', function (evt) {
    var newFireballColor = window.util.getRandomColor(window.util.WIZARD_FIREBALLS);
    evt.target.style = 'background-color: ' + newFireballColor;
    wizardFireballInput.value = newFireballColor;
  });

  var updateWizards = function (wizards) {
    var currentCoatColor = userDialog.querySelector('[name="coat-color"]').value;
    var currentEyesColor = userDialog.querySelector('[name="eyes-color"]').value;

    var sameWizards = wizards.filter(function (element) {
      return element.colorCoat === currentCoatColor && element.colorEyes === currentEyesColor;
    });

    var sameCoatWizards = wizards.filter(function (element) {
      return element.colorCoat === currentCoatColor;
    });
    var sameEyesWizards = wizards.filter(function (element) {
      return element.colorEyes === currentEyesColor;
    });

    var filteredWizards = sameWizards.concat(sameCoatWizards).concat(sameEyesWizards);

    for (var i = 0; i < filteredWizards.length; i++) {
      var currentWizard = filteredWizards[i];

      for (var j = i + 1; j < filteredWizards.length; j++) {
        if (currentWizard === filteredWizards[j]) {
          filteredWizards.splice(j, 1);
        }
      }
    }

    window.render(filteredWizards);
  };

  window.colorize = {
    update: updateWizards
  };
})();
