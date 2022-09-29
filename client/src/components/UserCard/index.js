import React from 'react'
// { user, age, rank, platform, addFriend }
export default function UserCard({ user }) {
	// function handleAddFriend() {
	// 	addFriend(user.id)
	// }

	const username = 'Mark'
	const age = 29
	const rank = 'Platinum'
	const platform = 'origin'
	return (
		<section>
			<div>
				<img src='../../assets' />
				<h3>{username}</h3>
			</div>
			<div>
				<h2>{age}</h2>
				<h2>{rank}</h2>
				<h2>{platform}</h2>
				<button
					type='submit'
					// onClick={handleAddFriend}
				>
					CONNECT
				</button>
			</div>
		</section>
	)
}
