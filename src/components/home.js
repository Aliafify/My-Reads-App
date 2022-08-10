import React, { useEffect, useState } from "react";
import SearchButton from "./button";
import Shelf from "./shelf";
const Home = ({books,updateBook})=>{
    const[categories,setCat]=useState(null)
    const filterCategories=async ()=>{
        let read =[];
        let cutrrently =[];
        let wantTo =[];

      await  books.map(b=>{
            if(b.shelf==="read"){
                read.push(b);
            }
            else if(b.shelf==="currentlyReading"){
                cutrrently.push(b);
            }
            else if(b.shelf==="wantToRead"){
                wantTo.push(b);
            }
            let cat =  {read:read,cutrrently:cutrrently,wantTo:wantTo}
            setCat(cat)

        })
    }
    useEffect(()=>{
        filterCategories()
    },[books])

    return categories?(
        <>
        <div className="list-books">

         <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        <Shelf category ={categories.read} title={"Read"}/>
        <Shelf category={categories.cutrrently} title={"Currently Reading"}/>
        <Shelf category={categories.wantTo} title={"Want To Read"}/>
        <SearchButton/>
        </div>
        </>
    ):null
}
export default Home;
