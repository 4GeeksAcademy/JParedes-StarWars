import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-dark px-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png" width="150" height="120"/></span>
			</Link>
			<div className="ml-auto">
			
			<div className="dropdown border border-white rounded">
			<button className="btn btn-dark dropdown-toggle text-warning" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
   			 Favorites <span className="badge bg-warning">{store.favorites.length}</span>
  			</button> 
  			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{(store.favorites && store.favorites.length > 0 && store.favorites.map((i,item)=>(
					<li key ={item} className="d-flex"><a className="dropdown-item px-0">{i.name}</a> <i className="fas fa-trash me-3 pt-2" onClick={()=>actions.deleteFavorites(i.name)}></i></li>
				)))}
				
  			</ul>
			</div>
			</div>
		</nav>
	);
};
