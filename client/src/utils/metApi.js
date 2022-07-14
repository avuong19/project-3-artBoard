export const searchArt = (query) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
  };

  export const getSingleArt = (query) =>{
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${query}`);
  }