import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { Flag } from "./page/Flag/Flag";
import { Error } from "./page/Error/Error";
import { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from "./lang/Lang";
import { AnimatePresence } from "framer-motion";

function App() {
  const [btnTheme, setBtnTheme] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = btnTheme ? "#333" : "#fff";
  }, [btnTheme]);

  i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: Lang.en },
      uz: { translation: Lang.uz },
    },
  });



  return (
    <>
      <Header btnTheme={btnTheme} setBtnTheme={setBtnTheme} />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home btnTheme={btnTheme} />} />
          <Route path="/flag/:name" element={<Flag btnTheme={btnTheme} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
