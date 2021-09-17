import React from 'react';
import {Switch, Route, Link} from'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = ()=>{
  
return(
   <div>
     <h1>Hats Page</h1>
   </div>
   );
}



function App() {
  return (
    <div>
     <Route exact path ='/' component={HomePage}/>
     <Route  path = '/hats' component={HatsPage}/>
     
    </div>
  );
}

export default App;
