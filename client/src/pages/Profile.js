import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

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
		<div className='container flex'>
			<div className='flex mx-10 py-5 px-5 my-2 content-around items-center border-black border-2 rounded'>
				<h4 className='px-1 flex justify-center'>
					{' '}
					Welcome to {`${user.username}'s`} profile
				</h4>

				<h4 className='flex justify-center mx-2'>{`${user.email}`}</h4>
				<h4 className='flex justify-around mx-2'>
					Friends {`${user.friendCount}`}
				</h4>

				<div>
					{' '}
					<UserCard posts={user.posts} />
					<UserForm />
				</div>
			</div>
		</div>
	);
};

export default Profile;
