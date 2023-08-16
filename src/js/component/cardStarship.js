import React ,{ useContext } from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";

export const CardStarship = (props) =>{ 

  const { store, actions } = useContext(Context);
  const {name,img,model,passengers,uid} = props.datos
  const nombres = store.favorites.map((elemento)=>elemento.name)

function errorImage(e){
e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
}

  return (
  
	<div  className="card col-3 mb-3 bg-secondary text-white">
   <img src={img} onError={errorImage} className="card-img-top" style ={{maxHeight:"230px"}}/>
  <div className="card-body  pb-0 mb-2">
    <h5 className="card-title"><b>{name}</b></h5>
    <p className="card-text">Model : {model}</p>
    <p className="card-text">Passengers : {passengers}</p>
    </div>
    <div className="d-flex justify-content-between bg-secondary pb-4">
    <Link to ={`/starships/${uid}`}>
    <button className="btn btn-light mx-3">Learn more!</button>
    </Link>
	<a  className="btn btn-light mx-3" onClick={()=>actions.getfavorites({name})}><i className={`fas fa-heart ${nombres.includes(name)? "like":""}`}></i></a>
  </div>
</div>
);
}

