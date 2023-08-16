import React ,{ useContext } from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) =>{ 
    const { store, actions } = useContext(Context);
    const {name,img, gender, hair_color, eye_color,uid} = props.datos
    const nombres = store.favorites.map((elemento)=>elemento.name)
			

  return (
	<div className="card col-3">
  <img  src={img} className="card-img-top " />
  <div className="card-body bg-secondary text-white">
    <h5 className="card-title"><b>{name}</b></h5>
    <p className="card-text">Gender : {gender}</p>
    <p className="card-text">Hair Color : {hair_color}</p>
    <p className="card-text">Eye Color : {eye_color}</p>
    <div className="d-flex justify-content-between">
    <Link to ={`/characters/${uid}`}>
    <button className="btn btn-light">Learn more!</button>
    </Link>
	<a className="btn btn-light" onClick={()=>actions.getfavorites({name})}><i className={`fas fa-heart ${nombres.includes(name)? "like":""}`} ></i></a>
   </div>
  </div>
</div>
);
}
