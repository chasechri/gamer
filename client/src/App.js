// import logo from "./logo.svg";
import React from 'react';

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <Header />
          <div className="">
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
                path="/profile"
                element={<Profile />}
              />
			   
				<Route
				 path="*"
				 element={<NoMatch />}
					/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
