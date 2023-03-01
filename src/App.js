import { Route, Routes, useLocation } from "react-router-dom";
import AdminDashboard from "./dashboard/AdminDashboard";
import UserDashboard from "./dashboard/UserDashboard";
import { useState } from "react";
import Login from "./Login/Login";
import Topbar from "./scenes/global/Topbar";
import CustomReport from "./Pages/CustomReports/CustomReport";
import SiteStatus from "./Pages/SiteStatus/SiteStatus";
import SiteStatusData from "./Pages/SiteStatus/SiteStatusData";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Notifications from "./Pages/Notifications/Notifications";
import UserSideMapView from "./Pages/UserSideMapView/UserSideMapView"

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
        <Route path="/user/sitestatus" element={<SiteStatus />} />
        <Route path="/user/sitestatusdata" element={<SiteStatusData />} />
        <Route path="/user/myaccount" element={<MyAccount />} />
        <Route path="/user/notifications" element={<Notifications />} />
        <Route path="/user/mapview" element={<UserSideMapView />} />
        {/* <Route path="" element={<CustomReport />} /> */}
      </Routes>
    </div>
  );
}

export default App;
