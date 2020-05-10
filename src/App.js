import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Calendar from "./components/Calendar/Calendar";
import Todoes from "./components/Todoes/Todoes";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
   <BrowserRouter>
       <Header/>
       <Switch>
           <Route path="/" exact>
               <Calendar/>
           </Route>
           <Route path="/day" >
               <Todoes/>
           </Route>
           <Route path= "**">
               <PageNotFound/>
           </Route>
       </Switch>
   </BrowserRouter>
  );
}

export default App;
