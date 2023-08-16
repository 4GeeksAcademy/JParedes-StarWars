import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const PlanetPagin = () =>{ 
  const { store, actions } = useContext(Context);
   const pageNumbers = []
   for (let i = 1 ; i <= Math.ceil(store.totalPlanets/store.itemPerPage); i++ ){
    pageNumbers.push(i)
   }

    const onPage = (page) => {
    actions.getPlanetPagina(page)
   }

   const onPreviusPage = (page) => {
    actions.getPlanetPagina(page-1)
   }

   const onNextPage = (page) => {
    actions.getPlanetPagina(page+1)
   }
    
  return (
	<div >
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className={`page-item ${store.planetPagina === 1 ? "disabled":""}`}><a className="page-link bg-dark text-warning" onClick={()=> onPreviusPage(store.planetPagina)}>Previous</a></li>
    {
      pageNumbers.map(page =>(
      <li key ={page} className={`page-item ${page === store.planetPagina ? "active":""}`}>
        <a onClick={()=> onPage(page)} className= {`page-link  ${page === store.planetPagina ? "bg-warning text-white":"bg-dark text-warning"}`} >{page}</a></li>
      ))
    }
    <li className={`page-item ${store.planetPagina >= pageNumbers.length  ? "disabled":""}`}><a className="page-link bg-dark text-warning" onClick={()=> onNextPage(store.planetPagina)}>Next</a></li>
  </ul>
</nav>
  
</div>
);
}
