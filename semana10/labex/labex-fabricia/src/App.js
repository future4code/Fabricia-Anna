import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/index';
import LoginPage from './Pages/LoginPage/index';
import ListTripsPage from './Pages/ListTripsPage/index'
import ApplicationFormPage from './Pages/ApplicationFormPage/index'
import AdminTripList from './Pages/AdminTripList/index'
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
