const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			selectCharacter: [],
			characters: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// getCharacter: (character) => { setStore({ selectCharacter: character, }); },
			getCharacters: async () => {
              
                    const response = await fetch(`https://rickandmortyapi.com/api/character`, {
                        method: "GET",
                    
                    });
                    const responseJSON = await response.json();

                    setStore({ characters: responseJSON.results });

            },
		}
	};
};

export default getState;
