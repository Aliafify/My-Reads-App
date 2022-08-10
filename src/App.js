import "./App.css";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAll,update} from "./BooksAPI.js"
import Home from "./components/home";
import Context from "./components/Context";
import Search from "./components/Search";
function App() {
const [books ,setBooks] = useState([]); 
  const updateBook=(b,s)=>{
      update(b,s).then(()=>{getAll().then(data=>setBooks(data))})
      
    }
useEffect(()=>{
  getAll().then(data=>setBooks(data))
   
},[])

  return (
    <div className="app">
      <Context.Provider value={{update:[updateBook]}}>
    <Router>
      <Routes>
        <Route path = "/" element = {<Home books={books} updateBook={updateBook}/>}/>
        <Route path="/search" element={<Search books={books}/>}/>
      </Routes>
    </Router>
   
    </Context.Provider>
    </div>
  );
}

export default App;
