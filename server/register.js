'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'country',
    plugin: 'strapi-plugin-international-fields',
    type: 'string',
  });
};
