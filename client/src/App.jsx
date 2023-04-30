import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import './App.css';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import Signup from './pages/Signup';
import Navbar from './components/Nav';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/searchResults' element={ <SearchResults /> } />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
