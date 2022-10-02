// import logo from "./logo.svg";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


  

import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

const httpLink = createHttpLink({
	uri: 'http://localhost:3001/graphql',
  });
  
  const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
  });

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
