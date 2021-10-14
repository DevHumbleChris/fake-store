import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Jewellery from './pages/Jewellery'
import MensClothing from './pages/MensClothing'
import WomensClothing from './pages/WomensClothing'
import Electronics from './pages/Electronics'

library.add(fab, fas, far)

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/jewelery" component={Jewellery} />
          <Route path="/mens-clothing" component={MensClothing} />
          <Route path="/womens-clothing" component={WomensClothing} />
          <Route path="/electronics" component={Electronics} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
