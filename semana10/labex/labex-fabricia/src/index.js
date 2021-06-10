import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ListTripsPage from './Pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from './Pages/ApplicationFormPage/ApplicationFormPage'
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage'
import TripDetails from './Pages/AdminHomePage/AdminHomePage'
import CreatTrip from './Pages/CreateTripPage/CreateTripPage'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />      
      <Route path="/trips/list" component={ListTripsPage} />
      <Route path="/trips/application" component={ApplicationFormPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/admin/trips/list" component={AdminHomePage} />
      <Route path="/admin/trips/create" component={TripDetails} />
      <Route path="/admin/trips/:id" component={CreatTrip} />
      <Route><div>Erro 404</div></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


