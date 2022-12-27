import { useEffect, useState } from "react";
import BookContext from "./createContext"
const BookContextDeatails = (props)=>{
    const [books,setBooks] = useState([]);
    const [value,setValue] = useState("");
    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books").then((res)=>{
            return res.json();
          }).then((data)=>{
              setBooks(data);
          });

    },[]);
   
    return(<BookContext.Provider value={{books,setBooks,value,setValue}}>
        {props.children}
    </BookContext.Provider>)
};

export default BookContextDeatails;