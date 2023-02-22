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
    title: 'Products',
    items: flattenData(FooterLinks[1].items),
  },
  {
    title: 'USA Locations',
    items: flattenData(FooterLinks[2].items[0].items),
  },
  {
    title: 'Asia Locations',
    items: flattenData(FooterLinks[2].items[1].items),
  },
  {
    title: 'Europe Locations',
    items: flattenData(FooterLinks[2].items[2].items),
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
