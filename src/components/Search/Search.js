import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import "./Search.css";


const Search = () => {
   return(
      <section>
         <div className="container">
            <form method="post" className="search__form">
               <Input />
               <Select />
            </form>
         </div>
      </section>
   );
};

export default Search