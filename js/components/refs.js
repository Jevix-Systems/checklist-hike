const choose = (selector) => document.querySelector(selector);

export const buttons = {
  city: choose('[data-tab="0"]'),
  campsite: choose('[data-tab="1"]'),
  beach: choose('[data-tab="2"]'),
  active: choose('[data-tab="3"]'),
  hotelsAndSpa: choose('[data-tab="4"]'),
  car: choose('[data-tab="5"]'),
};

export const inputsButton = {
  addButton: choose('[data-add-button]'),
  searchButton: choose('[data-search-button]'),
};

export const lists = {
  main: choose('[data-list]'),
  sub: choose('[data-sub-list]'),
};

export const inputs = {
  addCheckBox: choose('#addCheckBox'),
  searchCity: choose('#search'),
};

export const langBtn = {
  eng: choose('[data-lang="eng"]'),
  ua: choose('[data-lang="ua"]'),
};

export const elements = {
  header: choose('header'),
  mainTitle: choose('[data-main-title]'),
  mainParagraph: choose('[data-main-paragraph]'),
  addCheckBox: choose('[data-addCheckBox]'),
  addCheckBoxLabel: choose('[data-addCheckBox-label]'),
  resetData: choose('[data-reset]'),
  resetCategory: choose('[ data-reset-category]'),
  deleteButton: choose('[data-deleteUserBox]'),
};

export const lsData = {
  lang: 'eng',
  category: '-1',
  subCategory: '-1',
  userCheckBox: '-1',
  userSelectedRadioBox: {
    city: '',
    campsite: '',
    beach: '',
    active: '',
    'hotels/spa': '',
    car: '',
  },
  userSelectedCheckBox: {
    city: {
      museum: [],
      park: [],
      restaurant: [],
    },
    campsite: {
      forest: [],
      mountains: [],
    },
    beach: {
      sunbathing: [],
      'water sports': [],
      'night life': [],
    },
    active: {
      hiking: [],
      cycling: [],
      adventure: [],
    },
    'hotels/spa': {
      spa: [],
      'luxury hotel': [],
      'boutique hotel': [],
    },
    car: {
      'road trip': [],
      'car rental': [],
      drive: [],
    },
  },
  userAddedCheckBox: {
    city: {
      museum: [],
      park: [],
      restaurant: [],
    },
    campsite: {
      forest: [],
      mountains: [],
    },
    beach: {
      sunbathing: [],
      'water sports': [],
      'night life': [],
    },
    active: {
      hiking: [],
      cycling: [],
      adventure: [],
    },
    'hotels/spa': {
      spa: [],
      'luxury hotel': [],
      'boutique hotel': [],
    },
    car: {
      'road trip': [],
      'car rental': [],
      drive: [],
    },
  },
};

export const LOCAL_KEY = 'userSettings';
