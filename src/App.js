import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  Navbar,
  Nav,
  Container,
  Button
    } from 'react-bootstrap';

import './App.css'

import Home from './Home'
import Data from './Data'
import Error from './Error'
import Success from './Success'
import Notfound from './Notfound'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar className="bg-yellow">
          <Container>
            <Link to="/">
              <Navbar.Brand>Aplikasi Bansos</Navbar.Brand>
            </Link>
            <Nav className="ms-auto">
              <Link to="/tambah-data">
                <Button className="bg-blue">
                  Tambah Data
                </Button>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/tambah-data" exact component={Data}/>
          <Route path="/error" exact component={Error}/>
          <Route path="/success" exact component={Success}/>
          <Route path="*" exact component={Notfound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
