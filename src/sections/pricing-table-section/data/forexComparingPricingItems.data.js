import forexDistrosEnum from '../enum/forexDistros.enum';

export default [
  {
    title: 'Starter',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: '2',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '30',
        unit: 'GB',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '3',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '9.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '7.95',
        unit: '$',
      },
    },
    os: {
      name: forexDistrosEnum.SuperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=186`,
    },
  },
  {
    isSelected: true,
    title: 'Advanced',
    badge: 'Most Popular',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: '4',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '60',
        unit: 'GB',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '5',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '19.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '14.95',
        unit: '$',
      },
    },
    os: {
      name: forexDistrosEnum.SuperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=187`,
    },
  },
  {
    title: 'Professional',
    planSpec: [
      {
        key: 'CPU',
        amount: '4',
        unit: 'vCPU',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: '8',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '140',
        unit: 'GB',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '7',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '36.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '29.95',
        unit: '$',
      },
    },
    os: {
      name: forexDistrosEnum.SuperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=188`,
    },
  },
  {
    title: 'Enterprise',
    planSpec: [
      {
        key: 'CPU',
        amount: '6',
        unit: 'vCPU',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: '16',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '250',
        unit: 'GB',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '10',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '69.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '54.95',
        unit: '$',
      },
    },
    os: {
      name: forexDistrosEnum.SuperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=189`,
    },
  },

  {
    title: 'Enterprise',
    planSpec: [
      {
        key: 'CPU',
        amount: '6',
        unit: 'vCPU',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: '16',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '250',
        unit: 'GB',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '10',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '69.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '54.95',
        unit: '$',
      },
    },
    os: {
      name: forexDistrosEnum.HyperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=189`,
    },
  },
  {
    title: 'Premium',
    planSpec: [
      {
        key: 'CPU',
        amount: '8',
        unit: 'vCPU',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: '32',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '400',
        unit: 'GB',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '12',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '149.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '129.00',
        unit: '$',
      },
    },
    os: {
      name: forexDistrosEnum.HyperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=190`,
    },
  },
  {
    title: 'Elite',
    planSpec: [
      {
        key: 'CPU',
        amount: '12',
        unit: 'vCPU',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: '64',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '800',
        unit: 'GB',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '15',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '299.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '275.00',
        unit: '$',
      },
    },
    os: {
      name: forexDistrosEnum.HyperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=191`,
    },
  },
  {
    isSelected: true,
    isCustom: true,
    title: 'Can’t find what you’re looking for? Contact us and make your own!',
    badge: 'Make your own plan',
    planSpec: [
      {
        key: 'CPU',
        amount: 'Custom',
        unit: '',
        name: 'highend 2.9+ GHz',
      },
      {
        key: 'Memory',
        amount: 'Custom',
        unit: '',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: 'Custom',
        unit: '',
        name: 'NVMe/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: 'Custom',
        unit: '',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: 'Custom',
        unit: '',
        name: 'Connections',
      },
    ],
    os: {
      name: forexDistrosEnum.HyperSonicForexVps,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: 'https://cloudzy.com/contact-us/',
    },
  },
];
