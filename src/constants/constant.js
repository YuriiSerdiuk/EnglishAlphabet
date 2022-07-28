import React from 'react';
import EnglishLetterPronunciation from "../components/game/EnglishLetterPronunciation";

export const alphabet = ["english", "russian", "ukraine"];
export const languages = [
  { language: "english", code: "US" },
  { language: "russian", code: "RU" },
  { language: "ukraine", code: "UA" },
];

export const GamesConfig = {
  ['english-letter-pronunciation'] : <EnglishLetterPronunciation/>
}

export const chooseLenguageData = {
  english: ["english", "russian", "ukraine"],
  russian: ["английский", "русский", "українский"],
  ukraine: ["англійська", "російська", "українська"],
};

export const languageTitle = {
  english: "English Language",
  russian: "Русский язык",
  ukraine: "Українська мова",
};
export const chooseLenguageAlphabet = {
  english: "Alphabet",
  russian: "Алфавит",
  ukraine: "Алфавіт",
};
export const chooseDrawerNumber = {
  english: "Number",
  russian: "Числа",
  ukraine: "Числа",
};
export const chooseDrawerSetting = {
  english: "Setting",
  russian: "Настройки",
  ukraine: "Налаштування",
};
export const chooseDrawerContacts = {
  english: "Contacts",
  russian: "Контакты",
  ukraine: "Контакти",
};
