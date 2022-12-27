
import SearchBar from "./searchBar";
import BookContextDeatails from "./ContextApi/contextProvider";


function App() {
  return (
    <BookContextDeatails>
        <SearchBar/>
    </BookContextDeatails>

    // <>
    //    <SearchBar/>
    // </>
    
   
  );
}

export default App;
