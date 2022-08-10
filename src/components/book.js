import React from "react";
import Switcher from "./switcher";
const Book = ({book})=>{
return(
    <>
    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover" 
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${book.imageLinks.thumbnail})`,
                            }}
                          ></div>
                         <Switcher book={book}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors.join(" / ")}</div>
                      </div>
                    </li>
    </>
)
}
export default Book;