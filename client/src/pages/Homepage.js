import React, { useState } from 'react'
import UserList from '../components/UserList'

const Homepage = () => {
	// will later make call to server to grab all players React.useEffect to call server to grab all players
	const originalPlayers = [
		{
			username: 'Gamertag',
			rank: 'Casual',
			platform: 'PC',
			hours: 'AM',
			comms: 'Y',
		},
		{
			username: 'Gamertag',
			rank: 'Gold',
			platform: 'PS5',
			hours: 'PM',
			comms: 'Y',
		},
	]
	

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

	// const loggedIn = Auth.loggedIn()
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
		</main>
	)
}

export default Homepage
