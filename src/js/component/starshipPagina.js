import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const StarshipPagina = () =>{ 
  const { store, actions } = useContext(Context);
   const pageNumbers = []
   for (let i = 1 ; i <= Math.ceil(store.totalStarships/store.itemPerPage); i++ ){
    pageNumbers.push(i)
   }

    const onPage = (page) => {
    actions.getStarshipPagina(page)
   }

   const onPreviusPage = (page) => {
    actions.getStarshipPagina(page-1)
   }

   const onNextPage = (page) => {
    actions.getStarshipPagina(page+1)
   }
    
  return (
	<div >
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className={`page-item ${store.starshipPagina === 1 ? "disabled":""}`}><a className="page-link bg-dark text-warning" onClick={()=> onPreviusPage(store.starshipPagina)}>Previous</a></li>
    {
      pageNumbers.map(page =>(
      <li key ={page} className={`page-item ${page === store.starshipPagina ? "active":""}`}>
        <a onClick={()=> onPage(page)} className= {`page-link  ${page === store.starshipPagina ? "bg-warning text-white":"bg-dark text-warning"}`} >{page}</a></li>
      ))
    }
    <li className={`page-item ${store.starshipPagina >= pageNumbers.length  ? "disabled":""}`}><a className="page-link bg-dark text-warning" onClick={()=> onNextPage(store.starshipPagina)}>Next</a></li>
  </ul>
</nav>
  
</div>
);
}
