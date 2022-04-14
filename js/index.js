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
      picture: 'images/speakers/speaker_01.png',
      workplace: 'Professor at Harvard Law School',
      description: `Focusing on a collaborative approach in a networked environment, he created the concept of`,
    },
    {
      name: 'Jeon Gil-nam',
      picture: 'images/speakers/speaker_02.png',
      workplace:
        'Emeritus Professor, Korea Advanced Institute',
      description:
        'By developing Asias first Internet protocol network SDN and leading Koreas first private line',
    },
    {
      name: 'Noh So-young',
      picture: 'images/speakers/speaker_03.png',
      workplace: 'Art Center Nabi Director, CC Korea Director',
      description:
        'As the author of &lt;Digital Art Art of Our Time&gt;, he opened Art Center Nabi, Koreas first digital',
    },
    {
      name: 'Julia Leda',
      picture: 'images/speakers/speaker_04.png',
      workplace: 'Head of the Young Pirates of Europe',
      description:
        'European integration and online youth participation in politics and democracy are major concerns',
    },
    {
      name: 'Layla Tretikov',
      picture: 'images/speakers/speaker_05.png',
      workplace: 'Secretary General of the Wikimedia Foundation',
      description:
        'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.',
    },

    {
      name: 'Ryan Merkley',
      picture: 'images/speakers/speaker_06.png',
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
    <div>
                            <img src=${speaker.picture} alt='${speaker.name}'/>
                            </div>
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
    <div>
                                <img src=${speaker.picture} alt='${speaker.name}'/>
                                </div>
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
    <div>
                                  <img src=${speaker.picture} alt='${speaker.name}'/>
                                  </div>
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
