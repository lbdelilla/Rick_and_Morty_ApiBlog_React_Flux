import React from "react";
import "../../styles/navbar.css"

export const Navigation = () =>{
    return (
        <nav aria-label="Page navigation">
             <ul className="pagination  justify-content-center">
                <li className="page-item"><a className="page-link bg-dark" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link bg-dark" href="#">Next</a></li>
            </ul>
        </nav>
    )
}