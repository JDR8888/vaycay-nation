import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import SearchByParkName from './pages/SearchByParkName';
import Signup from './pages/Signup';
import Navbar from './components/Nav';
import Footer from './components/Footer';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/SearchByName" element={<SearchByParkName />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
