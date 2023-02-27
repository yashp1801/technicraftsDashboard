import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./dashboard/AdminDashboard";
import UserDashboard from "./dashboard/UserDashboard";
import { useState } from "react";
import Login from "./Login/Login";
import OverallSummary from "./Pages/OverallSummary/OverallSummary";
import SiteSummary from "./Pages/SiteSummary/SiteSummary";
import MapView from "./Pages/MapView/MapView";
import CameraStatus from "./Pages/CameraStatus/CameraStatus";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Notifications from "./Pages/Notifications/Notifications";
import StationStatus from "./Pages/StationStatus/StationStatus";
import SiteStatus from "./Pages/SiteStatus/SiteStatus";
import SiteStatusData from "./Pages/SiteStatus/SiteStatusData";
import SiteLiveDisplay from "./Pages/SiteLiveDisplay/SiteLiveDisplay";
import DataLogger from "./Pages/Datalogger/DataLogger";
import FilteredCustomReport from "./Pages/CustomReports/FilteredCustomReport";
import ExceedanceReport from "./Pages/ExceedanceReport/ExceedanceReport";
import Parameters from "./Pages/Parameters/Parameters";
import CustomReport from "./Pages/CustomReports/CustomReport";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [currentUserType, setCurrentUserType] = useState("user");



  return (
    <div className="app">
      <Router>
        <Topbar userType = {currentUserType} />
        
        <Routes>
          <Route
            path="/"
            element={<Login onLogin={setCurrentUserType} />}
          />

          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="/admin/overallsummary" element={<OverallSummary />} />
            <Route path="/admin/sitesummary" element={<SiteSummary />} />
            <Route path="/admin/mapview" element={<MapView />} />
            <Route path="/admin/camerastatus" element={<CameraStatus />} />
            <Route path="/admin/myaccount" element={<MyAccount />} />
            <Route path="/admin/notifications" element={<Notifications />} />
            <Route path="/admin/stationstatus" element={<StationStatus />} />
            <Route path="/admin/sitestatus" element={<SiteStatus />} />
            <Route path="/admin/sitestatusdata" element={<SiteStatusData />} />
            {/* <Route path="/customreport" element={<CustomReport />} /> */}
            <Route
              path="/admin/livesitedisplay"
              element={<SiteLiveDisplay />}
            />
            <Route path="/admin/datalogger" element={<DataLogger />} />
            <Route
              path="/admin/exceedancereport"
              element={<ExceedanceReport />}
            />
            <Route path="/admin/parameters" element={<Parameters />} />
          </Route>
          <Route path="/user" element={<UserDashboard />}>
            <Route path="/user/customreport" element={<CustomReport />} />
            {/* <Route path="/user/mapview" element={<MapView />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
