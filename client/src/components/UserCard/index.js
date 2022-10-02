import React from 'react'



export default function UserCard({ players }) {
	// function handleAddFriend() {
	// 	addFriend(user.id)
	// }
	return players.map((post) => {
		return (
			<div className='container flex mx-10 py-5 px-5 my-2 bg-gray-300 items-center border-black border-2'>
				{/* <div className='flex flex-row justify-between'>
					<img src={require(`../../assets/M3RK.jpg`)} />
				</div> */}
				<div>
					<h1 className='text-xl font-bold flex flex-row justify-around px-1'>
						{post.username}
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

					{/* <div className='flex-col'></div> */}
				</div>
				<button
					className='bg-black text-white px-2 text-center justify-items-end rounded-xl'
					type='submit'
					// onClick={handleAddFriend}
				>
					CONNECT
				</button>
			</div>
		)
	})
}
