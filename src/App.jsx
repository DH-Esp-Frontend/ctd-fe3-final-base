import React, { useState,useContext } from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Queries from "./Routes/Queries";
import LoginProvider from "./contexts/login-context";
import ThemeContext, { themes } from './contexts/theme-context';  
import Layout from "./Components/Layout/Layout"

function App() {


  const [theme, setTheme] = useState(themes.light);
  
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */
      }
      <ThemeContext.Provider value={{theme, handleChangeTheme}}>
      <Layout>
      <div className={`{app ${theme === themes.dark ? 'dark' : 'ligth'}}`}>
        <LoginProvider>
          <BrowserRouter>
            <Navbar />
            <main>
              {/*           <Outlet /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/queries" element={<Queries />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </LoginProvider>
      </div>
      </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
