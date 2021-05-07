import pluginPkg from '../../package.json';
import Initializer from './containers/Initializer';

export default strapi => {
  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginPkg.strapi.description,
    icon: pluginPkg.strapi.icon,
    id: 'international-fields',
    initializer: Initializer,
    injectedComponents: [],
    isReady: false,
    isRequired: pluginPkg.strapi.required || false,
    layout: null,
    name : pluginPkg.strapi.name,
    preventComponentRendering: false,
    trads: {},
  };

  return strapi.registerPlugin(plugin);
};
