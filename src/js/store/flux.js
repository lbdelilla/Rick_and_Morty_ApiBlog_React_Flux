const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			selectCharacter: [],
			characters: [],
			favorites: [],
			//characterInfo:{}
		},
		actions: {
			// Use getActions to call a function within a fuction

			//getCharacter: (character) => {setStore({selectCharacter: character,});},
			getCharacters: async () => {
              
                    const response = await fetch(`https://rickandmortyapi.com/api/character`, {
                        method: "GET",
                    
                    });
                    const data = await response.json();

                    setStore({ characters: data.results });

            },
		}
	};
};

export default getState;
