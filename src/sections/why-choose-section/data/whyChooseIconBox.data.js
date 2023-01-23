import React from 'react';
import globalVariableRepository from '../../../repository/global-variable.repository';
import Processor from '../../../images/why-choose-section/Processor.inline.svg';
import Connection from '../../../images/why-choose-section/Connection.inline.svg';
import Storage from '../../../images/why-choose-section/Storage.inline.svg';
import Payment from '../../../images/why-choose-section/Payment.inline.svg';
import PayLess from '../../../images/why-choose-section/PayLess.inline.svg';
import FullRefund from '../../../images/why-choose-section/Refund.inline.svg';

export default [
  {
    icon: <Processor />,
    title: 'AMD EPYC™ Processors',
    description: `Powerful AMD EPYC™ processors with high 3.3Ghz turbo speed give you high performance.`,
  },
  {
    icon: <Connection />,
    title: '40Gbps Internet Connection',
    description:
      'All of our servers are connected to 40Gbps Internet connection. There will be no latency/slowness with your server connection.',
  },
  {
    icon: <Storage />,
    title: 'Super Fast Storage',
    description: `Enterprise NVMe SSD storage with much higher speed, equipped on all of our Servers.`,
  },
  {
    icon: <Payment />,
    title: 'Flexible Payment',
    description:
      'Pay with any method you wish! Cloudzy welcomes Bitcoin, Ethereum, Monero, as well as PayPal, Mastercard, Visa, and more.',
  },
  {
    icon: <PayLess />,
    title: 'Pay Less',
    description:
      "Get the best Cloud VPS for half of other provider's price with much better specifications.",
  },
  {
    icon: <FullRefund />,
    title: 'Full Refund',
    description: `We are so confident in our services that we offer a full refund within ${globalVariableRepository.MONEY_BACK_GUARANTEE.toLowerCase()} of usage if Cloudzy did not suit your needs.`,
  },
];
