import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
// import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


// axios.get('https://developer.nps.gov/api/v1/parks?stateCode=MN&api_key=TRwtUPRfynEen7iIp3GN9eZAgjkJ0MVIQOC7dmly')
//   .then(response => {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(error => {
//     // handle error
//     console.log(error);
//   });


function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
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
