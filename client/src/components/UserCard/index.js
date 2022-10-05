import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ cards, title }) => {
	if (!cards.length) {
		return <h3> No cards Yet</h3>;
	}

	return (
		<div>
			<h3>{title}</h3>
			{cards &&
				cards.map((card) => (
					<div
						key={card._id}
						className='container flex mx-10 py-5 px-5 my-2 bg-gray-300 items-center border-black border-2'
					>
						<div>
							<h1 className='text-xl font-bold flex flex-row justify-around px-1'>
								<Link
									to={`/profile/${card.username}`}
									style={{ fontweight: 700 }}
									className='text-light'
								>
									{card.username}
								</Link>
							</h1>
						</div>

						<div className='flex mx-5 grid-cols-5'>
							<div className='flex-col justify-around'>
								<h2 className='px-1 flex underline justify-center'>Rank</h2>{' '}
								<p className='flex justify-center'>{card.rank}</p>
							</div>

							<div className='flex-col justify-between px-2'>
								<h2 className=' px-1 flex justify-center'>Platform</h2>{' '}
								<p className='flex justify-center'>{card.platform}</p>
							</div>

							<div className='flex-col justify-around px-2'>
								<h2 className='px-1 flex justify-center'>Hours</h2>{' '}
								<p className='flex justify-center'>{card.hours}</p>
							</div>

							<div className='flex-col justify-between px-2'>
								<h2 className='flex justify-center'>Voicechat?</h2>{' '}
								<p className='flex justify-center'>{card.comms}</p>
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
						<Link
									to={`/profile/${card.username}`}
									style={{ fontweight: 700 }}
									className='text-light'
								>
									{card.username}
								</Link>
							<p>
								Comments: {card.commentCount} || Click to{' '}
								{card.commentCount ? 'see' : 'start'} the discussion!
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default UserCard;
