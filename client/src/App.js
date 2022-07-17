
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import './App.css';

    import {
      ApolloClient,
      InMemoryCache,
      ApolloProvider,
      createHttpLink,
    } from '@apollo/client';
    import { setContext } from '@apollo/client/link/context';
    
    import Home from './pages/Home';
   import Login from './pages/Login';
    import Signup from './pages/Signup';
    
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
      <>
        
        
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
              
            
            
            </Routes>
        
      </>
    </Router>
        </ApolloProvider>
      );
    }
    
    export default App;
    