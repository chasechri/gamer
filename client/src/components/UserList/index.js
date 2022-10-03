
import React, { useState } from 'react'
import UserCard from '../UserCard'
import Filters from '../Filters'





export default function UserList({ players, handleRank, isChecked, handleHours, handlePlatform, handleComms, clearFilters }) {
	// return players.map((user) => {
	
	return (
		<div>
			<div className='flex flex-row'>
				<h1 className='text-xl mx-10 px-5'>Player list</h1>
				<Filters 
				handleRank={handleRank}
				isChecked={isChecked}
				handleHours={handleHours}
				handlePlatform={handlePlatform}
				handleComms={handleComms}
				clearFilters={clearFilters} 
				/>
				{/* <button
					type='button'
					className='rounded-xl bg-red-500 text-black px-1 py-1 mx-5 dropdown-toggle'
				>
					Rank
				</button> */}
			</div>
			<UserCard players={players}/>
		</div>
	)
	// })
}
