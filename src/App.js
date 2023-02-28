import { Route, Routes, useLocation } from "react-router-dom";
import AdminDashboard from "./dashboard/AdminDashboard";
import UserDashboard from "./dashboard/UserDashboard";
import { useState } from "react";
import Login from "./Login/Login";
import Topbar from "./scenes/global/Topbar";
import CustomReport from "./Pages/CustomReports/CustomReport";

function App() {
  const [currentUserType, setCurrentUserType] = useState("user");
  const location = useLocation();

  //
  const showTopbar = location.pathname !== "/";

  return (
    <div className="app">
      {showTopbar && <Topbar currentUserType={currentUserType} />}

      <Routes>
        <Route path="/" element={<Login currentUserType={currentUserType} />} />
        <Route
          path="/admin"
          element={currentUserType === "admin" ? <AdminDashboard /> : <Login />}
        />
        <Route
          path="/user"
          element={currentUserType === "user" ? <UserDashboard /> : <Login />}
        />
        <Route path="/user/customreport" element={<CustomReport />} />
        {/* <Route path="" element={<CustomReport />} /> */}
      </Routes>
    </div>
  );
}

export default App;
