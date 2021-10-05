import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import {Form} from "./Components/Form";
import {DescriptionList} from "./Components/DescriptionList";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <Route exact path={"/"} component={Form} />
          <Route exact path={"/variables"} component={DescriptionList} />
      </BrowserRouter>
  );
}

export default App;
