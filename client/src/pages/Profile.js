
import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faUserFriends, faInbox } from '@fortawesome/free-solid-svg-icons';


import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Profile = () => {

	const { username } = useParams();

	const { data } = useQuery(QUERY_ME, {
		variables: { username: username },
	});

	const user = data?.me || {};

	if (!user?.username) {
		return <h4>NO USER EXISTS</h4>;
	}

	return (
		<div className='container flex mx-10 py-5 px-5 my-2 bg--300 content-around items-center border-2'>
			<div className='card-profile'>
			
		<span className='logo'><FontAwesomeIcon icon={faPerson} /> {`${user.username}`}</span>
		<br></br>
		<span className='logo'><FontAwesomeIcon icon={faInbox} /> {`${user.email}`}</span>
			<br></br>
			<span className='logo'><FontAwesomeIcon icon={faUserFriends} /> 
			{`${user.friendCount} `} </span>
			
			
			</div>
			
			<div >
				{' '}
				<UserCard posts={user.posts} />
				<UserForm />
			</div>
			
		</div>
	);
};

export default Profile;
