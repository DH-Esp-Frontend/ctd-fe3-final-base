import { createContext } from "react";

export const LoginContext = createContext({});

const LoginProvider = ({ children }) => {

function saveToken(token){
    localStorage.setItem("@times_token", token);
    console.log("Chegou ate aqui")
}

function removeUserStorage() {
    localStorage.removeItem("@times_token");
  }

return(
    <LoginContext.Provider
    value={{removeUserStorage, saveToken }}
    >
        {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;