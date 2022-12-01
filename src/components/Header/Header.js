import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = ({btnTheme, setBtnTheme}) => {
   const [t, i18n] = useTranslation()

   return(
      <div className = {btnTheme ? 'dark' : 'header'}>
         <div className ="container">
            <div className="header__content">
               <h1 className="header__title">{t('header.logo')}</h1>
               <div>
                 <button onClick={() => {setBtnTheme(!btnTheme)}} className="header__mode">{btnTheme ? t('header.dark') : t('header.light')}</button>
                 <select onChange={(e) => {i18n.changeLanguage(e.target.value);}} className="lang-sel">
                    <option value='en'>Eng</option>
                    <option value='uz'>Uzb</option>
                 </select>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;