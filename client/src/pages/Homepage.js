import React, { useState } from 'react'
import UserCard from '../components/UserCard';
import UserList from '../components/UserList'


import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Homepage = () => {
	// using the query hook to make a request 
	const { loading, data } = useQuery(QUERY_POSTS);
	// checking if there's data to post (if not then store it in empty array)
	const originalPlayers = data?.posts || [];
	console.log(originalPlayers);
  
  // will later make call to server to grab all players React.useEffect to call server to grab all players
	// const originalPlayers = [
	// 	{
	// 		username: 'Gamertag',
	// 		rank: 'Casual',
	// 		platform: 'PC',
	// 		hours: 'AM',
	// 		comms: 'Y',
	// 	},
	// 	{
	// 		username: 'Gamertag',
	// 		rank: 'Gold',
	// 		platform: 'PS5',
	// 		hours: 'PM',
	// 		comms: 'Y',
	// 	},
	// ]
	

	const [isChecked, setIsChecked] = useState(false);



	const [players, setPlayers] = useState(originalPlayers)

	function handleFilterClick(c) {

	}
	
	function clearFilters(c) {
		setIsChecked(isChecked)
		console.log('setting to isChecked')
		if (!isChecked) {
			console.log('isChecked path')
			
			setPlayers(originalPlayers);
		} else {
			setIsChecked(isChecked);
			setPlayers(originalPlayers)
			console.log('nothing checked')
		}

	}


	function handleRank(rank) {
		console.log('this is rank', rank.target.value);
		setIsChecked(!isChecked)
		if (!isChecked)
			{
				console.log('isChecked = true working')
				setPlayers(players.filter((player) => player.rank === rank.target.value))
				
			}
		if (isChecked) {
			setPlayers(originalPlayers)
			console.log('isChecked = false working')

			
		}
	}
	
	function handlePlatform(platform) {
		setIsChecked(!isChecked)
		if (!isChecked)
			{
				console.log('isChecked = true working')
				setPlayers(players.filter((player) => player.platform === platform.target.value))
				
			}
		if (isChecked) {
			setPlayers(originalPlayers)
			console.log('isChecked = false working')

			
		}	
	}
	
	function handleHours(hours) {
		setIsChecked(!isChecked)
		if (!isChecked)
			{
				console.log('isChecked = true working')
				setPlayers(players.filter((player) => player.hours === hours.target.value))
				
			}
		if (isChecked) {
			setPlayers(originalPlayers)
			console.log('isChecked = false working')

			
		}
	}
	
	function handleComms(comms) {
		setIsChecked(!isChecked)
		if (!isChecked)
			{
				console.log('isChecked = true working')
				setPlayers(players.filter((player) => player.comms === comms.target.value))
				
			}
		if (isChecked) {
			setPlayers(originalPlayers)
			console.log('isChecked = false working')

			
		}
	}
	// const { loading, data } = useQuery(QUERY_THOUGHTS)
	// const { data: userData } = useQuery(QUERY_ME_BASIC)
	// const users = data?.users || []



	return (
		<main>

			<div
				name='user-list'
				className='flex flex-row'
			>
				<UserList
				title='Player List'
					players={players}
					handleRank={handleRank}
					handleHours={handleHours}
					handlePlatform={handlePlatform}
					handleComms={handleComms}
					clearFilters={clearFilters} 
					isChecked={isChecked}
					setIsChecked={setIsChecked}

				/>

			</div>
			
			<div>
			{loading ? (
        	<div>Loading...</div>
				) : (
					<UserCard players={players} title="Don't be discouraged to make the first post" />
				)}
			</div>
		
		</main>
	);
};

export default Homepage;