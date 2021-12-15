import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import { useStore } from "./context/store";
import { actions } from "./context/state";

function App() {
  const [state, dispatch] = useStore();
  const { openLoginModal } = state;

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("Authentication has been failed!");
        })
        .then((resObject) => {
          dispatch(actions.setUser({ loading: false, user: resObject.user }));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [dispatch]);

  return (
    <GlobalStyles>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {openLoginModal && (
        <Modal>
          <Login />
        </Modal>
      )}
    </GlobalStyles>
  );
}

export default App;
