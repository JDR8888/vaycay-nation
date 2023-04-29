import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import './App.css';
import axios from 'axios';
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


axios.get('https://developer.nps.gov/api/v1/parks?stateCode=AK&api_key=TRwtUPRfynEen7iIp3GN9eZAgjkJ0MVIQOC7dmly')
  .then(response => {
    // handle success
    console.log(response.data);
  })
  .catch(error => {
    // handle error
    console.log(error);
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

        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
