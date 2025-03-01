import {
  buttons,
  lists,
  inputs,
  langBtn,
  elements,
  lsData,
  LOCAL_KEY,
} from './refs.js';
import { setLocal, getLocal, loadUserSettings } from './localStorage.js';
import { classAdd, classRemove } from './classChange.js';
import { travel } from './translate.js';

export function markup(obj) {
  classAdd(elements.addCheckBox, 'visually-hidden');
  const path = travel[obj.lang];
  document.title = path.title;

  for (const key in buttons) {
    const index = buttons[key].dataset.tab;
    buttons[key].textContent = path.buttons[index];
  }
  elements.resetData.textContent = path.resetButton;
  elements.resetCategory.textContent = path.resetCategoryButton;
  inputs.searchCity.placeholder = path.placeholder_city;
  inputs.addCheckBox.placeholder = path.placeholder_add;
  if (obj.category === '-1') {
    lists.main.innerHTML = '';
    lists.sub.innerHTML = '';
    elements.mainTitle.textContent = path.mainTitle;
    elements.mainParagraph.textContent = path.mainParagraph;
  }
  if (obj.category !== '-1') {
    addMainCategory(obj);
    if (obj.subCategory !== '-1') {
      addSubCategory(obj);
      elements.addCheckBoxLabel.textContent = path.addCheckBox;
      addUserCheckBox(obj);
      loadCheckedBox(obj);
    }
  }
}

function addMainCategory(obj) {
  lists.main.innerHTML = '';
  lists.sub.innerHTML = '';
  elements.mainTitle.innerHTML = '';
  elements.mainParagraph.innerHTML = '';

  const nameEng = Object.keys(travel.eng.trip);

  const path = travel[obj.lang];
  const tabList = Object.keys(path.trip);
  const tabCategory = Object.keys(path.trip[tabList[obj.category]]);

  const mainTripMarkup = tabCategory
    .map((elem, index) => {
      return `
    <li class="item main__item">
      <label for="${index}_main">
      <input type="radio" name="${
        nameEng[lsData.category]
      }" id="${index}_main" />${elem}
      </label>
    </li>
`;
    })
    .join('');

  lists.main.insertAdjacentHTML('afterbegin', mainTripMarkup);

  classAdd(elements.addCheckBox, 'visually-hidden');
}
function addSubCategory(obj) {
  lists.sub.innerHTML = '';

  const nameEng = Object.keys(travel.eng.trip);
  const nameSubEng = Object.keys(travel.eng.trip[nameEng[lsData.category]]);

  const path = travel[obj.lang];
  const tabList = Object.keys(path.trip);
  const tabCategory = Object.keys(path.trip[tabList[obj.category]]);
  const tabKeys = Object.keys(obj.userSelectedRadioBox);
  const subTabIndex = obj.userSelectedRadioBox[tabKeys[obj.category]];
  const choosedSubCategory =
    path.trip[tabList[obj.category]][tabCategory[subTabIndex]];
  if (tabKeys[subTabIndex]) {
    document.getElementById(`${subTabIndex}_main`).checked = 'true';
    const subTripMarkup = choosedSubCategory
      .map((elem, index) => {
        return `
    <li class="item main__item-sub">
      <label for="${index}_sub" class="custom-checkbox">
      <input type="checkbox" name="${nameSubEng[subTabIndex]}" id="${index}_sub" />
      ${elem} <svg class="checkbox-icon" viewBox="0 0 24 24">
          <line class="underline" x1="2" y1="22" x2="22" y2="22"></line>
          <path class="checkmark" d="M3 16 C7 24, 14 28, 22 4"></path>
        </svg>
      </label>
    </li>
`;
      })
      .join('');
    lists.sub.insertAdjacentHTML('afterbegin', subTripMarkup);

    classRemove(elements.addCheckBox, 'visually-hidden');
  }
}

export function addUserCheckBox(obj) {
  const mainCategoryList = document.querySelector('input[type="radio"]')?.name;
  const subCategoryList = document.querySelector(
    'input[type="checkbox"]'
  )?.name;
  if (subCategoryList) {
    const userCheckBox =
      obj.userAddedCheckBox[mainCategoryList][subCategoryList];

    if (userCheckBox.length !== 0) {
      const addUserCheckBox = userCheckBox
        .map((elem, index) => {
          if (document.getElementById(elem.id)) return;
          return `
    <li  class="item main__item-sub__user" data-user_added="${index}_sub_user" id="${elem.id}" >
      <label for="${elem.id}_sub_user" class="custom-checkbox">${elem.text}
      <input type="checkbox" id="${elem.id}_sub_user" name="${subCategoryList}" data-userAddedBox />
      <svg class="checkbox-icon" viewBox="0 0 24 24">
          <line class="underline" x1="2" y1="22" x2="22" y2="22"></line>
          <path class="checkmark" d="M3 16 C7 24, 14 28, 22 4"></path>
        </svg>
      </label>
      <button class='button button-deleteUserBox' data-deleteUserBox>
      <img class='delUserCheckBox' src="./img/delUserCheckBox.svg" alt="delButton" />
      </button>
    </li>
`;
        })
        .join('');
      lists.sub.insertAdjacentHTML('beforeend', addUserCheckBox);
    }
  }
}

function loadCheckedBox(obj) {
  const mainCategoryList = document.querySelector('input[type="radio"]')?.name;
  const subCategoryList = document.querySelector(
    'input[type="checkbox"]'
  )?.name;
  if (subCategoryList) {
    const idBox =
      lsData.userSelectedCheckBox[mainCategoryList][subCategoryList];

    idBox.forEach((elem) => {
      document.getElementById(`${elem}`).checked = 'true';
    });
  }
}
