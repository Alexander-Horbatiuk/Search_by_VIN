import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import {Form} from "./Components/Form";
import {DescriptionList} from "./Components/DescriptionList";
import React from "react";
// import {HistoryContextForm} from "./Components/Form/HistiryContextForm";


function App() {
  return (
      // <HistoryContextForm>
          <BrowserRouter>
              <Route exact path={"/"} component={Form} />
              <Route exact path={"/variables"} component={DescriptionList} />
          </BrowserRouter>
      // </HistoryContextForm>
  );
}

export default App;
