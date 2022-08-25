import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Earth from '@strapi/icons/Earth';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: 'country',
      pluginId: 'strapi-plugin-international-fields',
      type: 'string',
      icon: Earth,
      intlLabel: {
        id: 'international-fields.country.label',
        defaultMessage: 'Country',
      },
      intlDescription: {
        id: 'international-fields.country.description',
        defaultMessage: "Select any localized country and store as a two-letter code (ISO 3166-1 alpha-2).",
      },
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ "./components/Country"),
      }
    });

    app.registerPlugin({
      id: pluginId,
      name,
    });
  },

  bootstrap(app) {},
};
