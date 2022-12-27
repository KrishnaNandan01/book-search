import { useContext, useState } from "react";
//import book from "./images/book.png"
import BookContext from "./ContextApi/createContext";
//const arr = [book,book,book,book,book,book,book,book,book]
const Book =()=>{
    const [searchVal, setSearchVal] = useState([]);
    const {books,value} = useContext(BookContext);
    for(let i=0; i<books.length;i++){
        if(books[i].title==value){
            searchVal.push( books[i]);
        }
        //const temp = books[i].title;
        
    }
    //console.log(books);
    //console.log(value);
    return(<>
    {searchVal.length?<img id="book-img" src={searchVal[0]. cover_image} alt="book" />:
    books.map((item)=>{
        return(<img id="book-img" value={item.title} src={item. cover_image} alt="book" />)
    })}
    </>)
};
export default Book;