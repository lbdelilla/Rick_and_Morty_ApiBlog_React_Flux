const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      favorites: [],
      info: {},
	  
    },
    actions: {
      getCharacters: async () => {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character`,
          {
            method: "GET",
          }
        );
        const data = await response.json();

        setStore({ characters: data.results, info: data.info });
      },

    },
  };
};

export default getState;
