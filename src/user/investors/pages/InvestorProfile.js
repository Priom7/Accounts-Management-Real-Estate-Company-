import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../shared/components/FormElements/Button';
import Avatar from '../../../shared/components/UIElements/Avatar';
import InvestorItem from '../components/InvestorItem';
import Modal from '../../../shared/components/UIElements/Modal';
import { AuthContext } from '../../../shared/context/auth-context';
import Card from '../../../shared/components/UIElements/Card';
import MyTable from '../../../shared/components/UIElements/MyTable';
import './InvestorProfile.css';
import '../../../user/components/UsersList.css';

const InvestorProfile = (props) => {
	const auth = useContext(AuthContext);
	const [ showConfirmModal, setShowConfirmModal ] = useState(false);
	const showDeleteWarningHandler = () => {
		setShowConfirmModal(true);
	};

	const cancelDeleteHandler = () => {
		setShowConfirmModal(false);
	};

	const confirmDeleteHandler = () => {
		setShowConfirmModal(false);
		console.log('DELETING...');
	};
	return (
		<React.Fragment>
			<Modal
				show={showConfirmModal}
				onCancel={cancelDeleteHandler}
				header='Are you sure?'
				footerClass='userprofile-item__modal-actions'
				footer={
					<React.Fragment>
						<Button inverse onClick={cancelDeleteHandler}>
							CANCEL
						</Button>
						<Button danger onClick={confirmDeleteHandler}>
							DELETE
						</Button>
					</React.Fragment>
				}
			>
				<p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
			</Modal>

			<div className='center'>
				<div className='userprofile-item'>
					<Card className='userprofile-item__content'>
						<h1>Investor's Profile</h1>
						<div className='center'>
							<div className='userprofile-item__image'>
								<Avatar
									image='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
									alt='Profile'
								/>
							</div>
						</div>
						<div className='userprofile-item__info'>
							<h2>MD. Khan</h2>
							<h5>Email: khan@gmail.com</h5>
							<h5>Phone: 023422342222</h5>
							<h5>Address : Dhaka, Bangladesh</h5>
						</div>
						<div className='userprofile-item-actions'>
							<div className='userprofile-item__actions'>
								{auth.isLoggedIn && (
									<Button inverse to={`/places/${props.id}`}>
										Edit
									</Button>
								)}
								{auth.isLoggedIn && (
									<Button danger onClick={showDeleteWarningHandler}>
										Delete
									</Button>
								)}
							</div>
						</div>

						<ul className='users-list'>
							<Card className='userprofile-item__item'>
								<h4>Total: </h4>
								<hr />
								<div className='userprofile-item__info'>
									<h5>Credit: 500000 tk.</h5>
									<h5>Debit: 100000 tk.</h5>
								</div>
							</Card>
							<Card className='userprofile-item__item'>
								<h4>Current: </h4>
								<hr />
								<div className='userprofile-item__info'>
									<h5>Credit: 400000 tk.</h5>
									<h5>Date : 10/10/2010</h5>
								</div>
							</Card>
							<Card className='userprofile-item__item'>
								<h4>Records: </h4>
								<Button inverse to={`/places/${props.id}`}>
									Add New
								</Button>
							
							</Card>

							<MyTable row='hello'/>
						</ul>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvestorProfile;
