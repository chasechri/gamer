import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import Filters from '../components/Filters';


import Filters from '../components/Filters';




import { useQuery} from '@apollo/client';

import { QUERY_POSTS} from '../utils/queries';

const Homepage = () => {
	// using the query hook to make a request
	const { loading, data } = useQuery(QUERY_POSTS);
	// checking if there's data to post (if not then store it in empty array)
	const initialPosts = data?.posts || [];

	// will later make call to server to grab all players React.useEffect to call server to grab all players

	const [isChecked, setIsChecked] = useState(false);
	const [posts, setPosts] = useState(initialPosts);
	useEffect(() => {
		if (loading === false && posts) {
			setPosts(initialPosts);

		}
	}, [loading, data]);


	function handleRank(rank) {
		console.log('this is rank', rank.target.value);

		setIsChecked(!isChecked);
		if (!isChecked) {
			console.log(rank.target.value);
			setPosts(posts.filter((post) => post.rank === rank.target.value));
			console.log(posts);
		}
		if (isChecked) {
			setPosts(initialPosts);
			console.log('isChecked = false working');
		}
	}

	function handlePlatform(platform) {
		setIsChecked(!isChecked);
		if (!isChecked) {
			console.log('isChecked = true working');
			setPosts(posts.filter((post) => post.platform === platform.target.value));
		}
		if (isChecked) {
			setPosts(initialPosts);
			console.log('isChecked = false working');
		}
	}

	function handleHours(hours) {
		setIsChecked(!isChecked);
		if (!isChecked) {
			console.log('isChecked = true working');
			setPosts(posts.filter((post) => post.hours === hours.target.value));
		}
		if (isChecked) {
			setPosts(initialPosts);
			console.log('isChecked = false working');
		}
	}

	function handleComms(comms) {
		setIsChecked(!isChecked);
		if (!isChecked) {
			console.log('isChecked = true working');
			setPosts(posts.filter((post) => post.comms === comms.target.value));
		}
		if (isChecked) {
			setPosts(initialPosts);
			console.log('isChecked = false working');
		}
	}
	// const { loading, data } = useQuery(QUERY_THOUGHTS)
	// const { data: userData } = useQuery(QUERY_ME_BASIC)
	// const users = data?.users || []

	return (
		<main>
			<div name='homepage' className='flex flex-row justify-around'>
				<Filters
					title='Filter List'
					handleRank={handleRank}
					handleHours={handleHours}
					handlePlatform={handlePlatform}
					handleComms={handleComms}
					// clearFilters={clearFilters}

					isChecked={isChecked}
					setIsChecked={setIsChecked}
				/>
			</div>

			<div>
				{loading ? (
					<div>Loading...</div>
				) : (

					<UserCard
						posts={posts}
						title="Don't be discouraged to make the first post"
					/>
				)}
			</div>

		</main>
	

	);
};

export default Homepage;
