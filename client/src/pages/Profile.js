import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import UserCard from '../components/UserCard';
import ReachOut from '../components/ReachOut';
import ReachOutList from '../components/ReachOutList';
import PostForm from '../components/PostForm';
import FriendList from '../components/FriendList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = ({ posts, title }) => {
	const { username } = useParams();

	const [addFriend] = useMutation(ADD_FRIEND);
	const { data } = useQuery(QUERY_USER, {
		variables: { username },
	});

	console.log(data);
	const user = data?.me || {};

	console.log(user);

	// navigate to personal profile page if username is yours
	if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
		return <Navigate to='/profile:username' />;
	}

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	if (!user?.username) {
		return (
			<h4>
				You need to be logged in to see this. Use the navigation links above to
				sign up or log in!
			</h4>
		);
	}

	const handleClick = async () => {
		try {
			await addFriend({
				variables: { id: user._id },
			});
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div>
			<div>
				<UserCard posts={posts} title={title} />
				<div>
					<ReachOut></ReachOut>
					<ReachOutList></ReachOutList>
				</div>
			</div>
			<div>
				<FriendList></FriendList>
			</div>

			<div className='flex-row mb-3'>
				<h2 className='bg-dark text-secondary p-3 display-inline-block'>
					Viewing {username ? `${user.username}'s` : 'your'} profile.
				</h2>

				{username && (
					<button className='btn ml-auto' onClick={handleClick}>
						Add Friend
					</button>
				)}
			</div>

			<div className='flex-row justify-space-between mb-3'>
				<div className='col-12 mb-3 col-lg-8'>
					<UserCard
						thoughts={user.posts}
						title={`${user.username}'s posts...`}
					/>
				</div>

				<div className='col-12 col-lg-3 mb-3'>
					<FriendList
						username={user.username}
						friendCount={user.friendCount}
						friends={user.friends}
					/>
				</div>
			</div>
			<div className='mb-3'>{!username && <PostForm />}</div>
		</div>
	);
};

export default Profile;
