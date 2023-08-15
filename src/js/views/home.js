import React, {useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Card} from "../component/card.js"
import {CardPlanet} from "../component/cardPlanet.js"




export const Home = () =>{
	const { store, actions } = useContext(Context);

	useEffect(() => {
    actions.getPeople();
  }, []);
  
  useEffect(() => {
    actions.getPlanets();
  }, []);


  
 return (
	
	<div>
		<h2>Characters</h2>
	 	<div className="d-flex gap-3 overflow-scroll">
		{store.peoples && store.peoples.length > 0 && store.peoples.map((people)=>(
		<Card datos = {people} />
	))}
		</div>

		<h2>Planets</h2>
	 	<div className="d-flex gap-3 overflow-scroll">
		{store.planets && store.planets.length > 0 && store.planets.map((planet)=>(
		<CardPlanet datos = {planet} />
	))}
		</div>
	
	</div>
)
 }

 
