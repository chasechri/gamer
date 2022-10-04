import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ posts, title }) => {
	if (!posts.length) {
		return <h3> No Posts Yet</h3>;
	}

	return (
		<div>
			<h3>{title}</h3>
			{posts &&
				posts.map((post) => (
					<div
						key={post._id}
						className='container flex mx-10 py-5 px-5 my-2 bg-gray-300 items-center border-black border-2'
					>
						<div>
							<h1 className='text-xl font-bold flex flex-row justify-around px-1'>
								<Link
									to={`/profile/${post.username}`}
									style={{ fontweight: 700 }}
									className='text-light'
								>
									{post.username}
								</Link>
							</h1>
						</div>

						<div className='flex mx-5 grid-cols-5'>
							<div className='flex-col justify-around'>
								<h2 className='px-1 flex underline justify-center'>Rank</h2>{' '}
								<p className='flex justify-center'>{post.rank}</p>
							</div>

							<div className='flex-col justify-between px-2'>
								<h2 className=' px-1 flex justify-center'>Platform</h2>{' '}
								<p className='flex justify-center'>{post.platform}</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className='px-1 flex justify-center'>Hours</h2>{' '}
								<p className='flex justify-center'>{post.hours}</p>
							</div>

							<div className='flex-col justify-between px-2'>
								<h2 className='flex justify-center'>Voicechat?</h2>{' '}
								<p className='flex justify-center'>{post.comms}</p>
							</div>

							<button
								className='bg-black text-white px-2 text-center justify-items-end rounded-xl'
								type='submit'
								// onClick={handleAddFriend}
							>
								CONNECT
							</button>
						</div>
						<div>
							<p>
								Comments: {post.commentCount} || Click to{' '}
								{post.commentCount ? 'see' : 'start'} the discussion!
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default UserCard;
