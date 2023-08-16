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
			starships : [],
			starshipById: {},
			favorites:[],
			pagina : 1,
			planetPagina : 1,
			starshipPagina : 1,
			itemPerPage : 10,
			totalPeoples : 0,
			totalPlanets : 0,
			totalStarships: 0
		},
		actions: {
			
			getStarshipPagina : (numPage) =>{
				
				setStore({starshipPagina:numPage})
				
			},

			getPagina : (numPage) =>{
				
				setStore({pagina:numPage})
				
			},

			getPlanetPagina : (numPage) =>{
				
				setStore({planetPagina:numPage})
				
			},

			// Cargar la lista de personajes
			getPeople : async(page=1 ,limit = 10)=>{
				const peopleUrl = `https://www.swapi.tech/api/people/?page=${page}&limit=${limit}`
				var peoples =[]
				var totalPeoples = 1
				try {
					
					const response = await fetch(peopleUrl);
					// Verificar si la respuesta está en el rango de 200-299 (éxito)
					if (!response.ok) {
					  throw new Error('La solicitud no fue exitosa');
					}
				
					// Analizar la respuesta como JSON y devolver los datos
					const data = await response.json()
					 totalPeoples= data.total_records
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
					setStore({totalPeoples}) 
					}
				},

			getPlanets: async(page= 1 ,limit = 10)=>{
				const planetsUrl = `https://www.swapi.tech/api/planets/?page=${page}&limit=${limit}`
				var planets = []
				var totalPlanets = 0
				try {

					const response= await fetch(planetsUrl);
					if(!response.ok){
						throw new Error('La solicitud no fue exitosa');
					}
					const data = await response.json()
					planets = data.results
					totalPlanets = data.total_records
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
					setStore({totalPlanets}) 
			}
			},

			getStarships: async(page= 1 ,limit = 10)=>{
				const starshipsUrl = `https://www.swapi.tech/api/starships/?page=${page}&limit=${limit}`
				var starships = []
				var totalStarships = 0
				try {

					const response= await fetch(starshipsUrl);
					if(!response.ok){
						throw new Error('La solicitud no fue exitosa');
					}
					const data = await response.json()
					starships = data.results
					totalStarships = data.total_records
				}catch(error){
					console.error('Error al obtener los datos:', error.message);
					throw error;
				}

				//cargar los resultados de cada planeta
				starships = starships.map(starship=>fetch(starship.url))
				let respuestas = await Promise.all(starships)
				if(respuestas.every(respuesta=>respuesta.ok)){
					console.log("todas las respuestas correctas ok")
					respuestas = respuestas.map(respuesta => respuesta.json())
					let data = await Promise.all(respuestas)
					data = data.map(starship=>{
						let {description,uid,_id,properties} = starship.result
						return {description,
							uid,
							_id,
							img : `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`
							,...properties}
					})
					setStore({starships:data})
					setStore({totalStarships}) 
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

			getStarshipById: async(id)=>{
				var starshipById ={}
				try {
					
					const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
					// Verificar si la respuesta está en el rango de 200-299 (éxito)
					if (!response.ok) {
					  throw new Error('La solicitud no fue exitosa');
					}
				
					// Analizar la respuesta como JSON y devolver los datos
					const data = await response.json()
					starshipById = data.result
					setStore({starshipById})
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
					const actions = getActions()
					actions.deleteFavorites(item.name)
				}else{
					setStore({
                        favorites: [...store.favorites, item]
                    })
				}
			},
			
			deleteFavorites : (nombre) =>{
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
