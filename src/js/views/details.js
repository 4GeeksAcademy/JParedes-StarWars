import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
	
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	
	useEffect(()=>{
		actions.getPeopleById(id)
	},[])
	

	return (
	<div >
	{(store.peopleById && store.peopleById.properties) ?
	 <div>
		<div className="d-flex">
		<div className="col-6">
		<img src={`https://starwars-visualguide.com/assets/img/characters/${store.peopleById.uid}.jpg`}/>
		</div>
		<div className="col-6 px-4 pt-4">
			<h1 className="text-center">{store.peopleById.properties.name}</h1> 
		<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur</p>
		</div>
	 </div>
	 <hr />
	 <div className="d-flex justify-content-around" style ={{height:100}}>
	 	<div>
		<p>Name</p>
		<span>{store.peopleById.properties.name}</span>
		</div>
		<div className="vr"></div>
		<div>
		<p>Birth Year</p>
		<span>{store.peopleById.properties.birth_year}</span>
		</div>
		<div className="vr"></div>
		<div>
		<p>Gender</p>
		<span>{store.peopleById.properties.gender}</span>
		</div>
		<div className="vr"></div>
		<div>
		<p>Height</p>
		<span>{store.peopleById.properties.height}</span>
		</div>
		<div className="vr"></div>
		<div>
		<p>Skin Color</p>
		<span>{store.peopleById.properties.skin_color}</span>
		</div>
		<div className="vr"></div>
		<div>
		<p>Eye Color</p>
		<span>{store.peopleById.properties.eye_color}</span>
		</div>
	 </div></div>:""}
	</div>	
	);
};






 
