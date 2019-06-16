function initColorText() {
  const text = document.getElementsByClassName('js-color-text')[0];

  const colors = [
    'orange', // 0
    'royalblue', // 1
    'pink', // 2
    'coral', // 3
    'yellow' // 4
  ]

  let index = 0;

  setInterval(function() {
    text.style = 'color: ' + colors[index];
    if (index === 4) {
      index = 0;
    } else {
      index++
    }
  }, 2000);
}

initColorText();