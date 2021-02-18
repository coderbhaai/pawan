"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callSwal = callSwal;
exports.printError = printError;
exports.checkDuplicate = checkDuplicate;
exports.setMinNum = setMinNum;
exports.sortArray = sortArray;
exports.faqQA = exports.faqCat = exports.storeFilter = exports.adList = exports.specialSlider = exports.brands = exports.paramAdsHeader = exports.paramHeader = exports.params4 = exports.params3 = exports.params21 = exports.params2 = exports.params = exports.countFour = exports.paramsCatsNStore = exports.paramSlider = void 0;

function callSwal(mesg) {
  swal({
    title: mesg,
    timer: 4000
  });
}

function printError(mesg) {
  console.log('mesg', mesg);
}

function checkDuplicate(array) {
  return new Promise((resolve, reject) => {
    const dup = array.reduce((i, index) => {
      i.items[index] = i.items[index] ? i.items[index] += 1 : 1;
      if (i.items[index] === 2) i.dup.push(index);
      return i;
    }, {
      items: {},
      dup: []
    });
    resolve(dup);
    return;
  });
}

function setMinNum(e) {
  return new Promise((resolve, reject) => {
    if (e.target.max) {
      let {
        value,
        min,
        max
      } = e.target;
      var data = Math.max(Number(min), Math.min(Number(max), Number(value)));
    } else {
      let {
        value,
        min
      } = e.target;
      var data = Math.max(Number(min), Number(value));
    }

    resolve(data);
    return;
  });
}

function sortArray(array, sortBy, type, direction) {
  return new Promise((resolve, reject) => {
    if (type == 'text') {
      if (direction == 'Up') {
        array.sort(function (a, b) {
          if (a.store.toLowerCase() < b.store.toLowerCase()) return -1;
          if (a.store.toLowerCase() > b.store.toLowerCase()) return 1;
          return 0;
        });
      } else {
        array.sort(function (a, b) {
          if (a.store.toLowerCase() < b.store.toLowerCase()) return 1;
          if (a.store.toLowerCase() > b.store.toLowerCase()) return -1;
          return 0;
        });
      }
    }

    if (type == 'number') {
      const xx = sortBy;

      if (direction == 'Up') {
        array.sort(function (a, b) {
          if (a.xx > b.xx) return 1;
          if (b.xx > a.xx) return -1;
          return 0;
        });
      } else {
        array.sort(function (a, b) {
          if (a.xx > b.xx) return -1;
          if (b.xx > a.xx) return 1;
          return 0;
        });
      }
    }

    resolve(array);
    return;
  });
}

