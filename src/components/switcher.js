import React, { useContext } from "react";
import Context from "./Context";
const Switcher =({book})=>{
const {update} = useContext(Context);
const [updateBook]=update;
    return(
        <>
         <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={event=>updateBook(book,event.target.value)}>
                              <option value="none" disabled={true}>
                                Move to...
                              </option>
                              
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead" >Want to Read</option>
                              <option value="read" >Read</option>
                              <option value="none" >None</option>
                            </select>
                          </div>
        </>
    )
}
export default Switcher;
