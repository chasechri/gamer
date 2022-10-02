// import logo from "./logo.svg";
import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';



  

import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

const httpLink = createHttpLink({
	uri: 'http://localhost:3002/graphql',
  });
  
  const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
  });


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
		<ApolloProvider client={client}>
			
		<div>
			<Header />
			<div>
			<Homepage />
			</div>
			<Footer />
		</div>
		</ApolloProvider>
 );
}

export default App;
