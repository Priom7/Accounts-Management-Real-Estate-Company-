import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../shared/components/UIElements/Avatar';
import Card from '../shared/components/UIElements/Card';
import './AllUsers.css';

const AllUsers = (props) => {
	return (
		<div className='users-list'>
			<li className='user-item'>
				<Card className='user-item__content'>
					<Link to={`/investors`}>
						<div className='user-item__image'>
							<Avatar
								image='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
								alt='investors'
							/>
						</div>
						<div className='user-item__info'>
							<h2>Investors</h2>
							<h3>40</h3>
						</div>
					</Link>
				</Card>
			</li>

			<li className='user-item'>
				<Card className='user-item__content'>
					<Link to={`/flatholders`}>
						<div className='user-item__image'>
							<Avatar
								image='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
								alt='flatholders'
							/>
						</div>
						<div className='user-item__info'>
							<h2>Flat Holders</h2>
							<h3>60</h3>
						</div>
					</Link>
				</Card>
			</li>

			<li className='user-item'>
				<Card className='user-item__content'>
					<Link to={`/users`}>
						<div className='user-item__image'>
							<Avatar
								image='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
								alt='admin'
							/>
						</div>
						<div className='user-item__info'>
							<h2>Admins</h2>
							<h3>5</h3>
						</div>
					</Link>
				</Card>
			</li>
		</div>
	);
};

export default AllUsers;
