import React, {useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Card} from "../component/card.js"
import {Pagination} from "../component/pagination.js"
import {PlanetPagin} from "../component/planetPagin.js"
import {CardPlanet} from "../component/cardPlanet.js"
import {CardStarship} from "../component/cardStarship.js"
import {StarshipPagina} from "../component/starshipPagina.js"

export const Home = () =>{
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
    actions.getPeople(store.pagina);
  }, [store.pagina]);
  
  useEffect(() => {
    actions.getPlanets(store.planetPagina);
  }, [store.planetPagina]);

  useEffect(() => {
    actions.getStarships(store.starshipPagina);
  }, [store.starshipPagina]);

 return (
	
	<div className="bg-dark container-fluid">
		<h2 className="text-warning pt-3"><b>Characters</b></h2>
		<Pagination/>
	 	<div className="d-flex gap-3 overflow-scroll">
		{store.peoples && store.peoples.length > 0 && store.peoples.map((people)=>(
		<Card datos = {people}  key={people.uid} />
	))}
		</div>

		<h2 className="text-warning my-3"><b>Planets</b></h2>
		<PlanetPagin/>
	 	<div className="d-flex gap-3 overflow-scroll">
		{store.planets && store.planets.length > 0 && store.planets.map((planet)=>(
		<CardPlanet datos = {planet} key={planet.uid} />
	))}
		</div>

		<h2 className="text-warning my-3"><b>Starships</b></h2>
		<StarshipPagina/>
	 	<div className="d-flex gap-3 overflow-scroll">
		{store.starships && store.starships.length > 0 && store.starships.map((starship)=>(
		<CardStarship datos = {starship}  key={starship.uid}/>
	))}
		</div>
	
	</div>
)
 }

 
