import React, { useRef, useState } from "react";
import {Link} from "react-router-dom"
import{search} from "../BooksAPI"
import Book from "./book";
const Search =({books})=>{
  const [result , setResult]=useState(null);
  const query = useRef("");

     function findBook (value){
    try{

      setTimeout(async()=>{

        const q= query.current.value.trim();
        if(q !== ""){
        await search(q,20).then(data=>{
          if(!data.error){
          const res=data.filter(d=>d.imageLinks&&d.authors)
          const boks= res.map(b=>{
            const existBook = books.filter(B=>B.id === b.id)[0];
            b.shelf = existBook?existBook.shelf:"none";
            return b
          })
          setResult(boks)
        }
        else{setResult(null)}
        }) 
        }else if(q===""){setResult(null)}
      
      },1000)
    }catch(err){
      console.log(err);
      setResult(null)
    }
  }
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              ref={query}
              placeholder="Search by title, author, or ISBN"
              onChange={()=>findBook()}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {result&&result.map(b=><Book key={b.id} book={b}/>)}
          </ol>
        </div>
      </div>
    )
}
export default Search;
