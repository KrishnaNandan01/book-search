import "../Style/style.css"
import search from "./images/search_icon.png"
import Book from "./books"
import { useState,useContext } from "react"
import BookContext from "./ContextApi/createContext";
const SearchBar = ()=>{
    //const [temp, setTemp] = useState("");
   const{setValue} = useContext(BookContext);
    // const SearchHandle = ()=>{
    //    setValue(temp);
    // }
    return(<>
    <h1 className="book-search">Book Search</h1>
    <div className="search-input">
            <input id="input" placeholder="search for a book" onChange={(e)=>{ setValue(e.target.value)}}></input>
            <button ><img id="img" src={search} alt="search"/></button>
    </div>
    <div className="book-div">
        <Book/>
    </div>
    </>)
}
export default SearchBar;