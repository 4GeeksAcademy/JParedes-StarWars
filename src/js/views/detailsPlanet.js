import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanet = (props) => {
	
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	
	useEffect(()=>{
		actions.getPlanetById(id)
	},[])

	function errorImage(e){
		e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
		}
		

	return (
	<div >
	{(store.planetById && store.planetById.properties) ?
	 <div className="bg-dark text-white">
		<div className="row d-flex">
		<div className=" d-flex justify-content-center col-6"  >
		<img  onError={errorImage} className="w-100" src={`https://starwars-visualguide.com/assets/img/planets/${store.planetById.uid}.jpg`}/>
		</div>
		<div className="col-6 pb-3">
			<h1 className="pb-3">{store.planetById.properties.name}</h1> 
		<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>
		<hr/>
		<div>
	 	<div>
		<p className="text-warning">Name</p>
		<span>{store.planetById.properties.name}</span>
		</div>
		<hr/>
		<div>
		<p className="text-warning">Climate</p>
		<span>{store.planetById.properties.climate}</span>
		</div>
		<hr/>
		<div>
		<p className="text-warning">Population</p>
		<span>{store.planetById.properties.population}</span>
		</div>
		<hr/>
		<div>
		<p className="text-warning">Orbital Period</p>
		<span>{store.planetById.properties.orbital_period}</span>
		</div>
		<hr/>
		<div>
		<p className="text-warning">Rotation Period</p>
		<span>{store.planetById.properties.rotation_period}</span>
		</div>
		<hr/>
		<div>
		<p className="text-warning">Diameter</p>
		<span>{store.planetById.properties.diameter}</span>
		</div>
	 </div>
		</div>
	 </div>
	 </div>:""}
	</div>	
	);
};






 
