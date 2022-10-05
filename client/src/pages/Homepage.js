import React, { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import UserCard from "../components/UserCard";

import { useQuery } from '@apollo/client';
import { QUERY_CARDS } from '../utils/queries';

const Homepage = () => {
	// using the query hook to make a request
	const { loading, data } = useQuery(QUERY_CARDS);
	// checking if there's data to card (if not then store it in empty array)
	const initialCards = data?.cards || [];

	console.log(initialCards)

	const [isChecked, setIsChecked] = useState(false);
	const [cards, setCards] = useState(initialCards);


	function clearFilters(c) {
		setIsChecked(isChecked);
		console.log('setting to isChecked');
		if (!isChecked) {
			console.log('isChecked path');

			setCards(data?.cards);
		} else {
			setIsChecked(isChecked);
			setCards(data?.cards);
			console.log('nothing checked');
		}
	}

	function handleRank(rank) {
		console.log('this is rank', rank.target.value);
		setIsChecked(!isChecked);
		if (!isChecked) {
			console.log(rank.target.value);
			setCards(cards.filter((card) => card.rank === rank.target.value));
			console.log(cards);
		}
		if (isChecked) {
			setCards(initialCards);
			console.log('isChecked = false working');
		}
	}

	// function handlePlatform(platform) {
	// 	setIsChecked(!isChecked);
	// 	if (!isChecked) {
	// 		console.log('isChecked = true working');
	// 		setCards(cards.filter((card) => card.platform === platform.target.value));
	// 	}
	// 	if (isChecked) {
	// 		setCards(initialCards);
	// 		console.log('isChecked = false working');
	// 	}
	// }

	// function handleHours(hours) {
	// 	setIsChecked(!isChecked);
	// 	if (!isChecked) {
	// 		console.log('isChecked = true working');
	// 		setCards(cards.filter((card) => card.hours === hours.target.value));
	// 	}
	// 	if (isChecked) {
	// 		setCards(initialCards);
	// 		console.log('isChecked = false working');
	// 	}
	// }

	// function handleComms(comms) {
	// 	setIsChecked(!isChecked);
	// 	if (!isChecked) {
	// 		console.log('isChecked = true working');
	// 		setCards(cards.filter((card) => card.comms === comms.target.value));
	// 	}
	// 	if (isChecked) {
	// 		setCards(initialCards);
	// 		console.log('isChecked = false working');
	// 	}
	// }

	return (
		<main>
			<div name='user-list' className='flex flex-row justify-around'>
				<Filters
					title='Player List'
					handleRank={handleRank}
					// handleHours={handleHours}
					// handlePlatform={handlePlatform}
					// handleComms={handleComms}
					clearFilters={clearFilters}
					isChecked={isChecked}
					setIsChecked={setIsChecked}
				/>
			</div>

			<div>
				{loading ? (
					<div>Loading...</div>
				) : (
					<UserCard
						cards={cards}
						title="Don't be discouraged to make the first card"
					/>
				)}
			</div>
		</main>
	);
};

export default Homepage;
