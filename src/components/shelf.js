import React, { useEffect } from "react";
import Book from "./book";

const Shelf = ({category,title})=>{
   
   useEffect(()=>{},[category])
    return (
        <>
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {category.map(b=><Book key={b.id} book={b}/>)}                 
                  </ol>
                </div>
              </div>
        </>
    )
}
export default Shelf;
