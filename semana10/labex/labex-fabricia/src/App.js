import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/index';
import LoginPage from './Pages/LoginPage/index';
import ListTripsPage from './Pages/ListTripsPage/index'
import ApplicationFormPage from './Pages/ApplicationFormPage/index'
import AdminTripList from './Pages/AdminHomePage/index'
import TripDetailsPage from './Pages/TripDetailsPage/index'
import CreateTripPage from './Pages/CreateTripPage/index'




const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
           <HomePage/>
        </Route>

        <Route path="/trips/list" exact>
          <ListTripsPage/>
        </Route>

        <Route path="/trips/application" exact>
          <ApplicationFormPage/>
        </Route>

        <Route path="/login" exact>
          <LoginPage/>
        </Route>
        
        <Route path="/admin/trips/list" exact>
          <AdminTripList/>
        </Route> 
        <Route path="/admin/trips/:tripId" exact>
          <TripDetailsPage/>
          </Route> 
        <Route path="/admin/trips/create" exact>
          <CreateTripPage/>
          </Route> 
        <Route>
          <div>Erro 404
            </div></Route>
      </Switch>
    </BrowserRouter>   
 )
}

export default App;

/*
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
*/
