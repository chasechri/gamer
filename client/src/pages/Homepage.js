import React, { useState } from 'react'
import UserCard from '../components/UserCard';
import Filters from '../components/Filters';


import { useQuery } from '@apollo/client';
import { QUERY_CARDS } from '../utils/queries';

const Homepage = () => {
	// using the query hook to make a request 
	const { loading, data } = useQuery(QUERY_CARDS);
	
	// checking if there's data to card (if not then store it in empty array)
	const originalCards = data?.cards || [];
	console.log(originalCards);

	const users = data?.users || [];
	console.log(users);



	const [isChecked, setIsChecked] = useState(false);



	const [cards, setCards] = useState(originalCards)

	
	function clearFilters(c) {
		setIsChecked(isChecked)
		console.log('setting to isChecked')
		if (!isChecked) {
			console.log('isChecked path')
			
			setCards(originalCards);
		} else {
			setIsChecked(isChecked);
			setCards(originalCards)
			console.log('nothing checked')
		}

	}


	function handleRank(rank) {
		console.log('this is rank', rank.target.value);
		setIsChecked(!isChecked)
		if (!isChecked)
			{
				console.log('isChecked = true working')
				setCards(cards.filter((card) => card.rank === rank.target.value))
				
			}
		if (isChecked) {
			setCards(originalCards)
			console.log('isChecked = false working')

			
		}
	}

	


	return (
		<main>

			<div
				name='user-list'
				className='flex flex-row'
			>

				<Filters
				title='Player List'
					cards={cards}
					handleRank={handleRank}
					clearFilters={clearFilters} 
					isChecked={isChecked}
					setIsChecked={setIsChecked}

				/>
			</div>
			
			<div>
			{loading ? (
        	<div>Loading...</div>
				) : (
					<UserCard cards={cards} title="Don't be discouraged to make the first card" />
				)}
			</div>
		
		</main>
	

	);
};

export default Homepage;