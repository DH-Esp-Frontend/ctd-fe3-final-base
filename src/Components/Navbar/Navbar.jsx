import { useActionData, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/login-context";
import { func } from "prop-types";
import ThemeContext, { themes } from '../../contexts/theme-context';

const Navbar = () => {

  const navigate = useNavigate();
  const {username, removeUserStorage} = useContext(LoginContext);
  const token = localStorage.getItem("@times_token");

  const {theme, handleChangeTheme} = useContext(ThemeContext);


  useEffect(() => {

    if (!token){
      navigate("/home");
    }
  }, [])

  function logout(){
    removeUserStorage();
    navigate("/home");
  }


  function loginButton(){
/*     if(!token){ */
      navigate("/login")
/*     } else{
      logout()
    } */
  }

  function homeButton(){
    navigate("/home")
  }

  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm ${theme === themes.dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <a className={`navbar-brand ${styles.navbarBrand}`} onClick={homeButton}>
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <a className="nav-link" onClick={homeButton}>
                  Home
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}

                <a  className={`nav-link ${theme === themes.dark ? 'btn-dark' : 'btn-light'}`} id="loginButton" onClick={loginButton}>
                Login
                </a>

              </li>
              <li className={`nav-item`}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button onClick={handleChangeTheme} className={`btn ${styles.btnStyle} ${theme === themes.dark ? 'btn-dark' : 'btn-light'}`}>
                  <text>{theme === themes.dark ? "☀" : "🌙"}</text>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
