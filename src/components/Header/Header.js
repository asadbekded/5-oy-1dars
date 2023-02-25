import "./Header.css";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

const titleVariant = {
   hidden: {
      x: '-100vw',
      opacity: 0
   },
   visible: {
      x: 0,
      opacity: 1,
      transition: {
         type: 'tween',
         stiffness: 120,
         duration: 0.5,
      }
   }
}

const modeVariant = {
   hidden: {
      x: '100vw',
      opacity: 0
   },
   visible: {
      x: 0,
      opacity: 1,
      transition: {
         type: 'tween',
         stiffness: 120,
         duration: 0.5,
      }
   }
}



const Header = ({btnTheme, setBtnTheme}) => {
   const [t, i18n] = useTranslation();

   return(
      <div className = {btnTheme ? 'dark' : 'header'}>
         <div className ="container">
            <div className="header__content">
               <motion.h1 variants={titleVariant} initial='hidden' animate='visible' className="header__title">{t('header.logo')}</motion.h1>
               <motion.div variants={modeVariant} initial='hidden' animate='visible'  >
                 <button onClick={() => {setBtnTheme(!btnTheme)}} className="header__mode">{btnTheme ? t('header.dark') : t('header.light')}</button>
                 <select onChange={(e) => {i18n.changeLanguage(e.target.value);}} className="lang-sel">
                    <option value='en'>Eng</option>
                    <option value='uz'>Uzb</option>
                 </select>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Header;