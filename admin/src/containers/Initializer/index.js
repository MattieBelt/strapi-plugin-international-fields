import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStrapi } from 'strapi-helper-plugin';
import pluginPkg from '../../../../package.json';
import {InputCountry, InputLanguage, InputNationality} from '../../components';

const Initializer = ({ updatePlugin }) => {
  const {
    strapi: { fieldApi },
  } = useStrapi();

  const ref = useRef();
  ref.current = updatePlugin;

  useEffect(() => {
    fieldApi.registerField({ type: 'country', Component: InputCountry });
    fieldApi.registerField({ type: 'language', Component: InputLanguage });
    fieldApi.registerField({ type: 'nationality', Component: InputNationality });

    ref.current(pluginPkg.strapi.id, 'isReady', true);
  }, []);

  return null;
};

Initializer.propTypes = {
  updatePlugin: PropTypes.func.isRequired,
};

export default Initializer;
