console.log('___data___')
 const discographyTemplate = require('modules/discography/discography.hbs');
 document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = discographyTemplate({
    test: "test1234--9876",
    items: [
      { year: "2010"
        title: "Hell and Silence"
        about: "Hell and Silence is an EP by Las Vegas rock group"
        description: "Hell and Silence is an EP by Las"
      },
      { year: "2011"
        title: "Hell and Silence"
        about: "Hell and Silence is an EP by Las Vegas rock group"
        description: "Hell and Silence is an EP by Las"
      },
      { year: "2012"
        title: "Hell and Silence"
        about: "Hell and Silence is an EP by Las Vegas rock group"
        description: "Hell and Silence is an EP by Las"
      },
    ]
  });
  document.getElementById('module-discography').appendChild(div);
}); 