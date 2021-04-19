import React from 'react';
import { Inputs } from '@buffetjs/custom';
import countries from '../countries';
import languages from '../languages';
import nationalities from '../nationalities';

const currentLanguage = strapi.currentLanguage;

const Input = (props) => {
  props.option = props.options.shift({ label: '', value: null });

  return (
    <Inputs
      {...props}
      type="select"
    />
  );
};

const InputCountry = (props) => {
  const locale = currentLanguage in countries ? countries[currentLanguage] : countries.en;
  const options = Object.entries(locale.countries).map((country) => ({ label: country[1], value: country[0] }));

  return <Input {...props} options={options} />;
}

const InputLanguage = (props) => {
  const locale = currentLanguage in languages ? languages[currentLanguage] : languages.en;
  const options = Object.entries(locale.languages).map((language) => ({ label: language[1], value: language[0] }));

  return <Input {...props} options={options} />;
}

const InputNationality = (props) => {
  const locale = currentLanguage in nationalities ? nationalities[currentLanguage] : nationalities.en;
  const options = Object.entries(locale.nationalities).map((nationality) => ({
    label: nationality[1],
    value: nationality[0]
  }));

  return <Input {...props} options={options} />;
}

export {
  InputCountry,
  InputLanguage,
  InputNationality,
};
