// import logo from "./logo.svg";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
	uri: '/graphql',
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
      <Router>
	  
        <div className="filter">
		<Header />
          <div className="path">
            <Routes>
              <Route
                path="/"
                element={<Homepage />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
              <Route
              path="*"
              element={<NoMatch />}
                />
            </Routes>
          </div>
         
        </div>
		<Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
