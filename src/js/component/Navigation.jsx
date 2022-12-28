import React, { useState, useEffect, useContext } from "react";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export function Navigation() {
  
  const initURL = `https://rickandmortyapi.com/api/character/`;
  const [info, setInfo] = useState({});

  const anotherFetch = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data.info));
  };

  const handlePrevious = () => {
    anotherFetch(info.prev);
  };

  const handleNext = () => {
    anotherFetch(info.next);
  };

  useEffect(() => {
    anotherFetch(initURL);
  }, []);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination  justify-content-center">
        {info.prev != null ? (
        <li className="page-item">
          <a className="page-link bg-dark" onClick={()=>handlePrevious()}>Previous</a>
        </li>
         ) : null} 
        {info.next != null ? ( 
        <li className="page-item">
          <a className="page-link bg-dark"onClick={()=>handleNext()}>Next</a>
        </li>
        ) : null} 
      </ul>
    </nav>
  );
}
