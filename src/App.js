import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './component/Home';
import {Footer} from './component/Footer';
import {NavBar} from './component/Navbar';
import {Checkout} from './component/Checkout';
import Homeit from './component/Homeit';
import Cart from './component/Cart';
import 'react-notifications/lib/notifications.css';
import './App.css';

function App() {
  return (
    <div className="App">
              <BrowserRouter>
      <header className="App-header">
       <NavBar/>
       <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/Checkout' component={Checkout} />
       <Route path='/Homeit' component={Homeit} />
       <Route path='/Cart' component={Cart} />
       </Switch>
       <Footer/>
      </header>
    </BrowserRouter>
    </div>
  );
}

export default App;
