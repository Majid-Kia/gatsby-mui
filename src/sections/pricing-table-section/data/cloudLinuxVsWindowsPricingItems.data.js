import OsVariationEnum from '../enum/osVariation.enum';

export default [
  {
    title: 'Starter',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=2&os=windows',
    },
  },
  {
    title: 'Advanced',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=4&os=windows',
    },
  },
  {
    isSelected: true,
    title: 'Professional',
    badge: 'Most Popular',
    planSpec: [
      {
        key: 'CPU',
        amount: '4',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=8&os=windows',
    },
  },
  {
    title: 'Enterprise',
    planSpec: [
      {
        key: 'CPU',
        amount: '6',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=16&os=windows',
    },
  },
  {
    title: 'Starter',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=2&os=linux',
    },
  },
  {
    title: 'Advanced',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=4&os=linux',
    },
  },
  {
    isSelected: true,
    title: 'Professional',
    badge: 'Most Popular',
    planSpec: [
      {
        key: 'CPU',
        amount: '4',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=8&os=linux',
    },
  },
  {
    title: 'Enterprise',
    planSpec: [
      {
        key: 'CPU',
        amount: '6',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
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
        name: 'NVME/SSD Storage',
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
      name: OsVariationEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink:
        'https://panel.cloudzy.com/createinstance?region=DTX&ram=16&os=linux',
    },
  },
];
