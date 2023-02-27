import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TbBuildingFactory2 } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";

const UserSiteSummary = () => {
  return (
    <div className="usersitesummary">
      <div className="usersitedata__header">
        <div className="usersitedata__header__card__wrapper">
          <div className="usersitedata__header__card">
            <p>BOD</p>
            <h1>39.01</h1>
            <span>mg/l</span>
            <span>Standard : 100 mg/l</span>
            <span>(15 minutes Average)</span>
          </div>
          <div>
            <p>Quick Range</p>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div>
          <div className="usersitedata__header__card">
            <p>Total Exceedances</p>
            <h1>0</h1>
          </div>
          <div className="usersitedata__header__card">
            <p>Data Avaibility (%)</p>
            <h1>95.83</h1>
          </div>
          <div className="usersitedata__header__card">
            <p>
              <TbBuildingFactory2 /> ETP
            </p>
            <p>
              <BiCurrentLocation/> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSiteSummary;
