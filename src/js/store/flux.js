const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			peoples:[],
			peopleById: {},
			planets:[],
			planetById: {},
			favorites:[]
		},
		actions: {
			// Cargar la lista de personajes
			getPeople : async()=>{
				var peoples =[]
				try {
					
					const response = await fetch("https://www.swapi.tech/api/people");
					// Verificar si la respuesta está en el rango de 200-299 (éxito)
					if (!response.ok) {
					  throw new Error('La solicitud no fue exitosa');
					}
				
					// Analizar la respuesta como JSON y devolver los datos
					const data = await response.json()
					peoples = data.results
					} catch (error) {
					// Manejar errores
					console.error('Error al obtener los datos:', error.message);
					throw error;
				  }

				// Cargar los detalles de cada personaje
					peoples = peoples.map(people=>fetch(people.url))
					let respuestas = await Promise.all(peoples) 
					if(respuestas.every(respuesta=>respuesta.ok)){
					console.log("todas las respuestas correctas ok")
					respuestas = respuestas.map(respuesta => respuesta.json())
					let data = await Promise.all(respuestas)
					data = data.map(people=>{
						let {description,uid,_id,properties} = people.result
						return {description,
							uid,
							_id,
							img : `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`
							,...properties}
					})
					setStore({peoples:data}) 
					}
				},

			getPlanets: async()=>{
				var planets = []
				try {

					const response= await fetch("https://www.swapi.tech/api/planets");
					if(!response.ok){
						throw new Error('La solicitud no fue exitosa');
					}
					const data = await response.json()
					planets = data.results
				}catch(error){
					console.error('Error al obtener los datos:', error.message);
					throw error;
				}

				//cargar los resultados de cada planeta
				planets = planets.map(planet=>fetch(planet.url))
				let respuestas = await Promise.all(planets)
				if(respuestas.every(respuesta=>respuesta.ok)){
					console.log("todas las respuestas correctas ok")
					respuestas = respuestas.map(respuesta => respuesta.json())
					let data = await Promise.all(respuestas)
					data = data.map(planet=>{
						let {description,uid,_id,properties} = planet.result
						return {description,
							uid,
							_id,
							img : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
							,...properties}
					})
					setStore({planets:data}) 
			}
				
			},

			getPeopleById: async(id)=>{
				var peopleById ={}
				try {
					
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					// Verificar si la respuesta está en el rango de 200-299 (éxito)
					if (!response.ok) {
					  throw new Error('La solicitud no fue exitosa');
					}
				
					// Analizar la respuesta como JSON y devolver los datos
					const data = await response.json()
					peopleById = data.result
					console.log(peopleById)
					setStore({peopleById})
					} catch (error) {
					// Manejar errores
					console.error('Error al obtener los datos:', error.message);
					throw error;
				  }
			},

			getPlanetById: async(id)=>{
				var planetById ={}
				try {
					
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					// Verificar si la respuesta está en el rango de 200-299 (éxito)
					if (!response.ok) {
					  throw new Error('La solicitud no fue exitosa');
					}
				
					// Analizar la respuesta como JSON y devolver los datos
					const data = await response.json()
					planetById = data.result
					setStore({planetById})
					} catch (error) {
					// Manejar errores
					console.error('Error al obtener los datos:', error.message);
					throw error;
				  }
			},

			getfavorites: (item)=>{
				const store = getStore();
				const nombres = store.favorites.map((elemento)=>elemento.name)
				
				if(nombres.includes(item.name)){
					console.log(item)
					const actions = getActions()
					actions.deleteFavorites(item.name)
				}else{
					setStore({
                        favorites: [...store.favorites, item]
                    })
                    console.log(store.favorites)
				}
			},
			// getfavorites: (favorite)=>{
			// 	const favorites = getStore().favorites
			// 	favorites.push(favorite)
			// 	setStore({favorites})
			// 	console.log(favorites)
			// },
			
			// deleteFavorites : (nombre) =>{
			// 	console.log(nombre);
			// 	const favorites = getStore().favorites
			// 	favorites.filter(name => name.nombre !== nombre )
			// 	setStore({favorites})
			// 	console.log(favorites)
			// },
			deleteFavorites : (nombre) =>{
				console.log(nombre);
				const store = getStore();
				const fav = store.favorites;
				const favoriteActualizado = fav.filter((item) => item.name !== nombre )
				setStore({favorites:favoriteActualizado})
				
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
