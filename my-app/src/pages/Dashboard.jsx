import React, { Fragment } from 'react'



import recommendCarsData from "../assets/dummy-data/recommendCars";
import CarStatsChart from '../charts/CarStatsChart';
import MileChart from '../charts/MileChart';
import SingleCard from '../components/reuseable/SingleCard';
import RecommendCarCard from '../components/UI/RecommendCarCard';
import '../styles/dashboard.css'



const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};



const Dashboard = () => {
  return (
    <Fragment>
      <div className="dashboard">

        <div className="dashboard__wrapper">
          <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
          </div>

          <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart/>
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
           <CarStatsChart/>
          </div>
          </div>

          <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard