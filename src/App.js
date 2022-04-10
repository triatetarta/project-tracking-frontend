import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Login, Register } from "./Auth";
import { Header } from "./Header";
import { Home } from "./Home/";
import { PrivateRoute } from "./PrivateRoute";
import { Ticket, Tickets } from "./Tickets";
import { useDispatch } from "react-redux";
import { closeAccount } from "./Header/headerSlice";
import { Footer } from "./Footer/";
import { Account } from "./Auth/";

const App = () => {
  const dispatch = useDispatch();

  const closeOpenMenus = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("accountButton")) return;
    if (!e.target.classList.contains("accountMenu")) {
      dispatch(closeAccount());
    }
  };

  return (
    <>
      <div onClick={(e) => closeOpenMenus(e)} className='min-h-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/tickets' element={<PrivateRoute />}>
            <Route path='/tickets' element={<Tickets />} />
          </Route>
          <Route path='/ticket/:ticketId' element={<PrivateRoute />}>
            <Route path='/ticket/:ticketId' element={<Ticket />} />
          </Route>
          <Route path='/account' element={<PrivateRoute />}>
            <Route path='/account' element={<Account />} />
          </Route>
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
