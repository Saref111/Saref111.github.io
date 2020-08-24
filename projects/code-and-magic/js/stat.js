'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var MAX_BAR_HEIGHT = 150; // barHeight
var BAR_WIDTH = 40;
var myColor = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + FONT_GAP - GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';

    var barHeight = times[i] / maxTime * 100;

    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = myColor;
    } else {
      var saturation = Math.floor(Math.random() * 100);
      ctx.fillStyle = 'hsl(240, ' + saturation + '%, 60%)';
    }

    ctx.fillRect(CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 3 + FONT_GAP + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000';

    ctx.fillText(Math.floor(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - barHeight - FONT_GAP);
  }
};
