import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./lib/config/firebase";
import { ContextApi } from "./lib/helper/ContextApi";
import Home from "./pages/Main/Home";
import Login from "./pages/Auth/Login";
import NoPage from "./pages/NoPage404";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import LoadingPage from "./components/LoadingPage";
import Settings from "./pages/Main/Settings";
import MyProfile from "./pages/Main/MyProfile";
import Layout from "./Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./lib/config/firebase";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isDataAvaliable, setIsDataAvaliable] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);

  const getData = async (id) => {
    const docRef = doc(db, "Users", id);
    const docSnap = await getDoc(docRef);
    setCurrentUserData(docSnap.data());
    console.log(docSnap.data());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.emailVerified) {
        getData(user.email);
        setIsAuth(true);
      }
      setIsDataAvaliable(true);
    });
  }, []);

  if (!isDataAvaliable) {
    return <LoadingPage />;
  }

  return (
    <ContextApi.Provider value={{ isAuth, setIsAuth, currentUserData }}>
      <BrowserRouter>
        {isAuth ? (
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="Settings" element={<Settings />} />
              <Route path="MyProfile" element={<MyProfile />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </Layout>
        ) : (
          <Routes>
            <Route index element={<Login />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </ContextApi.Provider>
  );
}

export default App;
