import React from 'react';

import InvestorItem from './InvestorItem';
import Button from "../../../shared/components/FormElements/Button"
import Card from '../../../shared/components/UIElements/Card';
import './InvestorsList.css';
import InvestorProfile from '../pages/InvestorProfile';

const InvestorsList = props => {
  console.log(props)
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No investor found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
    <div className="center">
    <h1>Investors</h1>
    </div>
    <div className="center">
    <Button>Add Investor</Button>
    </div>
    <ul className="users-list">
      {props.items.map(investor => (
        <InvestorItem
          key={investor.id}
          id={investor.id}
          image={investor.image}
          name={investor.name}
          amount={investor.amount}
        />
      ))}
    </ul>
    <ul className="users-list">
      {props.items.map(investor => (
        <InvestorProfile
          key={investor.id}
          id={investor.id}
          image={investor.image}
          name={investor.name}
          amount={investor.amount}
        />
      ))}
    </ul>
    </React.Fragment>
  );
};

export default InvestorsList;
