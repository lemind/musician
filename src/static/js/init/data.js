
console.log('___data___')

const discographyTemplate = require('modules/discography/discography.hbs');

document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = discographyTemplate({
    test: "test1234--9876",
    items: [
      { value: "sdfs sdfsdf sdf sdf" },
      { value: "A892374927347 8923749823 289347298374" },
      { value: "there is value..." }
    ]
  });
  document.getElementById('module-discography').appendChild(div);
});