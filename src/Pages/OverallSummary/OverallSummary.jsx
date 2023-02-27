import BarChartComponent from "../../Components/OverallSummary/BarChartComponent";
import SiteStatusPie from "../../Components/OverallSummary/SiteStatusPie";
import "./overallsummary.css";
import BasicTable from "../../Components/OverallSummary/SiteDataGrid";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BiStation } from "react-icons/bi";
import {
  useGetStateWiseCountQuery,
  useGetTotalStationsQuery,
  useGetTotalParametersQuery,
} from "../../Store/Slices/overallSummarySlice";
import SubscriptionPopup from "./SubscriptionPopup";
import Loader from "../../scenes/global/Loader";


const OverallSummary = () => {
  const [isEnding, setIsEnding] = useState(true); // Subscription Ending State

  const responseInfo = useGetStateWiseCountQuery(); // Total Sites
  const totalStationsRes = useGetTotalStationsQuery(); // Total Stations
  const totalParametersRes = useGetTotalParametersQuery(); // Total Parameters


  // Condition Loader Loading
  if (responseInfo.isLoading) return <Loader />;
  if (totalParametersRes.isLoading) return <Loader />;
  if (totalStationsRes.isLoading) return <Loader />;
  return (
    <div className="overallsummary">
      <p className="overallsummary__title">Overall summary</p>
      <div className="dashboard__container">
        {/* Card and BarDiagram Container */}
        <div className="overallsummary__leftside__wrapper">
          {/* <button onClick={getData}>Get data</button> */}
          <div className="overallsummary__bardiagram__infocard">
            <div className="card card01">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Total sites</p>
                  <h1>
                    {responseInfo.data.data.active +
                      responseInfo.data.data.inactive +
                      responseInfo.data.data.delayed}
                  </h1>
                </div>
                <div className="card__iconwrapper">
                  <SlLocationPin className="card__icon" />
                </div>
              </div>
              <div className="card__content__h5">
                <h5>Active : {responseInfo.data.data.active}</h5>
                <h5>inactive : {responseInfo.data.data.inactive}</h5>
                <h5>delayed : {responseInfo.data.data.delayed} </h5>
              </div>
            </div>
            <div className="card card02">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Total Stations</p>
                  <h1>
                    {totalStationsRes.data.data.effluent +
                      totalStationsRes.data.data.emission}
                  </h1>
                </div>
                <div className="card__iconwrapper">
                  <BiStation className="card__icon" />
                </div>
              </div>
              <div className="card__content__h5">
                <h5>Effluent : {totalStationsRes.data.data.effluent}</h5>
                <h5>Emission : {totalStationsRes.data.data.emission}</h5>
              </div>
            </div>

            <div className="card card03">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Total parameters</p>
                  <h1>{totalParametersRes.data.data}</h1>
                </div>
                <div className="card__iconwrapper">
                  <BiStation className="card__icon" />
                </div>
              </div>
            </div>

            <div className=" card card04">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Total sites</p>
                  <h1>35</h1>
                </div>
                <div className="card__iconwrapper">
                  <SlLocationPin className="card__icon" />
                </div>
              </div>
            </div>
          </div>
          {/* bar chart Component */}
          <div className="overall__summary__barchart">
            <p className="barchart__header">Site Status Trend</p>
            {/* <BarChartComponent /> */}
          </div>
          {/* Site Data table */}
          <div>
            <BasicTable />
          </div>
        </div>
        <div className="overallsummary__rightside__wrapper">
          <SiteStatusPie />
        </div>
      </div>
      {isEnding ? <SubscriptionPopup setIsEnding={setIsEnding} /> : null}
    </div>
  );
};

export default OverallSummary;
