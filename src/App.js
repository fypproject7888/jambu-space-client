import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./Components/Common/PrivateRoute";
import LoginPage from "./Components/User/Login/Login";
import SignUpPage from "./Components/User/Signup/Signup";
import HomePage from "./Components/Pages/Homepage";
import Chat from "./Components/Pages/Chat";
import AccountProfile from "./Components/Pages/AccountProfile";
import PostJob from "./Components/Pages/PostJob";
import DashboardPage from "./Components/Pages/Dashboard";
import JobsPage from "./Components/Pages/Jobs";
import UserDetailPage from "./Components/Pages/UserDetails";
import "./App.scss";

function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="pages" element={<PrivateRoute />}>
            <Route path="user-detail/:userID" element={<UserDetailPage />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<AccountProfile />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
