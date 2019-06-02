initColorText();


function initColorText() {
  const text = document.getElementsByClassName('js-color-text')[0];

  const colors = [
    'orange',
    'royalblue',
    'pink',
    'coral',
    'yellow'
  ]

  let index = 0;

  const interval = setInterval(function() {
    text.style = 'color: ' + colors[index];
    index++
  }, 2000);
}