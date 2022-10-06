import React from 'react';
import { Link } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import { DELETE_POST } from '../../utils/mutations';
// import { QUERY_POSTS } from '../../utils/queries';

const UserCard = ( posts, title) => {
	// const { data } = useQuery(QUERY_POSTS);
	// const [deletePost, { error }] = useMutation(DELETE_POST);
	// const posts = data?.post || {};

	// const handleDeletePost = async (postId) => {
	// 	try {
	// 		await deletePost({
	// 			variables: { postId }
	// 		});
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

	if (!posts.length) {
		return <h3> No Posts Yet</h3>;
	}
	return (
		<div id='user-card'>
			<h3>{title}</h3>
			{posts &&
				posts.map((post) => (
					<div
						key={post._id}
						className='flex-row py-5 bg-gray-300 items-center border-black border-2 content-start'
					>
						<div className='flex-row'>
							<h1 className='flex-row ml-3'>
								<Link
									to={`/profile/${post.username}`}
									style={{ fontweight: 500 }}
									className=''
								>
									{post.username}
								</Link>
							</h1>
						</div>

						<div className='px-10 flex flex-row'>
							<div className='flex-col justify-around px-2'>
								<h2 className='px-1 flex underline justify-center'>Rank</h2>{' '}
								<p className='flex capitalize justify-center'>{post.rank}</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className=' px-1 flex underline justify-center'>
									Platform
								</h2>{' '}
								<p className='capitalize flex justify-center'>
									{post.platform}
								</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className='px-1 flex underline justify-center'>Hours</h2>{' '}
								<p className='flex justify-center'>{post.hours}</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className='flex underline justify-center'>Voicechat?</h2>{' '}
								<p className='capitalize flex justify-center'>{post.voiceChat}</p>
							</div>

							<div className='flex flex-row justify-between px-2'>
								<p className='flex pr-2'>
									Comments: {post.commentCount} || Click to{' '}
									{post.commentCount ? 'see' : 'start'} the discussion!
								</p>
								{/* <button
									className='bg-black text-white rounded-xl flex flex-row margin-auto justify-around'
									type='submit'
									 onClick={handleDeletePost}
								>
									<h3>Delete</h3>
								</button> */}
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default UserCard;
