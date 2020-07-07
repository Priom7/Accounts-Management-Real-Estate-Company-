import React from 'react';

import InvestorsList from '../../investors/components/InversotrsList';

const Investors = () => {
  const INVESTORS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
      amount: 500000
    },
    {
      id: 'u2',
      name: 'Max Schwarz',
      image:
        'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
      amount: 500000
    },
    {
      id: 'u3',
      name: 'Max Schwarz',
      image:
        'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
      amount: 500000
    }
  ];

  return <InvestorsList items={INVESTORS} />;
};

export default Investors;
