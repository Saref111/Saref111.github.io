'use strict';

(function () {
  var saveURL = 'https://javascript.pages.academy/code-and-magick';
  var loadURL = 'https://javascript.pages.academy/code-and-magick/data';

  var save = function (data, loadSuccessHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        loadSuccessHandler(xhr.response);
      } else {
        errorHandler('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('POST', saveURL);
    xhr.send(data);
  };

  var load = function (loadSuccessHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', loadURL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        loadSuccessHandler(xhr.response);
      } else {
        errorHandler('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }

    });

    xhr.addEventListener('error', function () {
      errorHandler('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      errorHandler('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.send();
  };

  window.backend = {
    save: save,
    load: load
  };
})();
