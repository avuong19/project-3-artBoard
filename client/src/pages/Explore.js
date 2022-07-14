import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Auth from '../utils/auth';
// import { saveBook, searchGoogleBooks } from '../utils/API';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchArt = () => {
//   // create state for holding returned google api data
//   const [searchedBooks, setSearchedBooks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');

//   // create state to hold saved bookId values
//   const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

//   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   useEffect(() => {
//     return () => saveBookIds(savedBookIds);
//   });

//   // create method to search for books and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!searchInput) {
//       return false;
//     }

//     try {
//       const response = await searchGoogleBooks(searchInput);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const { items } = await response.json();

//       const bookData = items.map((book) => ({
//         bookId: book.id,
//         authors: book.volumeInfo.authors || ['No author to display'],
//         title: book.volumeInfo.title,
//         description: book.volumeInfo.description,
//         image: book.volumeInfo.imageLinks?.thumbnail || '',
//       }));

//       setSearchedBooks(bookData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // create function to handle saving a book to our database
//   const handleSaveBook = async (bookId) => {
//     // find the book in `searchedBooks` state by the matching id
//     const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const response = await saveBook(bookToSave, token);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       // if book successfully saves to user's account, save book id to state
//       setSavedBookIds([...savedBookIds, bookToSave.bookId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
const logout = event => {
  event.preventDefault();
  Auth.logout();
};

  return (
    <>
      <Header />
      <Link to="/dashboard"> DASHBOARD</Link> 
        <a href="/" onClick={logout}>
                LOGOUT
              </a>
          <h1>Search for Art</h1>
          <form onSubmit={handleFormSubmit}>
                <input
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a work of art'
                >
              </input>
                <button id='search' type='submit' variant='success' size='lg'>
                  Submit Search
                </button>
            </form>
        
    

        <h2>
          {searchedArts.length
            ? `Viewing ${searchedArt.length} results:`
            : 'Search for art to begin'}
        </h2>
          {searchedArt.map((art) => {
            return (
              <Card key={art.artId} border='dark'>
                {art.image ? (
                  <image src={art.image} alt={`The image of ${art.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{art.title}</Card.Title>
                  <p className='small'>Artists: {art.artists}</p>
                  <Card.Text>{art.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedArtIds?.some((savedArtId) => savedArtId === art.artId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveArt(art.artId)}>
                      {savedArtIds?.some((savedArtId) => savedArtId === art.artId)
                        ? 'This work of art has already been saved!'
                        : 'Save this work!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })};
  </>);
};

export default SearchArt;
