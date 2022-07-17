import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMutation } from '@apollo/client';
import Header from '../components/Header';
import { Link } from "react-router-dom";

const Explore = () => {
  
return( 
  <>
  <Header />
  <div>
  <h1>Explore Your curiosity</h1>
  </div>

  
  </>
)
};

      <Link to=""></Link> 





export default Explore;

// this is from the book modules
// const searchArts = () => {
//   const [searchedArts, setSearchedArts] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
  
  



//     try {
//       const allMuseumResponse = await fetch(
//         `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings&q=${searchInput}`
//     );
//     const museumData = await allMuseumResponse.json();
//     const museumArray = museumData.objectIDs;

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const { items } = await response.json();

//       const artData = items.map((book) => ({
//         bookId: book.id,
//         authors: book.volumeInfo.authors || ['No author to display'],
//         title: book.volumeInfo.title,
//         description: book.volumeInfo.description,
//         image: book.volumeInfo.imageLinks?.thumbnail || '',
//       }));

//       setSearchedart(artData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

  
//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Search for Art!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name='searchInput'
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type='text'
//                   size='lg'
//                   placeholder='Search for a Art'
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type='submit' variant='success' size='lg'>
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>

//       <Container>
//         <h2>
//           {searchedArts.length
//             ? `Viewing ${searchedArts.length} results:`
//             : 'Search for a book to begin'}
//         </h2>
//         <CardColumns>
//           {searchedArts.map((art) => {
//             return (
//               <Card key={art.bookId} border='dark'>
//                 {art.image ? (
//                   <Card.Img src={art.image} alt={`The cover for ${art.title}`} variant='top' />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{art.title}</Card.Title>
//                   <p className='small'>Artist: {art.authors}</p>
//                   <Card.Text>{art.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedArtIds?.some((savedArtId) => savedArtId === art.artId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSaveArt(art.bookId)}>
//                       {savedArtIds?.some((savedBookId) => savedBookId === art.bookId)
//                         ? 'This book has already been saved!'
//                         : 'Save this Book!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

