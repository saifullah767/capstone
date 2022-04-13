const body = document.querySelector('body');
const bars = document.getElementById('hamburger');

function hamburger() {
  const a = document.querySelector('.mobile-nav');
  if (a.style.display === 'none') {
    a.style.display = 'block';
    bars.style.display = 'none';
    body.style.overflowY = 'hidden';
  } else {
    a.style.display = 'none';
    bars.style.display = 'block';
    body.style.overflowY = 'scroll';
  }
}

// Speaker Data Array

const data = {
  speakers: [
    {
      name: 'Yochai Benkler',
      picture: 'images/mobile/array01.jpg',
      workplace: 'Professor at Harvard Law School',
      description: `Focusing on a collaborative approach in a networked environment, he created the concept of
                co-production based on sharing, such as open source software and Wikipedia.`,
    },
    {
      name: 'Jeon Gil-nam',
      picture: 'images/mobile/array02.jpg',
      workplace:
        'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
      description:
        'By developing Asias first Internet protocol network SDN and leading Koreas first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
    },
    {
      name: 'Noh So-young',
      picture: 'images/mobile/array03.jpg',
      workplace: 'Art Center Nabi Director, CC Korea Director',
      description:
        'As the author of &lt;Digital Art Art of Our Time&gt;, he opened Art Center Nabi, Koreas first digital art institution in 2000, and is currently serving.',
    },
    {
      name: 'Julia Leda',
      picture: 'images/mobile/array04.jpg',
      workplace: 'Head of the Young Pirates of Europe',
      description:
        'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EUs copyright law in July.',
    },
    {
      name: 'Layla Tretikov',
      picture: 'images/mobile/array05.jpg',
      workplace: 'Secretary General of the Wikimedia Foundation',
      description:
        'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.',
    },

    {
      name: 'Ryan Merkley',
      picture: 'images/mobile/array06.jpg',
      workplace: 'Creative Commons CEO, Former Mozilla Foundation COO',
      description:
        'He has been active in open movements such as open government and open source.',
    },
  ],
};

const speakersList = document.getElementById('speakers-list');
const { speakers } = data;
const morebtn = document.getElementById('more-btn');

let speakersToShow = data.speakers;

window.onload = () => {
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  }
  speakersToShow.reverse().forEach((speaker) => {
    const speakerHTML = `<article class='speaker'>
                            <img src=${speaker.picture} alt='${speaker.name}'/>
                            <div class='desc'>
                                <p href='#' class='speaker-name'>${speaker.name}</p>
                                <p href='#' class='speaker-job'> <i> ${speaker.workplace} </i> </p>
                                <div class='speaker-bar'></div>
                                <p class='speaker-desc'>${speaker.description}</p>
                            </div>
                         </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
};
window.addEventListener('resize', () => {
  document.getElementById('more-btn').classList.remove('hide');
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  } else {
    speakersToShow = speakers;
  }
  speakersToShow.forEach((speaker) => {
    const speakerHTML = `<article class='speaker clearfix'>
                                <img src=${speaker.picture} alt='${speaker.name}'/>
                                <div class='desc'>
                                    <p href='#' class='speaker-name'>${speaker.name}</p>
                                    <p href='#' class='speaker-job'> <i> ${speaker.workplace} </i> </p>
                                    <div class='speaker-bar'></div>
                                    <p class='speaker-desc'>${speaker.description}</p>
                                </div>
                        </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
});

morebtn.addEventListener('click', () => {
  speakersList.innerHTML = '';
  speakers.reverse().forEach((speaker) => {
    const speakerHTML = `<article class='speaker clearfix'>
                                  <img src=${speaker.picture} alt='${speaker.name}'/>
                                  <div class='desc'>
                                      <p href='#' class='speaker-name'>${speaker.name}</p>
                                      <p href='#' class='speaker-job'> <i> ${speaker.workplace} </i> </p>
                                      <div class='speaker-bar'></div>
                                      <p class='speaker-desc'>${speaker.description}</p>
      
                                  </div>
                          </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
    document.getElementById('more-btn').classList.add('hide');
  });
});
