import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';  

import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import PlayerCard from './pages/PlayerCard';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


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
                element={<Home />}
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
                path="/card" 
                element={<PlayerCard />} 
              />
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