import React, { useContext } from "react";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export function Navigation() {
  const { store, actions } = useContext(Context);

  const anotherFetch = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => actions.setCharacters(data));

  };

  const handlePrevious = () => {
    anotherFetch(store.prev);
  };

  const handleNext = () => {
    anotherFetch(store.next);
  };

 
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination  justify-content-center">
        {store.prev != null ? (
        <li className="page-item">
          <a className="page-link bg-dark" onClick={()=>handlePrevious()}>Previous</a>
        </li>
         ) : null} 
        {store.next != null ? ( 
        <li className="page-item">
          <a className="page-link bg-dark"onClick={()=>handleNext()}>Next</a>
        </li>
        ) : null} 
      </ul>
    </nav>
  );
}
