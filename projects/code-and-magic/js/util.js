'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var MIN_NAME_LENGTH = 2;
  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };
  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };
  var getRandomIndex = function (arrLength) {
    return Math.floor(Math.random() * arrLength);
  };
  var getRandomColor = function (arr) {
    return arr[getRandomIndex(arr.length)];
  };
  var getWizardsObjects = function (wizardsNames, wizardsSurnames, wizardsCoats, wizardsEyes, count) {
    var wizards = [];

    for (var i = 0; i < count; i++) {
      wizards[i] = {};

      wizards[i].name = wizardsNames[getRandomIndex(wizardsNames.length)] + ' ' + wizardsSurnames[getRandomIndex(wizardsSurnames.length)];

      wizards[i].coatColor = wizardsCoats[getRandomIndex(wizardsCoats.length)];

      wizards[i].eyesColor = wizardsEyes[getRandomIndex(wizardsEyes.length)];
    }

    return wizards;
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomIndex: getRandomIndex,
    getRandomColor: getRandomColor,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COATS: WIZARD_COATS,
    WIZARD_EYES: WIZARD_EYES,
    WIZARD_FIREBALLS: WIZARD_FIREBALLS,
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    getWizardsObjects: getWizardsObjects
  };
})();
