import React, { useState, useEffect } from 'react';

import i18n from '../../i18n';

import './controller-language.styles.scss';

export default function ControllerLanguage() {
  const [language, setLanguage] = useState({
    pl: false,
    en: true,
  });

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    changeLanguage(value);
    setLanguage({
      pl: false,
      en: false,
      [value]: !language[value],
    });
  };

  useEffect(() => {
    const isPL = i18n.language === 'pl';
    const isEN = i18n.language === 'en';

    setLanguage({
      pl: isPL,
      en: isEN,
    });
  }, []);

  return (
    <div className="controllerLanguage">
      <label className={`controllerLanguage__label controllerLanguage__label--pl ${language.pl ? 'active' : ''}`}>
        <input className="controllerLanguage__label-input" type="radio" name="language" value="pl" onChange={handleChange} checked={language.pl} />
      </label>
      <label className={`controllerLanguage__label controllerLanguage__label--en ${language.en ? 'active' : ''}`}>
        <input className="controllerLanguage__label-input" type="radio" name="language" value="en" onChange={handleChange} checked={language.en} />
      </label>
    </div>
  );
}
