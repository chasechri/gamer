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
		<div className='container flex mx-10 py-5 px-5 my-2 bg-gray-300 content-around items-center border-black border-2'>
			<h4 className='px-1 flex justify-center'>
				{' '}
				Welcome to {`${user.username}'s`} profile
			</h4>

			<a
				href='https://www.ea.com/games/apex-legends/news#game-updates'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
			</a>

			<p className='flex justify-center mx-2'>{`${user.email}'s`}</p>
			<p className='flex justify-around mx-2'>
				Friends {`${user.friendCount}`}
			</p>
			<div className='flex flex-row'>
				{' '}
				<UserCard posts={user.posts} />
			</div>
			<div className='flex flex-row'>
				<UserForm />
			</div>
		</div>
	);
};

export default Profile;
