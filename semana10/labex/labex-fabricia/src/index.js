import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ListTripsPage from './Pages/ListTripsPage'
import ApplicationFormPage from './Pages/ApplicationFormPage'
import AdminHomePage from './Pages/AdminHomePage'
import TripDetails from './Pages/TripDetailsPage'
import CreatTrip from './Pages/CreateTripPage'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/ListTrip" component={ListTripsPage} />
      <Route path="/Aplication" component={ApplicationFormPage} />
      <Route path="/Admin" component={AdminHomePage} />
      <Route path="/TripDetails" component={TripDetails} />
      <Route path="/CreatTrip" component={CreatTrip} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);



/*

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/