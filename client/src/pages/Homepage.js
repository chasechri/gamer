import React, { useState } from 'react'
import UserCard from '../components/UserCard';

import Filters from '../components/Filters';


import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Homepage = () => {
	// using the query hook to make a request 
	const { loading, data } = useQuery(QUERY_POSTS);
	


	


	// checking if there's data to post (if not then store it in empty array)
	const originalPosts = data?.posts || [];
	console.log(originalPosts);



	const [isChecked, setIsChecked] = useState(false);



	const [posts, setPosts] = useState(originalPosts)

	
	function clearFilters(c) {
		setIsChecked(isChecked)
		console.log('setting to isChecked')
		if (!isChecked) {
			console.log('isChecked path')
			
			setPosts(originalPosts);
		} else {
			setIsChecked(isChecked);
			setPosts(originalPosts)
			console.log('nothing checked')
		}

	}


	function handleRank(rank) {
		console.log('this is rank', rank.target.value);
		setIsChecked(!isChecked)
		if (!isChecked)
			{
				console.log('isChecked = true working')
				setPosts(posts.filter((post) => post.rank === rank.target.value))
				
			}
		if (isChecked) {
			setPosts(originalPosts)
			console.log('isChecked = false working')

			
		}
	}

	


	return (
		<main>

			<div
				name='user-list'
				className='flex flex-row'
			>

				<Filters
				title='Player List'
					posts={posts}
					handleRank={handleRank}
					clearFilters={clearFilters} 
					isChecked={isChecked}
					setIsChecked={setIsChecked}

				/>
			</div>
			
			<div>
			{loading ? (
        	<div>Loading...</div>
				) : (
					<UserCard posts={posts} title="Don't be discouraged to make the first post" />
				)}
			</div>
		
		</main>
	

	);
};

export default Homepage;