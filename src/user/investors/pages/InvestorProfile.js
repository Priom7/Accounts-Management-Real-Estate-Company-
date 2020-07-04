import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../shared/components/FormElements/Button'
import Avatar from '../../../shared/components/UIElements/Avatar';
import InvestorItem from '../components/InvestorItem'
import Card from '../../../shared/components/UIElements/Card';

const InvestorProfile = (props) => {
    console.log(props)
	return (
		<React.Fragment>
			<div className='center'>
				<h1>Investors Profile</h1>
			</div>
			<div className='center'>
				<Button>Add New Invest Record</Button>
                <Button>Add New Withdrawal Record</Button>
			</div>
			<ul className='users-list'>
				
					<InvestorItem
						key={props.id}
						id={props.id}
						image={props.image}
						name={props.name}
						amount={props.amount}
					/>
				
			</ul>
		</React.Fragment>
	);
};

export default InvestorProfile;
