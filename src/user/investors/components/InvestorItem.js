import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../shared/components/UIElements/Avatar';
import Card from '../../../shared/components/UIElements/Card';
import './InvestorItem.css';

const InvestorItem = props => {
  console.log(props)
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/investor/${props.id}`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h4>
            Amount:{props.amount} tk.
            </h4>
          </div>
        </Link>
      </Card>
    </li>
    
  );
};

export default InvestorItem;
