import React from 'react';
import { GenericInput } from '@strapi/helper-plugin';
import { countries } from '../../locales';
import { useIntl } from 'react-intl';

const InputCountry = (props) => {
  const { locale } = useIntl();

  const countriesLocale = locale in countries ? countries[locale] : countries.en;

  const options = Object.entries(countriesLocale.countries).map((country, index) => ({
    metadatas: {
      intlLabel: {
        id: 'null',
        defaultMessage: Array.isArray(country[1]) ? country[1][0] : country[1],
      }
    },
    key: index,
    value: country[0]
  }));

  return <GenericInput {...props} options={options} type="select" />;
}

export default InputCountry;
