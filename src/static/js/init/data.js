 const discographyTemplate = require('modules/discography/discography.hbs');
 document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = discographyTemplate({
    items: [
      { year: "2010",
        title: "Hell and Silence",
        about: "Hell and Silence is an EP by Las Vegas rock group",
        description: "Hell and Silence is an EP by Las Vegas rock group, released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham. To promote the album the band performed five shows at SXSW 2010 including at the BMI Official Showcase. While at SXSW they were endorsed by Blue Microphones. They also toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010, New Noise Music Festival, Neon Reverb Festival, and Fork Fest.",
        button_first: "discography__button_first",
      },
      { year: "2012",
        title: "Night Visions",
        about: "Night Visions is the debut studio album by American rock band",
        description: "It was released on September 4, 2012 through Interscope Records. The extended track was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, as well as English hip-hop producer Alex da Kid and Brandon Darner from the American indie rock group The Envy Corps. It was mastered by Joe LaPorta. According to frontman Dan Reynolds, the album took three years to finish.",
        button_second: "discography__button_second",
      },
      { year: "2015",
        title: "Smoke + Mirrors",
        about: "The album was recorded during 2014 at the band's home studio in Las Vegas, Nevada",
        description: "Self-produced by members of the band along with English hip-hop producer Alexander Grant, known by his moniker Alex da Kid, the album was released by Interscope Records and Grant's KIDinaKORNER label on February 17, 2015, in the United States.",
        button_third: "discography__button_third",
        info_bottom: "discography__info_bottom",
      },
    ]
  });
  document.getElementById('module-discography').appendChild(div);
}); 


