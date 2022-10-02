// import logo from "./logo.svg";
import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'

// const [players, setPlayers] = useState([
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
// ])

// function handleRank() {
// 	setPlayers(players.filter((player) => player.rank === filter)
	
// }

// function handlePlatform() {
// 	setPlayers(players.filter((player) => player.platform === filter)	
// }

// function handleHours() {
// 	setPlayers(players.filter((player) => player.hours === filter)
// }

// function handleComms() {
// 	setPlayers(players.filter((player) => player.comms === filter)
// }
function App() {
	return (
		<div>
			<Header />
			<Homepage />
			<Footer />
		</div>
	)
}

export default App
