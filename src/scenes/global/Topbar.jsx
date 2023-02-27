import React from "react";
import { MenuButton, MenuItem, MenuList, Menu, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Topbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Topbar = (props) => {
  if (props.userType === "admin") {
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
                <Link to={"/customreport"} className="topbar__menuLink">
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
              <BiUserCircle className="topbar__myaccount__icon" />
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
          <Menu>
            <Link
              to="/dashboard"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
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
                <Link to={"/customreport"} className="topbar__menuLink">
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
              <BiUserCircle className="topbar__myaccount__icon" />
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
};

export default Topbar;
