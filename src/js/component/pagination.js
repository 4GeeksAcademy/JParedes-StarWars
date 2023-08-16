import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Pagination = () =>{ 
  const { store, actions } = useContext(Context);
   const pageNumbers = []
   for (let i = 1 ; i <= Math.ceil(store.totalPeoples/store.itemPerPage); i++ ){
    pageNumbers.push(i)
   }

    const onPage = (page) => {
    actions.getPagina(page)
   }

   const onPreviusPage = (page) => {
    actions.getPagina(page-1)
   }

   const onNextPage = (page) => {
    actions.getPagina(page+1)
   }
    
  return (
	<div >
    <nav className="bg-dark" aria-label="Page navigation example">
  <ul className="pagination">
    <li className={`page-item ${store.pagina === 1 ? "disabled":""}`}><a className="page-link bg-dark text-warning" onClick={()=> onPreviusPage(store.pagina)}>Previous</a></li>
    {
      pageNumbers.map(page =>(
      <li key ={page} className={`page-item ${page === store.pagina ? "active":""}`}>
        <a onClick={()=> onPage(page)} className={`page-link  ${page === store.pagina ? "bg-warning text-white":"bg-dark text-warning"}`} >{page}</a></li>
      ))
    }
    <li className={`page-item ${store.pagina >= pageNumbers.length  ? "disabled":""}`}><a className="page-link bg-dark text-warning" onClick={()=> onNextPage(store.pagina)}>Next</a></li>
  </ul>
</nav>
  
</div>
);
}
