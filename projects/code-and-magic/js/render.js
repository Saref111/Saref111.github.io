'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    while (similarListElement.firstChild) {
      similarListElement.removeChild(similarListElement.firstChild);
    }

    var count = data.length > 4 ? 4 : data.length;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < count; i++) {
      var newWizard = renderWizard(data[i]);
      fragment.appendChild(newWizard);
    }

    similarListElement.appendChild(fragment);
  };

})();
