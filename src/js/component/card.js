import React ,{ useContext }from "react";
import "../../styles/home.css";
import {Link,useParams} from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) =>{ 
    const { store, actions } = useContext(Context);
  const {name,img, gender, hair_color, eye_color,uid} = props.datos

 
  return (
	<div className="card col-3">
  <img  src={img} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Gender : {gender}</p>
    <p className="card-text">Hair Color : {hair_color}</p>
    <p className="card-text">Eye Color : {eye_color}</p>
    <div className="d-flex">
    <Link to ={`/characters/${uid}`}>
    <button className="btn btn-primary">Learn more!</button>
    </Link>
	<a href="#" className="btn btn-primary" onClick={()=>actions.getfavorites({name})}><i className="far fa-heart"></i></a>
   </div>
  </div>
</div>
);
}
