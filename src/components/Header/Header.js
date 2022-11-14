import "./Header.css";

const Header = () => {
   return(
      <div className = "header">
         <div className ="container">
            <div className="header__content">
               <h1 className="header__title">Where in the world?</h1>
               <span className="header__mode">Dark Mode</span>
            </div>
         </div>
      </div>
   );
};

export default Header;