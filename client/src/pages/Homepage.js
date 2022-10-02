import React from 'react';
import PostList from '../components/PostList';


import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Homepage = () => {
	// using the query hook to make a request 
	const { loading, data } = useQuery(QUERY_POSTS);
	// checking if there's data to post (if not then store it in empty array)
	const posts = data?.posts || [];
	console.log(posts);



	return (
		<main>
			
			<div className=''>
				<h1 className='text-xl mx-10 px-5'>Player list</h1>
				<button type='dropdown' 
					className='rounded-xl bg-red-500 text-black px-1 py-1 mx-5' >
					FILTER
				</button>
			</div>
			
			<div>
			{loading ? (
        	<div>Loading...</div>
				) : (
					<PostList posts={posts} title="Don't be discouraged to make the first post" />
				)}
			</div>
		
		</main>
	);
};

export default Homepage;
