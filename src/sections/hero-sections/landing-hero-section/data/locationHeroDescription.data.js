import globalVariableRepository from '../../../../repository/global-variable.repository';
import stringUtil from '../../../../util/string.util';

const templateData = {
  locationName: '{{locationName}}',
  title:
    'Step Over Latency and Enjoy High Performance With {{locationName}}',
  description: `{{locationName}} provides you with dedicated IP for a lovely journey. Picture cutting-edge technology within your power. Take a peek at Cloudzy's {{locationName}}, at ${globalVariableRepository.STARTING_PRICE}!`,
  action: {
    text: `starting from ${globalVariableRepository.STARTING_PRICE}`,
    sectionId: 'pricing',
  },
};

export const getLocationHeroData = (locationName) => {
  return {
    locationName: stringUtil.fillParameters(templateData.locationName, {
      locationName,
    }),
    title: stringUtil.fillParameters(templateData.title, { locationName }),
    description: stringUtil.fillParameters(templateData.description, {
      locationName,
    }),
    action: templateData.action,
  };
};
