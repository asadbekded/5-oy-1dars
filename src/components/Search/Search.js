import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import "./Search.css"


const Search = () => {
   return(
      <section>
         <div className="container">
            <div className="search__content">
               <Input />
               <Select />
            </div>
         </div>
      </section>
   );
};

export default Search