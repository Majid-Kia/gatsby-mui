import FooterLinks from './FooterLinks.data';

const flattenData = (items) => {
  let result = [];
  items.map((item) => {
    if (item.isCollapse) {
      result = result.concat(item.items);
    } else {
      result.push(item);
    }
  });
  return result;
};

export default [
  {
    title: 'Windows',
    items: flattenData(FooterLinks[0].items[0].items),
  },
  {
    title: 'Linux',
    items: flattenData(FooterLinks[0].items[1].items),
  },
  {
    title: 'Resources',
    items: flattenData(FooterLinks[3].items),
  },
  {
    title: 'Company',
    items: flattenData(FooterLinks[4].items),
  },
];
