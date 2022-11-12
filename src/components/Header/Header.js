import "./Header.css";
import Mode from "../../assets/images/mode.icon.svg"

const Header = () => {
   return(
      <div className = "header">
         <div className ="container">
            <div className="header__content">
               <h1 className="header__title">Where in the world?</h1>
               <div className="mode-box">
                  <img src={Mode} alt="mode" width={20} height={20}/>
                  <span className="header__mode">Dark Mode</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;