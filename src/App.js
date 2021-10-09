import { Alert } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Post from "./components/Post/Post";
import Posts from "./components/Posts/Posts";

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path='/post-details/:id'>
          <Post />

        </Route>
        <Route path="*">
          <Alert style={{ 'margin': '200px 500px' }} severity="error">404 Page Not Found! Bad Request</Alert>


        </Route>
      </Switch>
    </Router>


  );
}

export default App;