const paramSlider = {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.paramSlider = paramSlider;
const paramsCatsNStore = {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    1400: {
      slidesPerView: 12,
      spaceBetween: 5
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.paramsCatsNStore = paramsCatsNStore;
const countFour = [0, 1, 2, 3];
exports.countFour = countFour;
const params = {
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: true
  },
  slidersPerView: 1,
  effect: "fade",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true
};
exports.params = params;
const params2 = {
  slidesPerView: 10,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1400: {
      slidesPerView: 10,
      spaceBetween: 5
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.params2 = params2;
const params21 = {
  slidesPerView: 10,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5500
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1400: {
      slidesPerView: 10,
      spaceBetween: 5
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.params21 = params21;
const params3 = {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 5
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.params3 = params3;
const params4 = {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 10,
      spaceBetween: 5
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.params4 = params4;
const paramHeader = {
  observer: true,
  observeParents: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  // autoplay: { delay: 25000 },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.paramHeader = paramHeader;
const paramAdsHeader = {
  observer: true,
  observeParents: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  // autoplay: { delay: 25000 },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1400: {
      slidesPerView: 8,
      spaceBetween: 10
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
exports.paramAdsHeader = paramAdsHeader;
const brands = [{
  img: '1.png'
}, {
  img: '2.png'
}, {
  img: '3.png'
}, {
  img: '4.png'
}, {
  img: '5.png'
}, {
  img: '6.png'
}, {
  img: '7.png'
}, {
  img: '8.png'
}, {
  img: '9.png'
}, {
  img: '10.png'
}];
exports.brands = brands;
const specialSlider = [{
  'img': 'special-1.jpg',
  'url': '/xx'
}, {
  'img': 'special-2.jpg',
  'url': '/xx'
}, {
  'img': 'special-3.jpg',
  'url': '/xx'
}];
exports.specialSlider = specialSlider;
const adList = [{
  'single': true,
  'type': 1,
  'text': 'Above Banner'
}, {
  'single': true,
  'type': 2,
  'text': 'Offer Left Side'
}, {
  'single': true,
  'type': 3,
  'text': 'Offer Right Side'
}, {
  'single': true,
  'type': 4,
  'text': 'Staff Recommended Left Side'
}, {
  'single': true,
  'type': 5,
  'text': 'Staff Recommended Right Side'
}, {
  'single': true,
  'type': 6,
  'text': 'Special Offer'
}, {
  'single': true,
  'type': 7,
  'text': 'Daily Ranking Left Top'
}, {
  'single': true,
  'type': 8,
  'text': 'Daily Ranking Left Bottom'
}, {
  'single': true,
  'type': 9,
  'text': 'Daily Ranking Right Top'
}, {
  'single': true,
  'type': 10,
  'text': 'Daily Ranking Right Bottom Small'
}, {
  'single': true,
  'type': 11,
  'text': 'Today"s Recommended Ads'
}, {
  'single': true,
  'type': 12,
  'text': 'Today"s Recommended Left'
}, {
  'single': true,
  'type': 13,
  'text': 'Today"s Recommended Right'
}, {
  'single': true,
  'type': 14,
  'text': 'Shop Page Left Top'
}, {
  'single': true,
  'type': 15,
  'text': 'Shop Page Left Bottom'
}, {
  'single': true,
  'type': 16,
  'text': 'Shop Page Right Top'
}, {
  'single': true,
  'type': 17,
  'text': 'Shop Page Right Bottom'
}, {
  'single': true,
  'type': 18,
  'text': 'Categories Left'
}, {
  'single': true,
  'type': 19,
  'text': 'Categories Right'
}, {
  'single': false,
  'type': 20,
  'text': 'Stores Header'
}, {
  'single': false,
  'type': 21,
  'text': 'Survey Header'
}];
exports.adList = adList;
const storeFilter = [{
  'value': "0",
  'text': 'ALL'
}, {
  'value': "a",
  'text': 'A'
}, {
  'value': "b",
  'text': 'B'
}, {
  'value': "c",
  'text': 'C'
}, {
  'value': "d",
  'text': 'D'
}, {
  'value': "e",
  'text': 'E'
}, {
  'value': "f",
  'text': 'F'
}, {
  'value': "g",
  'text': 'G'
}, {
  'value': "h",
  'text': 'H'
}, {
  'value': "i",
  'text': 'I'
}, {
  'value': "j",
  'text': 'J'
}, {
  'value': "k",
  'text': 'K'
}, {
  'value': "l",
  'text': 'L'
}, {
  'value': "m",
  'text': 'M'
}, {
  'value': "n",
  'text': 'N'
}, {
  'value': "o",
  'text': 'O'
}, {
  'value': "p",
  'text': 'P'
}, {
  'value': "q",
  'text': 'Q'
}, {
  'value': "r",
  'text': 'R'
}, {
  'value': "s",
  'text': 'S'
}, {
  'value': "t",
  'text': 'T'
}, {
  'value': "u",
  'text': 'U'
}, {
  'value': "v",
  'text': 'V'
}, {
  'value': "w",
  'text': 'W'
}, {
  'value': "x",
  'text': 'X'
}, {
  'value': "y",
  'text': 'Y'
}, {
  'value': "z",
  'text': 'Z'
}];
exports.storeFilter = storeFilter;
const faqCat = [{
  'id': 1,
  'cat': 'Bonus'
}, {
  'id': 2,
  'cat': 'Cashback issues'
}, {
  'id': 3,
  'cat': 'Withdrawl'
}, {
  'id': 4,
  'cat': 'Cashback Facts'
}, {
  'id': 5,
  'cat': 'Partner With Us'
}, {
  'id': 6,
  'cat': 'Reward Eagle Modus Operandi'
}, {
  'id': 7,
  'cat': 'Tracking'
}, {
  'id': 8,
  'cat': 'Miscelleneous'
}];
exports.faqCat = faqCat;
const faqQA = [{
  'id': 1,
  'catId': 1,
  'quest': 'What is business communication?',
  'ans': 'Anim pariatur cliche reprehenderit, enim eiusmod high life.'
}, {
  'id': 2,
  'catId': 1,
  'quest': 'What is Personality Development?',
  'ans': 'Anim pariatur cliche reprehenderit, enim eiusmod high life.'
}, {
  'id': 3,
  'catId': 1,
  'quest': 'How can i handle an interview?',
  'ans': 'Anim pariatur cliche reprehenderit, enim eiusmod high life.'
}, {
  'id': 4,
  'catId': 4,
  'quest': '',
  'ans': ''
}, {
  'id': 5,
  'catId': 5,
  'quest': '',
  'ans': ''
}, {
  'id': 6,
  'catId': 6,
  'quest': '',
  'ans': ''
}, {
  'id': 7,
  'catId': 7,
  'quest': '',
  'ans': ''
}, {
  'id': 8,
  'catId': 8,
  'quest': '',
  'ans': ''
}];
exports.faqQA = faqQA;