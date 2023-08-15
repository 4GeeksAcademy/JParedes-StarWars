import React from "react";
import "../../styles/home.css";
import {Link,useParams} from "react-router-dom";

export const CardPlanet = (props) =>{ 
    
  const {name,img,population,terrain,uid} = props.datos

function errorImage(e){
e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
}

  return (
  
	<div  className="card col-3 ">
   <img src={img} onError={errorImage} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Population : {population}</p>
    <p className="card-text">Terrain : {terrain}</p>
    <div className="d-flex">
    <Link to ={`/planets/${uid}`}>
    <button className="btn btn-primary">Learn more!</button>
    </Link>
	<a href="#" className="btn btn-primary"><i className="far fa-heart"></i></a>
   </div>
  </div>
</div>
);
}
