import React from 'react';
import PropTypes from 'prop-types';
import { Inputs } from '@buffetjs/custom';
import { countries, languages, nationalities } from '../locales';

const currentLanguage = strapi.currentLanguage;

const InternationalInput = (props) => {
  return (
    <Inputs
      {...props}
      options={props.validations.required ? props.options : ['', ...props.options]}
      type="select"
    />
  );
};

const InputCountry = (props) => {
  const locale = currentLanguage in countries ? countries[currentLanguage] : countries.en;
  const options = Object.entries(locale.countries).map((country) => ({
    label: country[1],
    value: Array.isArray(country[0]) ? country[0][0] : country[0]
  }));

  return <InternationalInput {...props} options={options} />;
}

const InputLanguage = (props) => {
  const locale = currentLanguage in languages ? languages[currentLanguage] : languages.en;
  const options = Object.entries(locale.languages).map((language) => ({
    label: language[1],
    value: language[0]
  }));

  return <InternationalInput {...props} options={options} />;
}

const InputNationality = (props) => {
  const locale = currentLanguage in nationalities ? nationalities[currentLanguage] : nationalities.en;
  const options = Object.entries(locale.nationalities).map((nationality) => ({
    label: nationality[1],
    value: nationality[0]
  }));

  return <InternationalInput {...props} options={options} />;
}

InternationalInput.defaultProps = {
  validations: {},
};

InternationalInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.object,
        ]),
      }),
      PropTypes.string,
      PropTypes.node,
    ])
  ).isRequired,
  validations: PropTypes.object,
};

export {
  InputCountry,
  InputLanguage,
  InputNationality,
};
