import React from "react";
import { MenuButton, MenuItem, MenuList, Menu, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Topbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import NotificationPopup from "./NotificationPopup";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";

const Topbar = (props) => {
  const [notfication, setNotifications] = useState(true);
  const [notificationPopup, setNotificationPopup] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotificationPopup(false);
    }, 10000); // 10 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (props.currentUserType === "admin") {
    return (
      <div className="topbar">
        <div className="topbar__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="topbar__menu">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Dashboard
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/admin"} className="topbar__menuLink">
                  Overall Summary
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/admin/sitesummary"} className="topbar__menuLink">
                  Site Summary
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Live Status
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/admin/camerastatus"} className="topbar__menuLink">
                  Camera Status
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/admin/mapview"} className="topbar__menuLink">
                  Map View
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/admin/sitestatus"} className="topbar__menuLink">
                  Site Status
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link
                  to={"/admin/livesitedisplay"}
                  className="topbar__menuLink"
                >
                  Live Site Display
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Reports
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"./customreport"} className="topbar__menuLink">
                  Custom Report
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/exceedancereport"} className="topbar__menuLink">
                  Exceedance Report
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Stations
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/stationstatus"} className="topbar__menuLink">
                  Station Status{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/parameters"} className="topbar__menuLink">
                  Parameters{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Analytics
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Audit Logs
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Calibration
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Remote Devices
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Actions
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <Link
              to="/datalogger"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              Datalogger
            </Link>
          </Menu>
        </div>
        <div className="topbar__myaccount">
          <Menu>
            <MenuButton as={Button} className="topbar__menuBtn">
              <FaRegUserCircle className="topbar__myaccount__icon" />
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/myaccount"} className="topbar__menuLink">
                  My Account{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/notifications"} className="topbar__menuLink">
                  Notifications{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    );
  }

  // User Navbar
  else {
    return (
      <div className="topbar">
        <div className="topbar__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="topbar__menu">
          <Menu className="topbar__menuBtn">
            <Link
              to="/user"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
                marginRight: "2rem",
              }}
            >
              Dashboard
            </Link>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Live Status
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                {/* <Link to={"/admin/camerastatus"} className="topbar__menuLink">
                  Camera Status
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link> */}
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/user/mapview"} className="topbar__menuLink">
                  Map View
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/user/sitestatus"} className="topbar__menuLink">
                  Site Status
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Reports
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/user/customreport"} className="topbar__menuLink">
                  Custom Report
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              {/* <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/exceedancereport"} className="topbar__menuLink"  style = {{pointerEvents : "none"}}>
                  Exceedance Report
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem> */}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Stations
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link  className="topbar__menuLink">
                  Station Status{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link className="topbar__menuLink">
                  Parameters{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              {/* <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem> */}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Analytics
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link  className="topbar__menuLink">
                  Multi Axis Report{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link  className="topbar__menuLink">
                  Matrix Report{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              {/* <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem> */}
            </MenuList>
          </Menu>
          <Menu>
            <Menu className="topbar__menuBtn">
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  marginRight: "2rem",
                }}
              >
                Audit Logs
              </Link>
            </Menu>
            {/* <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList> */}
          </Menu>
          <Menu className="topbar__menuBtn">
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
                marginRight: "2rem",
              }}
            >
              Calibration
            </Link>
            {/* <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Calibration
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList> */}
          </Menu>
          {/* <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Remote Devices
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu> */}
          {/* <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="topbar__menuBtn"
            >
              Actions
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/sitestatus"} className="topbar__menuLink">
                  Download{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu> */}
          {/* <Menu>
            <Link
              to="/datalogger"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              Datalogger
            </Link>
          </Menu> */}
        </div>
        <div className="topbar__myaccount">
          <Menu>
            <MenuButton as={Button} className="topbar__menuBtn">
              <FaRegUserCircle className="topbar__myaccount__icon" />
              {notfication ? (
                <RxDotFilled className="topbar__myaccount__icon__notificationAlert" />
              ) : null}
            </MenuButton>
            <MenuList className="topbar__menulist">
              <MenuItem className="topbar__menulist__menuItem">
                <Link to={"/user/myaccount"} className="topbar__menuLink">
                  My Account{" "}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
              <MenuItem className="topbar__menulist__menuItem">
                <Link
                  to={"/user/notifications"}
                  className="topbar__menuLink"
                  style={{ position: "relative" }}
                  onClick={() => setNotifications(false)}
                >
                  Notifications{" "}
                  {notfication ? (
                    <RxDotFilled className="topbar__menulist__menuItem__notificationAlert" />
                  ) : null}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <AnimatePresence>
            {notificationPopup && (
              <NotificationPopup setNotificationPopup={setNotificationPopup} />
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
};

export default Topbar;
