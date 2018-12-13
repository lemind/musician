const discographyTemplate = require('modules/discography/discography.hbs');
document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = discographyTemplate({
    items: [
      { year: "2010",
        title: "Hell and Silence",
        about: "Hell and Silence is an EP by Las Vegas rock group",
        description: "Hell and Silence is an EP by Las Vegas rock group, released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham. To promote the album the band performed five shows at SXSW 2010 including at the BMI Official Showcase. While at SXSW they were endorsed by Blue Microphones. They also toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010, New Noise Music Festival, Neon Reverb Festival, and Fork Fest.",
        button_HellSilence: "discography__button_HellSilence",
      },
      { year: "2012",
        title: "Night Visions",
        about: "Night Visions is the debut studio album by American rock band",
        description: "It was released on September 4, 2012 through Interscope Records. The extended track was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, as well as English hip-hop producer Alex da Kid and Brandon Darner from the American indie rock group The Envy Corps. It was mastered by Joe LaPorta. According to frontman Dan Reynolds, the album took three years to finish.",
        button_NightVisions: "discography__button_NightVisions",
      },
      { year: "2015",
        title: "Smoke + Mirrors",
        about: "The album was recorded during 2014 at the band's home studio in Las Vegas, Nevada",
        description: "Self-produced by members of the band along with English hip-hop producer Alexander Grant, known by his moniker Alex da Kid, the album was released by Interscope Records and Grant's KIDinaKORNER label on February 17, 2015, in the United States.",
        button_SmokeMirrors: "discography__button_SmokeMirrors",
        info_bottom: "discography__info_bottom",
      },
    ]
  });
  document.getElementById('module-discography').appendChild(div);
}); 

const compositionsTemplate = require('modules/compositions/compositions.hbs');
document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = compositionsTemplate({
    items: [
      { year: "03.04.2015",
        title: "indian sammer",
        about: "Sam Feldt ft. Kimberly Anne - Show Me Love (EDX's Indian Summer Remix)",
        description: "Radioactive is a song recorded by American rock band Imagine Dragons for their major-label debut EP Continued Silence and later on their debut studio album, Night Visions (2012), as the opening track. 'Radioactive' was",
        button: "Visit the iTunes",
        listeners: "182,364",
        favorite: "10k",
        share: "3k",
        discuss: "90",
      },
      { year: "20.07.2015",
        title: "indian sammer Remix",
        about: "Sam Feldt - Show Me Love (EDX's Indian Summer Remix)",
        description: "Amsterdam's Sam Feldt earned attention in Europe and then worldwide for his melodic house remixes, mixtapes, and collaborations including 2014's 'Bloesem' with De Hofnar and 'Hot Skin' with Kav Verhouzer on...",
        button: "Visit the iTunes",
        listeners: "12,289",
        favorite: "8k",
        share: "1k",
        discuss: "23",
        player_reverse: "compositions__player_reverse",
      },
      { year: "03.04.2015",
        title: "chill nation",
        about: "James Bay - Let It Go (Bearson Remix)",
        description: "A soulful singer/songwriter from a small English town with a penchant for crafting moving and evocative folk-pop confections in the vein of Ed Sheeran, Foy Vance, and Ben Howard, James Bay hails from the North Hertf...",
        button: "Visit the iTunes",
        listeners: "182,364",
        favorite: "10k",
        share: "3k",
        discuss: "96",
        description_bottom: "compositions__song-description_bottom",
      },
    ]
  });
  document.getElementById('module-compositions').appendChild(div);
}); 

const tracksTemplate = require('modules/tracks/tracks.hbs');
document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = tracksTemplate({
    items: [
      { year: "03.04.2015",
        title: "chill nation",
        about: "James Bay - Let It Go (Bearson Remix)",
        description: "A soulful singer/songwriter from a small English town with a penchant for crafting moving and evocative folk-pop confections in the vein of Ed Sheeran, Foy Vance, and Ben Howard, James Bay hails from the North Hertf shire market town of Hitchin. Bay honed his skills regionally, eventually landing high-expo",
        number: "01",
        cover: "/static/img/track-cover1.jpg",
        about_length: "tracks__text-about_length",
      },
      { year: "01.03.2015",
        title: "chill nation",
        about: "Smoke and Mirrors",
        description: "Hard Rock Cafe teamed with the band, granting them the first ever full access to take control of Hard Rock Cafe's internal video system (more than 20,000 screens at all 151 locations",
        number: "02",
        cover: "/static/img/track-cover2.jpg",
      },
      { year: "04.04.2015",
        title: "chill nation",
        about: "It Comes Back to You",
        description: "In 2015 a world tour, entitled the Smoke and Mirrors Tour is scheduled in promotion of the world-wide release of Smoke and Mirrors.",
        number: "03",
        cover: "/static/img/track-cover3.jpg",
      },
      { year: "01.07.2015",
        title: "chill nation",
        about: "Let It Go (Bearson Remix)",
        description: "A soulful singer/songwriter from a small English town with a penchant for crafting moving and evocative folk-pop confections in the vein of Ed Sheeran, Foy Vance, and Ben",
        number: "04",
        cover: "/static/img/track-cover4.jpg",
      },
      { year: "02.11.2015",
        title: "chill nation",
        about: "I Don't Mind",
        description: "Hell and Silence is an EP by Las Vegas rock group Imagine Dragons, released in March 2010 in the United States. It was recorded at Battle Born Studios.[1] All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham.",
        number: "05",
        cover: "/static/img/track-cover5.jpg",
      },
      { year: "06.09.2015",
        title: "chill nation",
        about: "Smoke + Mirrors",
        description: "A soulful singer/songwriter from a small English town with a penchant for crafting",
        number: "06",
        cover: "/static/img/track-cover6.jpg",
      },                        
    ]
  });
  document.getElementById('module-tracks').appendChild(div);
}); 