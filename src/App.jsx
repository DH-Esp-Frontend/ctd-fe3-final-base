import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Queries from "./Routes/Queries";
import LoginProvider from "./contexts/login-context";

function App() {
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`{app light}`}>
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
    </>
  );
}

export default App;
