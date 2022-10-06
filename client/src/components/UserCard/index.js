import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ posts, title }) => {
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
						className='flex-row py-5 bg-gray-300 items-center border-black border-2'
					>
						<div className='flex-row'>
							<h1 className='flex-row'>
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
								<p className='flex justify-center'>{post.rank}</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className=' px-1 flex underline justify-center'>
									Platform
								</h2>{' '}
								<p className='flex justify-center'>{post.platform}</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className='px-1 flex underline justify-center'>Hours</h2>{' '}
								<p className='flex justify-center'>{post.hours}</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className='flex underline justify-center'>Voicechat?</h2>{' '}
								<p className='flex justify-center'>{post.comms}</p>
							</div>

							<button
								className='bg-black text-white rounded-xl'
								type='submit'
								// onClick={handleAddFriend}
							>
								CONNECT
							</button>
							<div className='flex justify-between px-2'>
								<p className='flex flex-row'>
									Comments: {post.commentCount} || Click to{' '}
									{post.commentCount ? 'see' : 'start'} the discussion!
								</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default UserCard;
