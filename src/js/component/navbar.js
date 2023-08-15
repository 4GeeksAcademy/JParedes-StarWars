import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/star-wars-logo.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-secondary px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={starWars} width="80" height="80"/></span>
			</Link>
			<div className="ml-auto">
			
			<div className="dropdown">
			<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
   			 Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
  			</button> 
  			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{(store.favorites && store.favorites.length > 0 && store.favorites.map((i)=>(
					<li className="d-flex"><a className="dropdown-item" >{i.name}</a> <i className="fas fa-trash-alt" onClick={()=>actions.deleteFavorites(i.name)}></i></li>
				)))}
				
  			</ul>
			</div>
			</div>
		</nav>
	);
};
